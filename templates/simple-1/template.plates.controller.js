var Plates = require('plates');

module.exports = function(html, data) {
    var viewData = {};

    if (data.colors && data.colors.length) {
        viewData.color = data.colors.map(function(color) {
            return {
                name: color
            };
        });

        viewData.noColors = ' ';

    } else {
        viewData.colors = ' ';
    }
    
    
    return Plates.bind(html, viewData);
};