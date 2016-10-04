function create(__markoHelpers) {
  var marko_escapeXml = __markoHelpers.x,
      marko_forEach = __markoHelpers.f,
      marko_attr = __markoHelpers.a,
      marko_escapeXmlAttr = __markoHelpers.xa;

  return function render(data, out) {
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
  };
}

(module.exports = require("marko").c(__filename)).c(create);
