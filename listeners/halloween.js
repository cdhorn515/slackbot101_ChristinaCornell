'use strict';

var image = 'http://thefw.com/files/2012/10/great-pumpkin-linus.jpg';

module.exports = function(bot) {

  bot.registerListener('halloween', function(bot, message, slackbotCallback) {
    var resp = {};
    let pattern = new RegExp('halloween', 'i');

    if (!message.text.match(pattern)) {
      return;
    }

    resp.attachments = [
      {
        title: 'Happy Halloween!',
        image_url: image
      }
    ];

    slackbotCallback(null, resp);
  });
};
