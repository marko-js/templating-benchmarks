function reverse(str) {
    var out = "";
    for (var i=str.length-1; i>=0; i--) {
        out += str.charAt(i); 
    }
    return out;
}

exports.reverseDust = function(chunk, context, bodies, params) {
    var string = params.str;
    return chunk.write(reverse(string));
};

exports.reverse = reverse;