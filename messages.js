'use strict';

var messages = [
  ['I\'m the sCatman.', 'Skee ba do ba do bop'],
  ['It\'s Caturday.', 'Every day!'],
  ['Cat-itude.', 'You either got it, or you don\'t.'],
  ['Clawsome!', 'Party time...'],
  ['ProCatstination', 'It\'s just so easy to lay back and relax.']
];

// Change this to a number higher than 5
// to trigger an exception every now and again.
var numMessages = 5;

module.exports = function(done) {
  // Simulate an async operation.
  setImmediate(function() {
    // Get a random message.
    var randomIndex = Math.floor(Math.random() * numMessages);
    console.log('Generated random message #' + randomIndex);
    var message = messages[randomIndex];
    done({
      title: message[0],
      message: message[1]
    });
  });
};
