(function() { var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; templates["simple-1"] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n<ul>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.colors), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n</ul>\n";
},"2":function(depth0,helpers,partials,data) {
  var functionType="function", escapeExpression=this.escapeExpression;
  return "\n    <li class=\"color\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n    ";
},"4":function(depth0,helpers,partials,data) {
  return "\n<div>\n    No colors!\n</div>\n";
  },"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "Hello "
    + escapeExpression(((helper = helpers.name || (depth0 && depth0.name)),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "!\n   \n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.colors), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.colors), {"name":"unless","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
},"useData":true});})();