'use strict';

var React = require('react');

function renderColor(color) {
    var style = {
        backgroundColor: color
    };

    return React.createElement(
        'li',
        { className: 'color', style: style },
        color
    );
}

function renderColors(colors) {
    if (colors.length) {
        return React.createElement(
            'ul',
            null,
            colors.map(renderColor)
        );
    } else {
        return React.createElement(
            'div',
            null,
            'No colors!'
        );
    }
}

module.exports = React.createClass({
    displayName: 'exports',
    render: function render() {
        return React.createElement(
            'div',
            { className: 'colors' },
            'Hello ',
            this.props.name,
            renderColors(this.props.colors)
        );
    }
});