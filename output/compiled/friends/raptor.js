module.exports = function create(__helpers) {
  var empty = __helpers.e,
      notEmpty = __helpers.ne,
      forEach = __helpers.f,
      escapeXml = __helpers.x,
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa;

  return function render(data, context) {
    context.w('<!doctype html> <html lang="en"><head><meta charset="UTF-8"><title>Friends</title></head><body><div class="friends">');

    forEach(data.friends, function(friend) {
      context.w('<div class="friend"><ul><li>Name: ' +
        escapeXml(data.getFullNameRaptor(friend)) +
        '</li><li>Balance: ' +
        escapeXml(friend.balance) +
        '</li><li>Age: ' +
        escapeXml(friend.age) +
        '</li><li>Address: ' +
        escapeXml(friend.address) +
        '</li><li>Image: <img' +
        attr("src", friend.picture) +
        '></li><li>Company: ' +
        escapeXml(friend.company) +
        '</li><li>Email: <a href="mailto:' +
        escapeXmlAttr(friend.email) +
        '">' +
        escapeXml(friend.email) +
        '</a></li><li>About: ' +
        escapeXml(friend.about) +
        '</li>');

      if (notEmpty(friend.tags)) {
        context.w('<li>Tags: <ul>');

        forEach(friend.tags, function(tag) {
          context.w('<li>' +
            escapeXml(tag) +
            '</li>');
        });

        context.w('</ul></li>');
      }

      if (notEmpty(friend.friends)) {
        context.w('<li>Friends: <ul>');

        forEach(friend.friends, function(friend) {
          context.w('<li>' +
            escapeXml(friend.name) +
            ' (' +
            escapeXml(friend.id) +
            ')</li>');
        });

        context.w('</ul></li>');
      }

      context.w('</ul></div>');
    });

    context.w('</div></body></html>');
  };
}