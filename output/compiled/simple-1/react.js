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
        var style = { backgroundColor: 'blue', border: '1px solid black' };

        return React.createElement(
            'div',
            { className: 'simple-1', style: style },
            React.createElement(
                'div',
                { className: 'colors' },
                React.createElement(
                    'span',
                    { className: 'hello' },
                    'Hello ',
                    this.props.name,
                    '! ',
                    React.createElement(
                        'strong',
                        null,
                        'You have ',
                        this.props.messageCount,
                        ' messages!'
                    )
                ),
                renderColors(this.props.colors)
            ),
            ',',
            React.createElement(
                'button',
                { type: 'button', className: '{this.props.primary ? \'primary\' : \'secondary\'}' },
                'Click me!'
            )
        );
    }
});