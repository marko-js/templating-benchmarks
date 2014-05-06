var nunjucks = require('nunjucks');

nunjucks.configure({
    watch: false
});

module.exports = {
    name: 'nunjucks',
    ext: 'nunjucks',
    render: function(template, data, callback) {
        template.render(data, callback);
    },
    load: function(src, templatePath, templateName, callback) {

        var template = nunjucks.compile(src);
        callback(null, template);
    },
    compile: function(src, templatePath, templateName, callback) {
        var compiled = nunjucks.precompile(templatePath, {
            name: templateName
        });
        callback(null, compiled);
    }
};