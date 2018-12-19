'use strict';
var React = require('react');

const renderColor = (color) => {React.memo((color) => {
    var style = {
        backgroundColor: color
    };

    return <li className="color" style={style}>
            {color}
        </li>
})};

const renderColors = (colors) =>  {React.memo((colors) => {
    if (colors.length) {
        return (<ul>{colors.map(renderColor)}</ul>);
    } else {
        return <div>No colors!</div>
    }
})};

module.exports = class extends React.PureComponent {
    componentDidMount() {
        console.log('Mounted!')
    }

    render() {
        return <div className="colors">
            Hello {this.props.name}
            {renderColors(this.props.colors)}
        </div>;
    }
};
