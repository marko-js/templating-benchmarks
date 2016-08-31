var jade = require('jade');

module.exports = {
    name: 'jade',
    ext: 'jade',
    render: function(template, data, callback) {
        callback(null, template(data));
    },
    compile: function(src, templatePath, templateName, callback) {
        var compiled = jade.compileClient(src);
        callback(null, compiled);
    },
    load: function(src, templatePath, templateName, callback) {
        callback(null, jade.compile(src));
    }
};