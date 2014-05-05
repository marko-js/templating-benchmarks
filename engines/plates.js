module.exports = {
    name: 'plates',
    ext: 'plates',
    cache: {},
    render: function(template, data, callback) {
        var inputHtml = template.html;
        var controller = template.controller;

        var outputHtml = controller(inputHtml, data);
        callback(null, outputHtml);
    },
    load: function(src, templatePath, templateName, callback) {
        var controllerPath = templatePath + '.controller.js';
        callback(null, {
            controller: require(controllerPath),
            html: src
        });
    }
};