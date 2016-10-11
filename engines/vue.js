var renderer = require('vue-server-renderer').createRenderer();

module.exports = {
    name: 'vue',
    ext: 'vue.js',
    render: function(App, data, callback) {
        const vm = new App({
            data: data
        });


        renderer.renderToString(vm, function(err, html) {
            if (err) {
                throw err;
            }

            return callback(null, html);
        });
    },
    load: function(src, templatePath, templateName, callback) {
        var App = require(templatePath);
        callback(null, App);
    },
    compile: function(src, templatePath, templateName, callback) {
        callback(null, '');
    }
};

