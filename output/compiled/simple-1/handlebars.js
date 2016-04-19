(function() { var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; templates["simple-1"] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "        <li class=\"color\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "    <div>\n        No colors!\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"colors\">\n    Hello "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "!\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.colors : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});})();