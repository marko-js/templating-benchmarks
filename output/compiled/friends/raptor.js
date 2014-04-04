module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      forEach = helpers.f,
      escapeXml = helpers.x,
      escapeXmlAttr = helpers.xa;

  return function render(data, context) {
    context.w('<!doctype html> <html lang="en"><head><meta charset="UTF-8"><title>Friends</title></head><body><div class="friends">');

    forEach(data.friends, function(friend) {
      context.w('<div class="friend"><ul><li>Name: ')
        .w(escapeXml(data.getFullNameRaptor(friend)))
        .w('</li><li>Balance: ')
        .w(escapeXml(friend.balance))
        .w('</li><li>Age: ')
        .w(escapeXml(friend.age))
        .w('</li><li>Address: ')
        .w(escapeXml(friend.address))
        .w('</li><li>Image: <img');
      helpers.a(context, "src", friend.picture);

      context.w('></li><li>Company: ')
        .w(escapeXml(friend.company))
        .w('</li><li>Email: <a href="mailto:')
        .w(escapeXmlAttr(friend.email))
        .w('">')
        .w(escapeXml(friend.email))
        .w('</a></li><li>About: ')
        .w(escapeXml(friend.about))
        .w('</li>');

      if (notEmpty(friend.tags)) {
        context.w('<li>Tags: <ul>');

        forEach(friend.tags, function(tag) {
          context.w('<li>')
            .w(escapeXml(tag))
            .w('</li>');
        });

        context.w('</ul></li>');
      }

      if (notEmpty(friend.friends)) {
        context.w('<li>Friends: <ul>');

        forEach(friend.friends, function(friend) {
          context.w('<li>')
            .w(escapeXml(friend.name))
            .w(' (')
            .w(escapeXml(friend.id))
            .w(')</li>');
        });

        context.w('</ul></li>');
      }

      context.w('</ul></div>');
    });

    context.w('</div></body></html>');
  };
}