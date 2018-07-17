// Compiled using marko@4.10.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/reverse-helper/template.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_util_module = require("../../helpers/util"),
    util_module = module_util_module.default || module_util_module,
    reverse = module_util_module.reverse,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_str = marko_helpers.s;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div>" +
    marko_str(reverse(input.A)) +
    marko_str(reverse(input.B)) +
    marko_str(reverse(input.C)) +
    marko_str(reverse(input.D)) +
    marko_str(reverse(input.E)) +
    "</div>");
}

marko_template._ = marko_renderer(render, {
    ae_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/reverse-helper/template.marko"
  };
