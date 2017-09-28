var template = require('lodash.template');

module.exports = {
    name: 'lodash',
    ext: 'lodash',
    render: function(template, data, callback) {
        callback(null, template(data));
    },
    load: function(src, templatePath, templateName, callback) {
        callback(null, template(src, { interpolate: /{([\s\S\.\-\_]+?)}/g }));
    }
};
