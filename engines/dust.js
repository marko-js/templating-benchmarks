var fs = require('fs');
var dust = require('dustjs-linkedin');
require('dustjs-helpers');
dust.onLoad = function(path, callback){
    fs.readFile(path, 'UTF-8', callback);
};

module.exports = {
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
};