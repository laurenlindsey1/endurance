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
          <span class="bolded"><td><u>Exercise</td>
          <td><u>Reps</td></span>
      </tr>
      <tr>
          <td>Squats</td>
          <td>12</td>
      </tr>
      <tr>
          <td>Lunges</td>
          <td>24 (12 on each side)</td>
      </tr>
      <tr>
          <td>Sumo Squats</td>
          <td>12</td>
      </tr>
      <tr>
          <td>Wall Sit</td>
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
          <td>Squats</td>
          <td>20</td>
      </tr>
      <tr>
          <td>High Knees</td>
          <td>30 (sec)</td>
      </tr>
      <tr>
          <td>Calf Raises</td>
          <td>30 (sec)</td>
      </tr>
      <tr>
          <td>Box Jumps</td>
          <td>10</td>
      </tr>
    </table></br>`);
  $('.welcome').animate({opacity:1}, 1000)
}
function display3() {
  $('.welcome').html(`  <table>

      <tr>
        <span class="bolded">  <td><u>Exercise</td>
          <td><u>Reps</td></span>
      </tr>
      <tr>
          <td>Squats</td>
          <td>12</td>
      </tr>
      <tr>
          <td>Jump Squats</td>
          <td>30 (sec)</td>
      </tr>
      <tr>
          <td>Lunges</td>
          <td>24 (12 on each side)</td>
      </tr>
      <tr>
          <td>Jumping Lunges</td>
          <td>30 (sec)</td>
      </tr>
    </table></br>`);
  $('.welcome').animate({opacity:1}, 1000)
}
function display4() {
  $('.welcome').html(`  <table>
      <tr>
          <span class="bolded"><td><u>Exercise</td>
          <td><u>Reps</td></span>
      </tr>
      <tr>
          <td>High Knees</td>
          <td>30 (sec)</td>
      </tr>
      <tr>
          <td>Jumping Lunges</td>
          <td>30 (sec)</td>
      </tr>
      <tr>
          <td>Calf Raises</td>
          <td>30 (sec)</td>
      </tr>
      <tr>
          <td>Wall Sit</td>
          <td>30 (sec)</td>
      </tr>
    </table></br>
`);
  $('.welcome').animate({opacity:1}, 1000)
}

function display5() {
  $('.welcome').html(`
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLZU6Y6XqCAcSx-DFWn2rnFntq8LOsoEJe" frameborder="0" allowfullscreen></iframe>
    `);
  $('.welcome').animate({opacity:1}, 1000)
}
function display6() {
  $('.welcome').html(`
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL5lPziO_t_ViDGJiUXEZVE6C7u7xyUsXG" frameborder="0" allowfullscreen></iframe>
  `);
  $('.welcome').animate({opacity:1}, 1000)
}
function display7() {
  $('.welcome').html(`
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSCcAGyv98ieU4iS1nGOuhyyjG3RyLhTF" frameborder="0" allowfullscreen></iframe>
  `);
  $('.welcome').animate({opacity:1}, 1000)
}
function display8() {
  $('.welcome').html(`
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLRCgg2aTq5NXfHHESL0v7CDyy13p4OXxD" frameborder="0" allowfullscreen></iframe>
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
