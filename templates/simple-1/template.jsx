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
        var style = {backgroundColor: 'blue', border: '1px solid black'};

        return <div className="simple-1" style={style}>
            <div className="colors">
                <span className="hello">Hello {this.props.name}! <strong>You have {this.props.messageCount} messages!</strong></span>
                {renderColors(this.props.colors)}
            </div>,
            <button type="button" className="{this.props.primary ? 'primary' : 'secondary'}">Click me!</button>
        </div>;
    }
});