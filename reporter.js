
var ansi = require('ansi');
var cursor = ansi(process.stdout);
var fs = require('fs');

module.exports = function(runner, utils) {
    /*jshint loopfunc:true */

    var color = utils.color;
    var humanize = utils.humanize;
    
    

    function removeColors(str) {
        return str.replace(/\033\[[0-9;]*m/g, '');
    }

    function padBefore(str, padding) {
        var withoutColors = removeColors(str);
        if (withoutColors.length < padding) {
            str = new Array(padding - withoutColors.length).join(' ') + str;
        }

        return str;
    }

    function resultLine(label, value, options) {
        options = options || {};

        var withoutColors = removeColors(label);
        var padding;

        var padSize = 27;
        
        var winner = options && options.winner;

        var actualLen = withoutColors.length;

        if (actualLen < padSize) {
            

            if (winner != null) {
                actualLen += 2; // space and symbol
            }
            padding = new Array(padSize - actualLen).join(' ');
        }

        

        var symbol = '';
        if (winner === true) {
            symbol = color('✓ ', 'green');
        } else if (winner === false) {
            symbol = color('✗ ', 'red');
        }

        return padding + symbol + label + (options.separator === false ? '   ' : ' » ') + value;
    }

    var resultsMarkdown = {
        performance: '',
        size: ''
    };

    function outLine(prop, str) {
        str = str || '';
        cursor.write(str + '\n');
        resultsMarkdown[prop] += removeColors(str) + '\n';
    }

    function performanceLine(str) {
        outLine('performance', str);
    }

    function sizeLine(str) {
        outLine('size', str);
    }

    function reportSizes() {
        cursor.write('\n');
        sizeLine(padBefore('', 23) + 'COMPILED SIZE (gzipped/uncompressed)');
        sizeLine(padBefore('', 23) + '====================================');
        var sizes = require('./templating-benchmarks').sizes;
        Object.keys(sizes).forEach(function(groupName) {
            sizeLine(padBefore('', 23) + groupName);
            var gzippedSizes = sizes[groupName].gzipped;
            var uncompressedSizes = sizes[groupName].uncompressed;

            var sortedSizes = [];
            var smallestUncompressed = null;

            Object.keys(gzippedSizes).forEach(function(template) {
                var uncompressedSize = uncompressedSizes[template];

                

                var templateSizeInfo = {
                    template: template,
                    size: gzippedSizes[template],
                    uncompressedSize: uncompressedSize
                };

                if (smallestUncompressed == null || uncompressedSize < smallestUncompressed.uncompressedSize) {
                    smallestUncompressed = templateSizeInfo;
                }

                sortedSizes.push(templateSizeInfo);
            });

            sortedSizes.sort(function (a, b) {
                a = a.size;
                b = b.size;
                return a - b;
            });

            var smallest = sortedSizes[0];
            var smallestSize = smallest.size;
            var smallestUncompressedSize = smallestUncompressed.uncompressedSize;

            for (var i=0; i<sortedSizes.length; i++) {
                var curSize = sortedSizes[i].size;
                var uncompressedSize = sortedSizes[i].uncompressedSize;
                var percentLarger = ((curSize - smallestSize) / curSize * 100).toFixed(2);
                var percentLargerUncompressed = ((uncompressedSize - smallestUncompressedSize) / uncompressedSize * 100).toFixed(2);

                var template = sortedSizes[i].template;

                var label;

                if (i === 0) {
                    label = color(template, 'green');
                } else {
                    label = color(template, 'red');
                }

                var leftColWidth = 20;
                var rightColWidth = 25;

                sizeLine(
                    resultLine(
                        label,
                        color(padBefore(gzippedSizes[template] + ' bytes gzipped', leftColWidth), 'cyan') + '   ' +
                            color(padBefore(uncompressedSize + ' bytes uncompressed', rightColWidth), 'cyan'),
                        {
                            winner: i === 0
                        }));

                var perLeftCol = '';
                var perRightCol = '';
                

                if (i !== 0) {
                    perLeftCol = color(percentLarger + '% larger', 'red');
                } else {
                    perLeftCol = color('(smallest)', 'green');
                }

                if (sortedSizes[i] !== smallestUncompressed) {
                    perRightCol = color(padBefore(percentLargerUncompressed, 5) + '% larger', 'red');
                } else {
                    perRightCol = color('(smallest)', 'green');
                }

                sizeLine(resultLine('', padBefore(perLeftCol, leftColWidth) + '   ' + padBefore(perRightCol, rightColWidth), { separator: false }));
            }
            sizeLine();

            
        });
    }



    runner.on('start', function () {
        cursor.write('\n');
        performanceLine(padBefore('', 23) + 'RUNTIME PERFORMANCE');
        performanceLine(padBefore('', 23) + '===================');
    });

    runner.on('end', function (stats) {
        cursor.write('\n');
        // console.log(color('  Suites:  ', 'gray') + stats.suites);
        // console.log(color('  Benches: ', 'gray') + stats.benches);
        // console.log(color('  Elapsed: ', 'gray') + humanize(stats.elapsed.toFixed(2)) + ' ms');
        // console.log();

        reportSizes();

        var readmeMarkdown = fs.readFileSync('README.md', 'utf8');
        readmeMarkdown = require('./injector').inject(readmeMarkdown, resultsMarkdown);
        fs.writeFileSync('README.md', readmeMarkdown, 'utf8');
    });

    runner.on('suite start', function (suite) {
        performanceLine(padBefore('', 23) + suite.title);
    });

    runner.on('suite end', function (suite) {


        var benches = suite.benches.concat([]);

        if (benches.length) {
            for (var i=0; i<benches.length; i++) {
                cursor.up().horizontalAbsolute(0).eraseLine();
            }
            // cursor.write('***');
            // process.exit(0);

            benches.sort(function (a, b) {
                a = a.stats.ops;
                b = b.stats.ops;
                return b - a;
            });

            var fasted = benches[0];
            var fastestOps = fasted.stats.ops;

            for (i=0; i<benches.length; i++) {
                var bench = benches[i];
                var ops = bench.stats.ops;
                var opsFormatted = humanize(bench.stats.ops.toFixed(0));
                

                var label;

                if (i === 0) {
                    label = color(bench.title, 'green');
                } else {
                    label = color(bench.title, 'red');
                }

                var value = color(padBefore(opsFormatted, 9) + ' op/s', 'cyan');
                if (i !== 0) {
                    var percentSlower = bench.percentSlower = ((fastestOps - ops) / fastestOps * 100).toFixed(2);
                    value += color(' (' +  percentSlower + '% slower)', 'red');
                } else {
                    value += color(' (fastest)', 'green');
                }

                performanceLine(resultLine(label, value, { winner: i === 0 }));
            }

            performanceLine();
        }
        
    });

    runner.on('bench start', function (bench) {
        cursor.write(resultLine(bench.title, color('wait', 'yellow')));
    });

    runner.on('bench end', function (bench) {
        var ops = humanize(bench.ops.toFixed(0));
        cursor.horizontalAbsolute(0).eraseLine().write(resultLine(bench.title, color(padBefore(ops, 9) + ' op/s', 'cyan') + '\n'));
    });
};