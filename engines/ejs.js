var ejs = require('ejs');

module.exports = {
    name: 'ejs',
    ext: 'ejs',
    render: function(template, data, callback) {
        callback(null, template(data));
    },
    compile: function(src, templatePath, templateName, callback) {
        var compiled =
            'module.exports=' +
            ejs.compile(src, { compileDebug: false, client: true }).toString();
        callback(null, compiled);
    },
    load: function(src, templatePath, templateName, callback) {
        callback(null, ejs.compile(src, { compileDebug: false }));
    }
};
