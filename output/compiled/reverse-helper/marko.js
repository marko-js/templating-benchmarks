function create(__markoHelpers) {
  var marko_str = __markoHelpers.s;

  var reverse = require('../../helpers/util').reverse;

  return function render(data, out) {
    out.w(marko_str(reverse(data.A)) +
      marko_str(reverse(data.B)) +
      marko_str(reverse(data.C)) +
      marko_str(reverse(data.D)) +
      marko_str(reverse(data.E)));
  };
}

(module.exports = require("marko").c(__filename)).c(create);
