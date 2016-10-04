module.exports=function anonymous(it
/**/) {
var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());var out='<div class="simple-1" style="background-color: blue; border: 1px solid black"> <div class="colors"> <span class="hello">Hello '+encodeHTML(it.name)+'! <strong>You have '+encodeHTML(it.messageCount)+' messages!</strong></span> ';if(it.colors && it.colors.length){out+=' <ul> ';var arr1=it.colors;if(arr1){var color,i1=-1,l1=arr1.length-1;while(i1<l1){color=arr1[i1+=1];out+=' <li class="color">'+encodeHTML(color)+'</li> ';} } out+=' </ul> ';}else{out+=' <div> No colors! </div> ';}out+=' </div> <button type="button" class="';if(it.primary){out+='primary';}else{out+='secondary';}out+='">Click me!</button></div>';return out;
}