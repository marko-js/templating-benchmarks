// Compiled using marko@4.10.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/search-results/template.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"search-results-container\"><div class=\"searching\" id=\"searching\"><div class=\"wait-indicator-icon\"></div> Searching...</div><div id=\"resultsContainer\"><div class=\"hd\"><span class=\"count\"><span id=\"count\">" +
    marko_escapeXml(input.totalCount) +
    "</span> results</span><div class=\"view-modifiers\"><div class=\"view-select\">View: <div class=\"view-icon view-icon-selected\" id=\"viewIconGallery\"><i class=\"icon-th\"></i></div><div class=\"view-icon\" id=\"viewIconList\"><i class=\"icon-th-list\"></i></div></div></div></div><div id=\"resultsTarget\"><div class=\"search-results view-" +
    marko_escapeXmlAttr(input.view) +
    "\">");

  marko_forEach(input.searchRecords, function(searchRecord) {
    out.w("<div class=\"search-item\"><div class=\"search-item-container drop-shadow\"><div class=\"img-container\"><img src=\"" +
      marko_escapeXmlAttr(searchRecord.imgUrl) +
      "\"></div><h4 class=\"title\"><a href=\"" +
      marko_escapeXmlAttr(searchRecord.viewItemUrl) +
      "\">" +
      marko_escapeXml(searchRecord.title) +
      "</a></h4>" +
      marko_escapeXml(searchRecord.description));

    if (searchRecord.featured) {
      out.w("<div>Featured!</div>");
    }

    if (searchRecord.sizes && searchRecord.sizes.length) {
      out.w("<div>Sizes available:<ul>");

      marko_forEach(searchRecord.sizes, function(size) {
        out.w("<li>" +
          marko_escapeXml(size) +
          "</li>");
      });

      out.w("</ul></div>");
    }

    out.w("</div></div>");
  });

  out.w("</div></div></div></div>");
}

marko_template._ = marko_renderer(render, {
    ae_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/search-results/template.marko"
  };
