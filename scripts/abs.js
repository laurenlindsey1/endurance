function setupHandlers() {
  $('.1').on('click', display1);
  $('.2').on('click', display2);
  $('.3').on('click', display3);
  $('.4').on('click', display4);
  $('.video1').on('click', display5);
  $('.video2').on('click', display6);
  $('.video3').on('click', display7);
  $('.video4').on('click', display8);
  $('.video1').on('click', displayArrow);
  $('.video2').on('click', displayArrow);
  $('.video3').on('click', displayArrow);
  $('.video4').on('click', displayArrow);
}
$(document).ready(setupHandlers);

function display1() {
  $('.welcome').html(`  <table>
      <tr>
       <td><u>Exercise</td>
          <td><u>Reps</td>
      </tr>
      <tr>
          <td>Sit Ups</td>
          <td>20</td>
      </tr>
      <tr>
          <td>Crunches</td>
          <td>20</td>
      </tr>
      <tr>
          <td>Leg Raises</td>
          <td>10</td>
      </tr>
      <tr>
          <td>Plank</td>
          <td>30 (sec)</td>
      </tr>
    </table></br>`);
  $('.welcome').animate({opacity:1}, 1000)
}
function display2() {
  $('.welcome').html(`  <table>
      <tr>
          <span class="bolded"><td><u>Exercise</td>
          <td><u>Reps</td></span>
      </tr>
      <tr>
          <td>Knee Raises</td>
          <td>12</td>
      </tr>
      <tr>
          <td>Side Planks</td>
          <td>30 (sec each side)</td>
      </tr>
      <tr>
          <td>Side to Side Knee Raises</td>
          <td>12 (6 each side)</td>
      </tr>
      <tr>
          <td>Heel Touches</td>
          <td>24 (12 each side)</td>
      </tr>
    </table></br>`);
  $('.welcome').animate({opacity:1}, 1000)
}
function display3() {
  $('.welcome').html(`    <table>
        <tr>
            <span class="bolded"><td><u>Exercise</td>
            <td><u>Reps</td></span>
        </tr>
        <tr>
            <td>Sit Ups</td>
            <td>20</td>
        </tr>
        <tr>
            <td>Scissor Kicks</td>
            <td>30 (sec)</td>
        </tr>
        <tr>
            <td>Crunches</td>
            <td>20</td>
        </tr>
        <tr>
            <td>Flutter Kicks</td>
            <td>30 (sec)</td>
        </tr>
      </table></br>`);
  $('.welcome').animate({opacity:1}, 1000)
}
function display4() {
  $('.welcome').html(`  <table>
      <tr>
        <span class="bolded">  <td><u>Exercise</td>
          <td><u>Reps</td></span>
      </tr>
      <tr>
          <td>Knee Raises</td>
          <td>12</td>
      </tr>
      <tr>
          <td>Bicycle Kicks</td>
          <td>30 (sec)</td>
      </tr>
      <tr>
          <td>Leg Raises</td>
          <td>12</td>
      </tr>
      <tr>
          <td>V Hold</td>
          <td>30 (sec)</td>
      </tr>
    </table></br> `);
  $('.welcome').animate({opacity:1}, 1000)
}
function display5() {
  $('.welcome').html(`
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSCcAGyv98icX4pV3k5uIYtzjaVw12myt" frameborder="0" allowfullscreen></iframe>
    `);
  $('.welcome').animate({opacity:1}, 1000)
}
function display6() {
  $('.welcome').html(`
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLmP-4qxDY1uctg8gjjxQP2nrFmJ0aAB_6" frameborder="0" allowfullscreen></iframe>
    `);
  $('.welcome').animate({opacity:1}, 1000)
}
function display7() {
  $('.welcome').html(`
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLEQo13IzeVRcvOEWSnmN7olDWnpKgZRpI" frameborder="0" allowfullscreen></iframe>
    `);
  $('.welcome').animate({opacity:1}, 1000)
}
function display8() {
  $('.welcome').html(`
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLRCgg2aTq5NXUO3vV0oeNbe0TCUXAkDNc" frameborder="0" allowfullscreen></iframe>
    `);
  $('.welcome').animate({opacity:1}, 1000)
}
function displayArrow() {
  $('.workouthelp').html(`
    <span class ="image3"><img src="http://thavgross.com/wp-content/uploads/2012/08/hand-drawn-arrow.png" style="width:90px;height:40px;"></span>
    <span class = "textbox3"><p>Click here to view more </br>videos in this playlist! </p></span>
    `);
  $('.workouthelp').animate({opacity:1}, 1000)
  setTimeout(textGone, 3000);
}
function textGone(){
  $('.workouthelp').animate(
      {opacity:0},
      1000)
}
