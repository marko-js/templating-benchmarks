var async = require('raptor-async');
var fs = require('fs');
var nodePath = require('path');
var UglifyJS = require("uglify-js");
var zlib = require('zlib');

require('raptor-ecma/es6');

var enginesDir = nodePath.join(__dirname, 'engines');

var engines = fs.readdirSync(enginesDir)
    .map(function(filename) {
        if (filename.endsWith('.js')) {
            return require(nodePath.join(enginesDir, filename));    
        }
    });

var enginesByExt = {};
engines.forEach(function(engine) {
    enginesByExt[engine.ext] = engine;
});

var templatesDir = nodePath.join(__dirname, 'templates');
var outputDir = nodePath.join(__dirname, 'output');
var outputCompiledDir = nodePath.join(__dirname, 'output/compiled');
var outputCompiledMinifiedDir = nodePath.join(__dirname, 'output/compiled.min');
var outputHtmldDir = nodePath.join(__dirname, 'output/html');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

if (!fs.existsSync(outputCompiledDir)) {
    fs.mkdirSync(outputCompiledDir);
}

if (!fs.existsSync(outputCompiledMinifiedDir)) {
    fs.mkdirSync(outputCompiledMinifiedDir);
}

if (!fs.existsSync(outputHtmldDir)) {
    fs.mkdirSync(outputHtmldDir);
}

var templatesFiles = fs.readdirSync(templatesDir);
var templateGroupsLookup = {};
var templateGroups;
templatesFiles.forEach(function(groupName) {
        var groupDir = nodePath.join(templatesDir, groupName);
        var statSync = fs.statSync(groupDir);

        if (!statSync.isDirectory()) {
            return;
        }

        var group = templateGroupsLookup[groupName] || (templateGroupsLookup[groupName] = {
            name: groupName,
            templates: [],
            data: {}
        });

        var groupFilenames = fs.readdirSync(groupDir);
        groupFilenames.forEach(function(filename) {
            if (filename.charAt(0) === '.' || (!filename.startsWith('template') && !filename.startsWith('data'))) {
                return;
            }

            if (filename.startsWith('template') && filename.endsWith('.js')) {
                // Skip compiled files
                return;
            }

            var path = nodePath.join(groupDir, filename);

            if (filename === 'data.js') {
                group.data = require(path);
            } else if (filename === 'data.json') {
                group.data = JSON.parse(fs.readFileSync(path, 'utf8'));
            } else {
                // Should be a template
                var firstDot = filename.indexOf('.');
                var lastDot = filename.lastIndexOf('.');
                var ext = filename.substring(lastDot + 1);

                var engine = enginesByExt[ext];
                if (!engine) {
                    console.log('No templating engine found for "' + filename + '". Ignoring file');
                    return;
                }

                var secondDot = filename.indexOf('.', firstDot+1);
                var variant = null;
                
                if (secondDot !== -1) {
                    // This is a template variant
                    variant = filename.substring(firstDot+1, secondDot);
                }

                var baseHtmlOutputFile = nodePath.join(outputHtmldDir, groupName);
                try {
                    fs.mkdirSync(baseHtmlOutputFile);    
                } catch(e) {}

                try {
                    fs.mkdirSync(nodePath.join(outputCompiledDir, groupName));    
                } catch(e) {}

                try {
                    fs.mkdirSync(nodePath.join(outputCompiledMinifiedDir, groupName));    
                } catch(e) {}

                var outputFile = nodePath.join(baseHtmlOutputFile, engine.name + (variant ? '.' + variant : '') + '.html');
                var outputCompileFile = nodePath.join(outputCompiledDir, groupName, engine.name + (variant ? '.' + variant : '') + '.js');
                var outputCompileMinifiedFile = nodePath.join(outputCompiledMinifiedDir, groupName, engine.name + (variant ? '.' + variant : '') + '.min.js');

                group.templates.push({
                    getHtmlOutputFile: function(index) {
                        if (index == null) {
                            return outputFile;
                        } else {
                            return nodePath.join(baseHtmlOutputFile, index + '.' + engine.name + '.html');
                        }
                    },
                    engine: engine,
                    templateFile: path,
                    description: engine.name + (variant ? ' (' + variant + ')' : ''),
                    outputFile: outputFile,
                    compileName: groupName,
                    outputCompileFile: outputCompileFile,
                    outputCompileMinifiedFile: outputCompileMinifiedFile
                });
            }
        });
    });

templateGroups = Object.keys(templateGroupsLookup).map(function(groupName) {
    return templateGroupsLookup[groupName];
});



