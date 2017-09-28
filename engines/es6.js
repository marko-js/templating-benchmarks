var template = require('lodash.template');

module.exports = {
    name: 'es6',
    ext: 'es6.js',
    load: function(src, templatePath, templateName, callback) {
        var App = require(templatePath);
        callback(null, App);
    },
    render: function(template, data, callback) {
        callback(null, template.exec(data));
    }
};
