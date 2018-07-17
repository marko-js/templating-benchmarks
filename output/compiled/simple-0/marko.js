// Compiled using marko@4.10.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/simple-0/template.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_str = marko_helpers.s;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("Hello " +
    marko_str(input.name) +
    "! You have " +
    marko_str(input.messageCount) +
    " messages! " +
    marko_str(input.colors));
}

marko_template._ = marko_renderer(render, {
    ae_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/simple-0/template.marko"
  };
