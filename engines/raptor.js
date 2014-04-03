var raptorTemplates = require('raptor-templates');

module.exports = {
    name: 'raptor',
    ext: 'rhtml',
    render: function(templatePath, data, callback) {
        raptorTemplates.render(templatePath, data, function(err, output) {
            // console.log('R: ' + output);
            setImmediate(function() {
                callback(err, output);    
            });
        });
    },
    compile: function(src, templatePath, templateName, callback) {
        var compiled = require('raptor-templates/compiler').compile(src, templatePath);
        callback(null, compiled);
    }
};