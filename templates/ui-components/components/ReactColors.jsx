'use strict';
var React = require('react');

function renderColor(color) {
    var style = {
        backgroundColor: color
    };

    return <li className="color" style={style}>
            {color}
        </li>
}

function renderColors(colors) {
    if (colors.length) {
        return (<ul>{colors.map(renderColor)}</ul>);
    } else {
        return <div>No colors!</div>
    }
}

module.exports = React.createClass({
    render() {
        return <div className="colors">
            Hello {this.props.name}
            {renderColors(this.props.colors)}
        </div>;
    }
});