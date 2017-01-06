var marko_template = module.exports = require("marko/html").t(__filename);


var reverse = require('../../helpers/util').reverse;

function render(data, out) {
  out.w("<$!{reverse(data.A)}></$!{reverse(data.A)}><$!{reverse(data.B)}></$!{reverse(data.B)}><$!{reverse(data.C)}></$!{reverse(data.C)}><$!{reverse(data.D)}></$!{reverse(data.D)}><$!{reverse(data.E)}></$!{reverse(data.E)}>");
}

marko_template._ = render;
