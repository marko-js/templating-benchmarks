var swig = require('swig');

module.exports = {
    name: 'swig',
    ext: 'swig',
    render: function(template, data, callback) {
        var output = template(data);
        callback(null, output);
    },
    load: function(src, templatePath, templateName, callback) {
        var template = swig.compileFile(templatePath);
        callback(null, template);
    },
    compile: function(src, templatePath, templateName, callback) {
        var precompiled = swig.precompile(src, {
            filename: templatePath,
            locals: {}
        });

        var compiled = 'module.exports=' + precompiled.tpl.toString().replace('anonymous', '');
        callback(null, compiled);
    }
};