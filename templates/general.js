function animateHeading() {
  $('span.textbody').on('mouseenter');
}

function makeHeadBigger() {
    $(this).off('mouseenter',makeHeadBigger)
    $(this).animate(
        {'font-size':'30px'},
        1000)
}
function makeHeadNormal() {
    $(this).animate(
        {'font-size':'25px'},
        1000)
}

function setupHandlers() {
  $("span.textbody").on("mouseenter",makeHeadBigger)
  $("span.textbody").on("mouseout",makeHeadNormal)
}

$(document).ready(setupHandlers);
