// Compiled using marko@4.10.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/simple-1/template.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_str = marko_helpers.s,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_classAttr = marko_helpers.ca;

function render(input, out, __component, component, state) {
  var data = input;

  var color,
      color__i,
      color__array,
      color__len;

  out.w("<div class=\"simple-1\" style=\"background-color: blue; border: 1px solid black\"><div class=\"colors\"><span class=\"hello\">Hello " +
    marko_escapeXml(input.name) +
    "! <strong>You have " +
    marko_str(input.messageCount) +
    " messages!</strong></span>");

  if (input.colors.length) {
    out.w("<ul>");

    for (color__i = 0, color__array = input.colors, color__len = color__array && color__array.length; color__i < color__len; color__i++) {
      color = color__array[color__i];

      out.w("<li style=\"background-color: " +
        marko_escapeXmlAttr(color) +
        "\" class=\"color\">" +
        marko_escapeXml(color) +
        "</li>");
    }

    out.w("</ul>");
  } else {
    out.w("<div>No colors!</div>");
  }

  out.w("</div><button type=\"button\"" +
    marko_classAttr(input.primary ? "primary" : "secondary") +
    ">" +
    marko_escapeXml(input.buttonLabel) +
    "</button></div>");
}

marko_template._ = marko_renderer(render, {
    ae_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/simple-1/template.marko"
  };
