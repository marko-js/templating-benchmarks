var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    marko_escapeXmlAttr = marko_helpers.xa;

function render(data, out) {
  out.w("<div class=\"search-results-container\"><div class=\"searching\" id=\"searching\"><div class=\"wait-indicator-icon\"></div> Searching...</div><div id=\"resultsContainer\"><div class=\"hd\"><span class=\"count\"><span id=\"count\">" +
    marko_escapeXml(data.totalCount) +
    "</span> results</span><div class=\"view-modifiers\"><div class=\"view-select\">View: <div class=\"view-icon view-icon-selected\" id=\"viewIconGallery\"><i class=\"icon-th\"></i></div><div class=\"view-icon\" id=\"viewIconList\"><i class=\"icon-th-list\"></i></div></div></div></div><div id=\"resultsTarget\"><div class=\"search-results view-" +
    marko_escapeXmlAttr(data.view) +
    "\">");

  marko_forEach(data.searchRecords, function(searchRecord) {
    out.w("<div class=\"search-item\"><div class=\"search-item-container drop-shadow\"><div class=\"img-container\"><img" +
      marko_attr("src", searchRecord.imgUrl) +
      "></div><h4 class=\"title\"><a" +
      marko_attr("href", searchRecord.viewItemUrl) +
      ">" +
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

marko_template._ = render;
