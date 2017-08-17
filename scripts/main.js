alert('Able-Bodied Human Beings specifically DISCLAIMS LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES and assumes no responsibility or liability for any loss or damage suffered by any person as a result of the use or misuse of any of the information or content on this website. Able-Bodied Human Beings assumes or undertakes NO LIABILITY for any loss or damage suffered as a result of the use or misuse of any information or content or any reliance thereon.')
alert('USE AT YOUR OWN RISK: This website is for informational purposes only. Consult a physician before performing this or any exercise program. It is your responsibility to evaluate your own medical and physical condition, or that of your clients, and to independently determine whether to perform, use or adapt any of the information or content on this web site. Any exercise program may result in injury. By voluntarily undertaking any exercise displayed on this web site, you assume the risk of any resulting injury.')

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
