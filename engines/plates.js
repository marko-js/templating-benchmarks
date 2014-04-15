module.exports = {
    name: 'plates',
    ext: 'plates',
    cache: {},
    render: function(templatePath, data, callback) {
        var cached = this.cache[templatePath];
        var inputHtml = cached.html;
        var controller = cached.controller;

        var outputHtml = controller(inputHtml, data);
        setImmediate(function() {
            callback(null, outputHtml);    
        });
    },
    load: function(src, templatePath, templateName, callback) {
        var controllerPath = templatePath + '.controller.js';

        this.cache[templatePath] = {
            controller: require(controllerPath),
            html: src
        };
        callback();
    }
};