function setupHandlers() {
  $('.1').on('click', display1);
  $('.2').on('click', display2);
  $('.3').on('click', display3);
  $('.4').on('click', display4);
}
$(document).ready(setupHandlers);

function display1() {
  $('.welcome').text("table 1!!");
  $('.welcome').animate({opacity:1}, 1000)
}
function display2() {
  $('.welcome').text("table 2!!");
  $('.welcome').animate({opacity:1}, 1000)
}
function display3() {
  $('.welcome').text("table 3!!");
  $('.welcome').animate({opacity:1}, 1000)
}
function display4() {
  $('.welcome').text("table 4!!");
  $('.welcome').animate({opacity:1}, 1000)
}
