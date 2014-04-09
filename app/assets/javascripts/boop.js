var $ = require('jquery-browserify'),
    robot = require('./robot.js'),
    says = 'boop';

console.log(robot(says));

$('document').ready(function() {
  $('#root').html(robot(says));
});
