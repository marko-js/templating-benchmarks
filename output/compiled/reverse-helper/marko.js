function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  var reverse = require('../../helpers/util').reverse;

  return function render(data, out) {
    out.w(str(reverse(data.A)) +
      " " +
      str(reverse(data.B)) +
      " " +
      str(reverse(data.C)) +
      " " +
      str(reverse(data.D)) +
      " " +
      str(reverse(data.E)));
  };
}

(module.exports = require("marko").c(__filename)).c(create);
