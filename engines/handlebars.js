var handlebars = require('handlebars');

var pre = '(function() { var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; templates[%NAME%] = template(';
var post = ');})();';

module.exports = {
    name: 'handlebars',
    ext: 'hbs',
    cache: {},
    render: function(templatePath, data, callback) {
        var fn = this.cache[templatePath];
        var html = fn(data);
        setImmediate(function() {
            callback(null, html);    
        });
    },
    compile: function(src, templatePath, templateName, callback) {
        var compiled = handlebars.precompile(src);
        compiled = pre.replace(/%NAME%/, JSON.stringify(templateName)) + compiled + post;
        callback(null, compiled);
    },
    load: function(src, templatePath, templateName, callback) {
        this.cache[templatePath] = handlebars.compile(src);
        callback();
    }
};