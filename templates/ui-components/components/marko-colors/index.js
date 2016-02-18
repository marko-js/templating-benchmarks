
module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getTemplateData: function(state, input) {
        return input;
    }
});