// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    module_util_module = require("../../helpers/util"),
    util_module = module_util_module.default || module_util_module,
    reverse = module_util_module.reverse,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_str = marko_helpers.s;

function render(input, out) {
  var data = input;

  out.w("<div>" +
    marko_str(reverse(input.A)) +
    marko_str(reverse(input.B)) +
    marko_str(reverse(input.C)) +
    marko_str(reverse(input.D)) +
    marko_str(reverse(input.E)) +
    "</div>");
}

marko_template._ = render;

marko_template.meta = {};
