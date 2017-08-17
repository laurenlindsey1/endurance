
function display1() {
  $('.welcome').html(`  <table>
      <tr>
        <span class="bolded">  <td><u>Exercise</td>
          <td><u>Reps</td> </span>
      </tr>
      <tr>
          <td>Push Ups</td>
          <td>10</td>
      </tr>
      <tr>
          <td>Bench Dips</td>
          <td>12</td>
      </tr>
      <tr>
          <td>Chin Ups</td>
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
  $('.welcome').html(`
            <table>
              <tr>
                <span class="bolded">  <td><u>Exercise</td>
                  <td><u>Reps</td</span>
              </tr>
              <tr>
                  <td>Pull Ups</td>
                  <td>10</td>
              </tr>
              <tr>
                  <td>Wide Push Ups</td>
                  <td>10</td>
              </tr>
              <tr>
                  <td>Incline Push Ups</td>
                  <td>12</td>
              </tr>
              <tr>
                  <td>Chin Above Bar Hold</td>
                  <td>20 (sec)</td>
              </tr>
            </table></br>`);
  $('.welcome').animate({opacity:1}, 1000)
}
function display3() {
  $('.welcome').html(`          <table>
              <tr>
                <span class="bolded">  <td><u>Exercise</td>
                  <td><u>Reps</td></span>
              </tr>
              <tr>
                  <td>Dips</td>
                  <td>5</td>
              </tr>
              <tr>
                  <td>Diamond Push Ups</td>
                  <td>5</td>
              </tr>
              <tr>
                  <td>Close Grip Pull Ups</td>
                  <td>5</td>
              </tr>
              <tr>
                  <td>Plank</td>
                  <td>30 (sec)</td>
              </tr>
            </table></br>
`);
  $('.welcome').animate({opacity:1}, 1000)
}
function display4() {
  $('.welcome').html(`
            <table>
              <tr>
                  <span class="bolded"><td><u>Exercise</td>
                  <td><u>Reps</td></span>
              </tr>
              <tr>
                  <td>Push Ups</td>
                  <td>12</td>
              </tr>
              <tr>
                  <td>Wide Push Ups</td>
                  <td>10</td>
              </tr>
              <tr>
                  <td>Decline Push Ups</td>
                  <td>6</td>
              </tr>
              <tr>
                  <td>Incline Push Ups</td>
                  <td>12</td>
              </tr>
            </table></br>
`);
  $('.welcome').animate({opacity:1}, 1000)
}

function display5() {
  $('.welcome').html(`
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLpXJ7Rlnuy86nG-vuQ0jsedDtWKvDZirI" frameborder="0" allowfullscreen></iframe>
    `);
  $('.welcome').animate({opacity:1}, 1000)
}
function display6() {
  $('.welcome').html(`
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLa3I3I_Fjb3v6nG_NTtIJziGkHX_Pg4fk" frameborder="0" allowfullscreen></iframe>  `);
  $('.welcome').animate({opacity:1}, 1000)
}
function display7() {
  $('.welcome').html(`
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLB_jJ3AAJwDPpSj-g3rO9LWjb350GKcQK" frameborder="0" allowfullscreen></iframe>    `);
  $('.welcome').animate({opacity:1}, 1000)
}
function display8() {
  $('.welcome').html(`
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSCcAGyv98icWAjrUD29TYLhJtRAGABp2" frameborder="0" allowfullscreen></iframe>`);
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
