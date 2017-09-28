module.exports = {
    name: 'es6',
    ext: 'es6.js',
    load: function(src, templatePath, templateName, callback) {
        var template = require(templatePath);
        callback(null, template);
    },
    render: function(template, data, callback) {
        callback(null, template(data));
    }
};
