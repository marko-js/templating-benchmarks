module.exports=function anonymous(it
/**/) {
var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());var out='Hello '+encodeHTML(it.name)+'! ';if(it.colors && it.colors.length){out+=' <ul> ';var arr1=it.colors;if(arr1){var color,i1=-1,l1=arr1.length-1;while(i1<l1){color=arr1[i1+=1];out+=' <li class="color">'+encodeHTML(color)+'</li> ';} } out+='</ul>';}else{out+='<div> No colors!</div>';}return out;
}