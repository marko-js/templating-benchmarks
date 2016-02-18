var React = require('react');
var Colors = require('./components/ReactColors.jsx');

module.exports = module.exports = React.createClass({
    render() {
        return <div className="my-app">
            <Colors colors={this.props.colors} name={this.props.name}/>
        </div>;
    }
});