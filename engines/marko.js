var marko = require('marko');

require('marko/compiler').defaultOptions.checkUpToDate = false;

module.exports = {
    name: 'marko',
    ext: 'marko',
    render: function(template, data, callback) {
        callback(null, template.renderSync(data));
    },
    load: function(src, templatePath, templateName, callback) {
        var template = marko.load(templatePath);
        callback(null, template);
    },
    compile: function(src, templatePath, templateName, callback) {
        var compiled = require('marko/compiler').compile(src, templatePath);
        callback(null, compiled);
    }
};
