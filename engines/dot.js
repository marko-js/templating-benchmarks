var dot = require('dot');

module.exports = {
    name: 'dot',
    ext: 'dot',
    render: function(template, data, callback) {
        callback(null, template(data));
    },
    compile: function(src, templatePath, templateName, callback) {
        var compiled = 'module.exports=' + dot.template(src).toString();
        callback(null, compiled);
    },
    load: function(src, templatePath, templateName, callback) {
        callback(null, dot.template(src));
    }
};