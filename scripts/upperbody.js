
function display1() {
  $('.welcome').html(`  <table>
      <tr>
          <th colspan="2">Upper Body Sample Routine #1</th>
      </tr>
      <tr>
        <span class="bolded">  <td>Exercise</td>
          <td>Reps</td> </span>
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
    </table>`);
  $('.welcome').animate({opacity:1}, 1000)
}
function display2() {
  $('.welcome').html(`
            <table>
              <tr>
                  <th colspan="2">Upper Body Sample Routine #2</th>
              </tr>
              <tr>
                <span class="bolded">  <td>Exercise</td>
                  <td>Reps</td</span>
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
            </table>`);
  $('.welcome').animate({opacity:1}, 1000)
}
function display3() {
  $('.welcome').html(`          <table>
              <tr>
                  <th colspan="2">Upper Body Sample Routine #3</th>
              </tr>
              <tr>
                <span class="bolded">  <td>Exercise</td>
                  <td>Reps</td></span>
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
                  <td>5</td>
                  <td>30 (sec)</td>
              </tr>
            </table>
`);
  $('.welcome').animate({opacity:1}, 1000)
}
function display4() {
  $('.welcome').html(`
            <table>
              <tr>
                  <th colspan="2">Upper Body Sample Routine #4</th>
              </tr>
              <tr>
                  <span class="bolded"><td>Exercise</td>
                  <td>Reps</td></span>
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
            </table>
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

function setupHandlers() {
  $('.1').on('click', display1);
  $('.2').on('click', display2);
  $('.3').on('click', display3);
  $('.4').on('click', display4);
  $('.video1').on('click', display5);
  $('.video2').on('click', display6);
  $('.video3').on('click', display7);
  $('.video4').on('click', display8);
}
$(document).ready(setupHandlers);
