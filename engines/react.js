var React = require('react');
var ReactDOMServer = require('react-dom/server');

var babel = require('babel-core');
var babelConfig = {
    presets: ["react", "es2015"]
};

module.exports = {
    name: 'react',
    ext: 'jsx',
    render: function(Component, data, callback) {
        var html =  ReactDOMServer.renderToString(React.createElement(Component, data));
        callback(null, html);
    },
    load: function(src, templatePath, templateName, callback) {
        var Component = require(templatePath);
        callback(null, Component);
    },
    compile: function(src, templatePath, templateName, callback) {
        var transformed = babel.transform(src, babelConfig);
        callback(null, transformed.code);
    }
};

