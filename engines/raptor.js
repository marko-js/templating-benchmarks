var raptorTemplates = require('raptor-templates');

module.exports = {
    name: 'raptor',
    ext: 'rhtml',
    render: function(template, data, callback) {
        template.render(data, callback);
    },
    load: function(src, templatePath, templateName, callback) {
        var template = raptorTemplates.load(templatePath);
        callback(null, template);
    },
    compile: function(src, templatePath, templateName, callback) {
        var compiled = require('raptor-templates/compiler').compile(src, templatePath);
        callback(null, compiled);
    }
};