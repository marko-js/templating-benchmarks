var jade = require('jade');

module.exports = {
    name: 'jade',
    ext: 'jade',
    cache: {},
    render: function(templatePath, data, callback) {
        var fn = this.cache[templatePath];
        var html = fn(data);
        setImmediate(function() {
            callback(null, html);    
        });
    },
    compile: function(src, templatePath, templateName, callback) {
        var compiled = jade.compileClient(src);
        callback(null, compiled);
    },
    load: function(src, templatePath, templateName, callback) {
        this.cache[templatePath] = jade.compile(src);
        callback();
    }
};