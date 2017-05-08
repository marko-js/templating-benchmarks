// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_str = marko_helpers.s,
    marko_loadTag = marko_helpers.t,
    init_components_tag = marko_loadTag(require("marko/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<html><head><title>" +
    marko_str(data.title) +
    "</title></head><body><p>" +
    marko_str(data.text) +
    "</p>");

  for (var i = 0,
      len = data.projects.length; i < len; i++) {
    var project = data.projects[i];

    out.w("<a href=\"" +
      marko_str(project.url) +
      "\">" +
      marko_str(project.name) +
      "</a><p>" +
      marko_str(project.description) +
      "</p>");
  }

  if (!data.projects.length) {
    out.w("No projects");
  }

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
