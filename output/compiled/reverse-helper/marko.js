// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    util_module = require("../../helpers/util"),
    reverse = util_module.reverse,
    marko_helpers = require("marko/runtime/html/helpers"),
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
