

module.exports = function(runner, utils) {
    /*jshint loopfunc:true */

    var color = utils.color;
    var humanize = utils.humanize;
    var padBefore = utils.padBefore;
    var cursor = utils.cursor;


    function benchLine(label, value) {
        process.stdout.write(color(padBefore(label + ' » ', 25), 'gray') +
                value);
    }

    function reportSizes() {
        console.log();
        console.log(padBefore('', 23) + 'COMPILED SIZE');
        console.log(padBefore('', 23) + '=============');
        var sizes = require('./templating-benchmarks').sizes;
        Object.keys(sizes).forEach(function(groupName) {
            console.log(padBefore('', 23) + groupName);
            var gzippedSizes = sizes[groupName].gzipped;
            var uncompressedSizes = sizes[groupName].uncompressed;

            var sortedSizes = [];

            Object.keys(gzippedSizes).forEach(function(template) {
                sortedSizes.push({
                    template: template,
                    size: gzippedSizes[template]
                });
                benchLine(template, color(gzippedSizes[template] + ' bytes gzipped (' + uncompressedSizes[template] + ' bytes uncompressed)\n', 'cyan'));
            });

            sortedSizes.sort(function (a, b) {
                a = a.size;
                b = b.size;
                return a - b;
            });

            var smallest = sortedSizes[0];
            var smallestSize = smallest.size;

            console.log(color(padBefore('✓ ', 25) + ' ' + smallest.template, 'green'));
            for (var i=1; i<sortedSizes.length; i++) {
                var curSize = sortedSizes[i].size;
                var percentLarger = ((curSize - smallestSize) / curSize * 100).toFixed(2);
                console.log(color(padBefore('✗ ', 25) + ' ' + sortedSizes[i].template + ' (' +  percentLarger + '% larger)', 'red'));
            }
            console.log();

            
        });
    }

    

    runner.on('start', function () {
        console.log();
        console.log(padBefore('', 23) + 'RUNTIME PERFORMANCE');
        console.log(padBefore('', 23) + '===================');
    });

    runner.on('end', function (stats) {
        console.log();
        // console.log(color('  Suites:  ', 'gray') + stats.suites);
        // console.log(color('  Benches: ', 'gray') + stats.benches);
        // console.log(color('  Elapsed: ', 'gray') + humanize(stats.elapsed.toFixed(2)) + ' ms');
        // console.log();

        reportSizes();

        
    });

    runner.on('suite start', function (suite) {
        console.log(padBefore('', 23) + suite.title);
    });

    runner.on('suite end', function (suite) {
        console.log();

        var benches = suite.benches.concat([]);

        if (benches.length) {
            


            benches.sort(function (a, b) {
                a = a.stats.ops;
                b = b.stats.ops;
                return b - a;
            });

            var fasted = benches[0];
            var fastestOps = fasted.stats.ops;

            console.log(color(padBefore('✓ ', 25) + ' ' + fasted.title, 'green'));
            for (var i=1; i<benches.length; i++) {
                var slowerOps = benches[i].stats.ops;
                var percentSlower = ((fastestOps - slowerOps) / fastestOps * 100).toFixed(2);
                console.log(color(padBefore('✗ ', 25) + ' ' + benches[i].title + ' (' +  percentSlower + '% slower)', 'red'));
            }
            console.log();
        }
        
    });

    runner.on('bench start', function (bench) {
        benchLine(bench.title, color('wait', 'yellow'));
    });

    runner.on('bench end', function (bench) {
        cursor.CR();
        var ops = humanize(bench.ops.toFixed(0));
        benchLine(bench.title, color(ops + ' op/s', 'cyan') + '\n');
    });
};