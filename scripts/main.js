function display1() {
  $('.attributes2').html(`
    <span class ="image2"><img src="http://images.clipartpanda.com/stars-clipart-on-transparent-background-transparent-arrow-left-md.png" style="width:70px;height:40px;">
  <span class = "textbox2"> Click here to explore our pages!</span>
    `);
  $('.attributes2').animate({opacity:1}, 1000)
}

function setupHandlers() {
  $('.menu-icon').on('click', display1);
}
$(document).ready(setupHandlers);
