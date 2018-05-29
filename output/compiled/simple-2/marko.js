// Compiled using marko@4.10.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/simple-2/template.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><h1 class=\"header\">" +
    marko_escapeXml(input.header) +
    "</h1><h2 class=\"header2\">" +
    marko_escapeXml(input.header2) +
    "</h2><h3 class=\"header3\">" +
    marko_escapeXml(input.header3) +
    "</h3><h4 class=\"header4\">" +
    marko_escapeXml(input.header4) +
    "</h4><h5 class=\"header5\">" +
    marko_escapeXml(input.header5) +
    "</h5><h6 class=\"header6\">" +
    marko_escapeXml(input.header6) +
    "</h6><ul class=\"list\">");

  marko_forEach(input.list, function(item) {
    out.w("<li class=\"item\">" +
      marko_escapeXml(item) +
      "</li>");
  });

  out.w("</ul></div>");
}

marko_template._ = marko_renderer(render, {
    ae_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/simple-2/template.marko"
  };
