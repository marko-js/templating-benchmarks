'use strict';

var React = require('react');
var Colors = require('./components/ReactColors.jsx');

module.exports = module.exports = React.createClass({
    displayName: 'exports',
    render: function render() {
        return React.createElement(
            'div',
            { className: 'my-app' },
            React.createElement(Colors, { colors: this.props.colors, name: this.props.name })
        );
    }
});