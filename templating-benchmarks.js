var raptorTemplates = require('raptor-templates');
var dust = require('dustjs-linkedin');
var jade = require('jade');

var async = require('raptor-async');
var fs = require('fs');
var nodePath = require('path');
var UglifyJS = require("uglify-js");
var zlib = require('zlib');
require('dustjs-helpers');
require('raptor-ecma/es6');

var engines = [
    {
        name: 'raptor',
        ext: 'rhtml',
        render: function(templatePath, data, callback) {
            raptorTemplates.render(templatePath, data, function(err, output) {
                // console.log('R: ' + output);
                setImmediate(function() {
                    callback(err, output);    
                });
            });
        },
        compile: function(src, templatePath, templateName, callback) {
            var compiled = require('raptor-templates/compiler').compile(src, templatePath);
            callback(null, compiled);
        }
    },
    {
        name: 'dust',
        ext: 'dust',
        render: function(templatePath, data, callback) {
            dust.render(templatePath, data, function(err, output) {
                // console.log('D: ' + output);
                setImmediate(function() {
                    callback(err, output);    
                });
            });
        },
        compile: function(src, templatePath, templateName, callback) {
            var compiled = dust.compile(src, templateName);
            callback(null, compiled);
        }
    },
    {
        name: 'jade',
        ext: 'jade',
        cache: {},
        render: function(templatePath, data, callback) {
            var fn = this.cache[templatePath];
            var html = fn(data);
            setImmediate(function() {
                callback(null, html);    
            });
        },
        compile: function(src, templatePath, templateName, callback) {
            var compiled = jade.compileClient(src);
            callback(null, compiled);
        },
        load: function(src, templatePath, templateName, callback) {
            this.cache[templatePath] = jade.compile(src);
            callback();
        }
    }
];

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
templatesFiles.forEach(function(filename) {
        var path = nodePath.join(templatesDir, filename);
        var firstDot = filename.indexOf('.');
        var lastDot = filename.lastIndexOf('.');
        var ext = filename.substring(lastDot + 1);
        var groupName = filename.substring(0, firstDot);
        var nameNoExt = filename.substring(0, lastDot);
        var group = templateGroupsLookup[groupName] || (templateGroupsLookup[groupName] = {
            name: groupName,
            templates: []
        });

        if (filename.endsWith('.data.js')) {
            group.data = require(path);
        } else if (ext === 'json') {
            group.data = JSON.parse(fs.readFileSync(path, 'utf8'));
        } else {
            var engine = enginesByExt[ext];
            if (!engine) {
                console.log('Ignoring "' + filename + '"');
                return;
            }


            var secondDot = filename.indexOf('.', firstDot+1);
            var variant = null;
            
            if (secondDot !== -1) {
                // This is a template variant
                variant = filename.substring(firstDot+1, secondDot);
            }

            var baseHtmlOutputFile = nodePath.join(outputHtmldDir, filename);
            var outputFile = baseHtmlOutputFile + '.html';

            var outputCompileFile = nodePath.join(outputCompiledDir, filename + '.js');
            var outputCompileMinifiedFile = nodePath.join(outputCompiledMinifiedDir, filename + '.min.js');

            group.templates.push({
                getHtmlOutputFile: function(index) {
                    if (index == null) {
                        return outputFile;
                    } else {
                        return nodePath.join(outputHtmldDir, nameNoExt + '.' + index + '.' + ext + '.html');
                    }
                },
                engine: engine,
                templateFile: path,
                description: engine.name + (variant ? ' (' + variant + ')' : ''),
                outputFile: outputFile,
                compileName: filename.substring(0, lastDot),
                outputCompileFile: outputCompileFile,
                outputCompileMinifiedFile: outputCompileMinifiedFile
            });
        }
    });

templateGroups = Object.keys(templateGroupsLookup).map(function(groupName) {
    return templateGroupsLookup[groupName];
});

dust.onLoad = function(path, callback){
    fs.readFile(path, 'UTF-8', callback);
};

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
                    templateInfo.engine.load(src, templateInfo.templateFile, templateInfo.compileName, callback);
                });    
            }

            var data = templateGroup.data;

            if (Array.isArray(data)) {
                data.forEach(function(data, i) {
                    work.push(function(callback) {
                        var outputFile = templateInfo.getHtmlOutputFile(i);
                        templateInfo.engine.render(templateInfo.templateFile, data, function(err, output) {
                            fs.writeFileSync(outputFile, output, 'utf8');
                            callback(err);
                        });
                    });
                });
            } else {
                work.push(function(callback) {
                    templateInfo.engine.render(templateInfo.templateFile, data, function(err, output) {
                        fs.writeFileSync(templateInfo.outputFile, output, 'utf8');
                        callback(err);
                    });
                });
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
                            console.log(nodePath.basename(templateInfo.outputCompileMinifiedFile) + ': ' + gzippedBuffer.length + ' bytes gzipped (' + minifiedBuffer.length + ' bytes uncompressed)');

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

    suite('template: ' + templateGroup.name, function () {
        before(function(next) {
            warmup(next);
        });

        if (fast) {
            set('iterations', 1);
            set('type', 'static');    
        } else {
            set('iterations', 100);     // the number of times to run a given bench
            set('type', 'adaptive');    // or 'static' (see below)
            set('mintime', 2000);        // when adaptive, the minimum time in ms a bench should     
        }
        
        templateGroup.templates.forEach(function(templateInfo) {
            bench(templateInfo.description, function(next) {
                var data = templateGroup.data;
                if (Array.isArray(data)) {
                    var work = [];
                    data.forEach(function(data) {
                        work.push(function(callback) {
                            templateInfo.engine.render(templateInfo.templateFile, data, callback);
                        });
                    });
                    async.series(work, next);
                } else {
                    templateInfo.engine.render(templateInfo.templateFile, templateGroup.data, next);
                }
            });
        });     
    });
});