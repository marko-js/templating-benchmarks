module.exports = function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      escapeXmlAttr = __helpers.xa,
      forLoop = __helpers.fl,
      attr = __helpers.a;

  return function render(data, out) {
    out.s('<div class="search-results-container"><div class="searching" id="searching"><div class="wait-indicator-icon"></div> Searching...</div><div id="resultsContainer"><div class="hd"><span class="count"><span id="count">' +
      escapeXml(data.totalCount) +
      '</span> results</span><div class="view-modifiers"><div class="view-select">View: <div class="view-icon view-icon-selected" id="viewIconGallery"><i class="icon-th"></i></div><div class="view-icon" id="viewIconList"><i class="icon-th-list"></i></div></div></div></div><div id="resultsTarget"><div class="search-results view-' +
      escapeXmlAttr(data.view) +
      '">');

    forLoop(data.searchRecords, function(__array,__index,__length,searchRecord) {
      for (;__index<__length;__index++) {
        searchRecord=__array[__index];

        out.s('<div class="search-item"><div class="search-item-container drop-shadow"><div class="img-container"><img' +
          attr("src", searchRecord.imgUrl) +
          '></div><h4 class="title"><a' +
          attr("href", searchRecord.viewItemUrl) +
          '>' +
          escapeXml(searchRecord.title) +
          '</a></h4>' +
          escapeXml(searchRecord.description));

        if (searchRecord.featured) {
          out.s('<div>Featured!</div>');
        }

        if (notEmpty(searchRecord.sizes)) {
          out.s('<div>Sizes available:<ul>');

          forLoop(searchRecord.sizes, function(__array,__index,__length,size) {
            for (;__index<__length;__index++) {
              size=__array[__index];

              out.s('<li>' +
                escapeXml(size) +
                '</li>');
            }
          });

          out.s('</ul></div>');
        }

        out.s('</div></div>');
      }
    });

    out.s('</div></div></div></div>');
  };
}