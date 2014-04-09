var $ = require('jquery-browserify'),
    robot = require('./robot.js'),
    says = 'beep';

console.log(robot(says));

$('document').ready(function() {
  $('#root').html(robot(says));
});
