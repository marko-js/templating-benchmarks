var pug = require('pug');

module.exports = {
    name: 'pug',
    ext: 'pug',
    render: function(template, data, callback) {
        callback(null, template(data));
    },
    compile: function(src, templatePath, templateName, callback) {
        var compiled = pug.compileClient(src);
        callback(null, compiled);
    },
    load: function(src, templatePath, templateName, callback) {
        callback(null, pug.compile(src));
    }
};