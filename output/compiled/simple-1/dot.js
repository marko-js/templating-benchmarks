module.exports=function anonymous(it) {
var out='Hello '+(it.name||'').toString().encodeHTML()+'! ';if(it.colors && it.colors.length){out+=' <ul> ';var arr1=it.colors;if(arr1){var color,i1=-1,l1=arr1.length-1;while(i1<l1){color=arr1[i1+=1];out+=' <li class="color">'+(color||'').toString().encodeHTML()+'</li> ';} } out+='</ul>';}else{out+='<div> No colors!</div>';}return out;
}