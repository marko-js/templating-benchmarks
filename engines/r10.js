var r10 = require('r10');

r10.helper('reverse', require('../helpers/util').reverse);
r10.helper('getFullName', function(firstName, lastName) {
    return firstName + ' ' + lastName;
});

module.exports = {
    name: 'r10',
    ext: 'r10',
    render: function(template, data, callback) {
        callback(null, template(data));
    },
    compile: function(src, templatePath, templateName, callback) {
        callback(null, 'var template=' + r10.precompile(src));
    },
    load: function(src, templatePath, templateName, callback) {
        callback(null, r10.compile(src));
    }
};