var warmedUp = false;

function warmup(callback) {
    if (warmedUp) {
        return callback();
    }

    warmedUp = true;

    var sizes = {};
    var work = [];


    templateGroups.forEach(function(templateGroup) {
        var sizeInfo = sizes[templateGroup.name] = {
            gzipped: {},
            uncompressed: {}
        };
        templateGroup.templates.forEach(function(templateInfo) {

            if (templateInfo.engine.load) {
                work.push(function(callback) {
                    var src = fs.readFileSync(templateInfo.templateFile, 'utf8');
                    templateInfo.engine.load(src, templateInfo.templateFile, templateInfo.compileName, function(err, template) {
                        if (err) {
                            return callback(err);
                        }

                        templateInfo.loadedTemplate = template;

                        callback();
                    });
                });    
            } else {
                templateInfo.loadedTemplate = templateInfo.templateFile;
            }

            var data = templateGroup.data;

            for (var i=0; i<100; i++) {
                if (Array.isArray(data)) {
                    data.forEach(function(data, i) {
                        work.push(function(callback) {
                            var template = templateInfo.loadedTemplate;
                            var outputFile = templateInfo.getHtmlOutputFile(i);
                            templateInfo.engine.render(template, data, function(err, output) {
                                fs.writeFileSync(outputFile, output, 'utf8');
                                callback(err);
                            });
                        });
                    });
                } else {
                    work.push(function(callback) {
                        var template = templateInfo.loadedTemplate;
                        templateInfo.engine.render(template, data, function(err, output) {
                            fs.writeFileSync(templateInfo.outputFile, output, 'utf8');
                            callback(err);
                        });
                    });
                }
            }
            

            if (templateInfo.engine.compile) {
                work.push(function(callback) {
                    var src = fs.readFileSync(templateInfo.templateFile, 'utf8');
                    templateInfo.engine.compile(src, templateInfo.templateFile, templateInfo.compileName, function(err, output) {
                        if (err) {
                            return callback(err);
                        }

                        fs.writeFileSync(templateInfo.outputCompileFile, output, 'utf8');

                        // Save the minified version to disk
                        var minified = UglifyJS.minify(templateInfo.outputCompileFile).code;
                        fs.writeFileSync(templateInfo.outputCompileMinifiedFile, minified, 'utf8');

                        zlib.gzip(minified, function(err, gzippedBuffer) {
                            if (err) {
                                callback(err);
                                return;
                            }

                            // Compare the sizes
                            var minifiedBuffer = new Buffer(minified, 'utf8');
                            // console.log(nodePath.basename(templateInfo.outputCompileMinifiedFile) + ': ' + gzippedBuffer.length + ' bytes gzipped (' + minifiedBuffer.length + ' bytes uncompressed)');

                            sizeInfo.gzipped[templateInfo.description] = gzippedBuffer.length;
                            sizeInfo.uncompressed[templateInfo.description] = minifiedBuffer.length;
                            callback();
                        });

                        
                    });
                });    
            }
        });
    });

    async.series(work, function(err, results) {
        exports.sizes = sizes;
        fs.writeFileSync(nodePath.join(outputDir, 'sizes.json'), JSON.stringify(sizes, null, 4), 'utf8');
        callback(err);
    });
}

var only = null; //'if-expression';
var fast = false;

templateGroups.forEach(function(templateGroup) {
    if (only && templateGroup.name !== only) {
        return;
    }

    suite(templateGroup.name, function () {
        before(function(next) {
            warmup(next);
            global.gc();
        });

        if (fast) {
            set('iterations', 10);
            set('type', 'static');    
        } else {
            set('iterations', 100);     // the number of times to run a given bench
            set('type', 'adaptive');    // or 'static' (see below)
            set('mintime', 2000);        // when adaptive, the minimum time in ms a bench should     
        }
        
        templateGroup.templates.forEach(function(templateInfo) {
            bench(templateInfo.description, function(next) {
                var data = templateGroup.data;
                var template = templateInfo.loadedTemplate;

                function done(err) {
                    if (err) {
                        next(err);
                    } else {
                        setImmediate(function() {
                            next(null);    
                        });
                    }
                }

                if (Array.isArray(data)) {
                    var work = [];
                    data.forEach(function(data) {
                        work.push(function(callback) {
                            templateInfo.engine.render(template, data, callback);
                        });
                    });
                    async.series(work, done);
                } else {
                    templateInfo.engine.render(template, templateGroup.data, done);
                }
            });
        });     
    });
});