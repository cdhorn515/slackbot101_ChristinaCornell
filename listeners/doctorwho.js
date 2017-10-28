'use strict';

var shuffle = require('lodash/shuffle');

let responses = [
    'I\'m the Doctor',
    'I am definitely a mad man with a box!',
    'Hello, I\'m the Doctor. Basically, run',
    'People assume that time is a strict progression of cause to effect, but actually from a non-linear, non-subjective viewpoint, it\’s more like a big ball of wibbly-wobbly, timey-wimey stuff',
    'Fezes are cool',
    'Don\’t blink. Don\’t even blink. Blink and you\’re dead. They are fast. Faster than you can believe. Don\’t turn your back, don\’t look away, and DON\’T blink.'
];

var randomResponses = [];

function getRandomResponse() {

  if(!randomResponses.length > 0) {
    randomResponses = shuffle(responses);
  }

  return randomResponses.shift();
}

module.exports = function(bot) {

  bot.registerListener('doctor', function(bot, message, slackbotCallback){
    var resp = {};
    let pattern = new RegExp('doctor');

    if (!message.text.match(pattern)) {
      return;
    }

    resp.text = getRandomResponse();
    slackbotCallback(null, resp);
  });

};
