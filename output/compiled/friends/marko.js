function create(__markoHelpers) {
  var marko_forEach = __markoHelpers.f,
      marko_escapeXml = __markoHelpers.x,
      marko_attr = __markoHelpers.a,
      marko_escapeXmlAttr = __markoHelpers.xa;

  return function render(data, out) {
    out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Friends</title></head><body><div class=\"friends\">");

    marko_forEach(data.friends, function(friend) {
      out.w("<div class=\"friend\"><ul><li>Name: " +
        marko_escapeXml(data.getFullNameRaptor(friend)) +
        "</li><li>Balance: " +
        marko_escapeXml(friend.balance) +
        "</li><li>Age: " +
        marko_escapeXml(friend.age) +
        "</li><li>Address: " +
        marko_escapeXml(friend.address) +
        "</li><li>Image: <img" +
        marko_attr("src", friend.picture) +
        "></li><li>Company: " +
        marko_escapeXml(friend.company) +
        "</li><li>Email: <a href=\"mailto:" +
        marko_escapeXmlAttr(friend.email) +
        "\">" +
        marko_escapeXml(friend.email) +
        "</a></li><li>About: " +
        marko_escapeXml(friend.about) +
        "</li>");

      if (friend.tags.length) {
        out.w("<li>Tags: <ul>");

        marko_forEach(friend.tags, function(tag) {
          out.w("<li>" +
            marko_escapeXml(tag) +
            "</li>");
        });

        out.w("</ul></li>");
      }

      if (friend.friends.length) {
        out.w("<li>Friends: <ul>");

        marko_forEach(friend.friends, function(friend) {
          out.w("<li>" +
            marko_escapeXml(friend.name) +
            " (" +
            marko_escapeXml(friend.id) +
            ")</li>");
        });

        out.w("</ul></li>");
      }

      out.w("</ul></div>");
    });

    out.w("</div></body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
