// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_loadTag = marko_helpers.t,
    init_components_tag = marko_loadTag(require("marko/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

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

  out.w("</div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/components/taglib/init-components-tag",
      "marko/taglibs/async/await-reorderer-tag"
    ]
  };
