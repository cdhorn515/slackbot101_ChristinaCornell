'use strict';

var giphy = require('giphy-api')(process.env.GIPHY_API_KEY);
var shuffle = require('lodash/shuffle');
var images = [];

module.exports = function(bot) {

  bot.registerCommand('crush me', function (bot, params, message, slackbotCallback) {

    var sendResponse = function(image) {

      var resp = {};

      resp.text = null;

      resp.attachments = [
        {
          title: typeof image.title.length !== 'undefined' && image.title.length > 0 ? image.title : 'ur image',
          image_url: image.images.original.url,
        }
      ];

      return slackbotCallback(null, resp);
    };

    if (images.length > 0) {
      return sendResponse(images.shift());
    }

    giphy.search({ q:'wesley crusher', limit: 50}).then(function (apiResponse) {

      images = shuffle(apiResponse.data);

      return sendResponse(images.shift());
    });

  });

};
