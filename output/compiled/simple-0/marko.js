// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_str = marko_helpers.s;

function render(input, out) {
  var data = input;

  out.w("Hello " +
    marko_str(input.name) +
    "! You have " +
    marko_str(input.messageCount) +
    " messages! " +
    marko_str(input.colors));
}

marko_template._ = render;

marko_template.meta = {};
