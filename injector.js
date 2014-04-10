var startRegExp = /<!--\s*<\s*(\w+)\s*>\s*-->/gi;
var endRegExp = /<!--\s*<\/\s*(\w+)\s*>\s*-->/g;

function Injector(pageHtml, keepMarkers) {
    this.keepMarkers = keepMarkers === true;
    this.parts = [];
    this.injectIndexes = {};
    this.findSlots(pageHtml);
}

Injector.prototype = {
    findSlots: function(pageHtml) {
        var injectIndexes = this.injectIndexes,
            parts = this.parts,
            startMatches, 
            endMatch,
            begin = 0;
            
        startRegExp.lastIndex = 0;
        
        
        while ((startMatches = startRegExp.exec(pageHtml))) {
            var slotName = startMatches[1];

            slotName = slotName.toLowerCase();
            
            parts.push(pageHtml.substring(begin, startMatches.index));
            
            injectIndexes[slotName] = parts.length;
            parts.push('');
            
            endRegExp.lastIndex = startRegExp.lastIndex;
            endMatch = endRegExp.exec(pageHtml);
            if (endMatch) {
                begin = endRegExp.lastIndex;
                startRegExp.lastIndex = endRegExp.lastIndex;
            }
            else {
                begin = startRegExp.lastIndex;
            }
        }
        
        if (begin < pageHtml.length) {
            parts.push(pageHtml.substring(begin));
        }
    },
    
    inject: function(slot, injectText) {
        slot = slot.toLowerCase();
        var injectIndex = this.injectIndexes[slot];

        var finalMarkup = this.keepMarkers ? ('<!-- <' + slot + '> -->\n```\n' + injectText.replace(/\s\s*$/,'') + '\n```\n<!-- </' + slot + '> -->') : injectText;

        if (injectIndex === undefined) {
            this.parts.push(finalMarkup);
        } else {
            this.parts[injectIndex] = finalMarkup;    
        }

        
    },
    
    getMarkup: function() {
        return this.parts.join('');
    }
};

exports.inject = function(target, values, options) {
    options = options || {};
    var keepMarkers = options.keepMarkers !== false;
    var injector = new Injector(target, keepMarkers);

    for (var slotName in values) {
        if (values.hasOwnProperty(slotName)) {
            injector.inject(slotName, values[slotName]);
        }
    }
    return injector.getMarkup();
};