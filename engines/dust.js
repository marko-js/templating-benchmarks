var fs = require('fs');
var dust = require('dustjs-linkedin');
require('dustjs-helpers');
dust.onLoad = function(path, callback){
    fs.readFile(path, 'UTF-8', callback);
};


dust.helpers.reverse = require('../helpers/util').reverseDust;

module.exports = {
    name: 'dust',
    ext: 'dust',
    render: function(template, data, callback) {
        template(data, callback);
    },
    load: function(src, templatePath, templateName, callback) {
        var templateFn = dust.compileFn(src, templateName);
        callback(null, templateFn);
    },
    compile: function(src, templatePath, templateName, callback) {
        var compiled = dust.compile(src, templateName);
        callback(null, compiled);
    }
};