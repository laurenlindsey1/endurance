function setupHandlers() {
  $('.1').on('click', display1);
  $('.2').on('click', display2);
  $('.3').on('click', display3);
  $('.4').on('click', display4);
}
$(document).ready(setupHandlers);

function display1() {
  $('.welcome').html(`  <table>
      <tr>
          <th colspan="2">Lower Body Sample Routine #1</th>
      </tr>
      <tr>
          <span class="bolded"><td>Exercise</td>
          <td>Reps</td></span>
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
    </table>`);
  $('.welcome').animate({opacity:1}, 1000)
}
function display2() {
  $('.welcome').html(`  <table>
      <tr>
          <th colspan="2">Lower Body Sample Routine #2</th>
      </tr>
      <tr>
          <span class="bolded"><td>Exercise</td>
          <td>Reps</td></span>
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
    </table>`);
  $('.welcome').animate({opacity:1}, 1000)
}
function display3() {
  $('.welcome').html(`  <table>
      <tr>
          <th colspan="2">Lower Body Sample Routine #3</th>
      </tr>
      <tr>
        <span class="bolded">  <td>Exercise</td>
          <td>Reps</td></span>
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
    </table>`);
  $('.welcome').animate({opacity:1}, 1000)
}
function display4() {
  $('.welcome').html(`  <table>
      <tr>
          <th colspan="2">Lower Body Sample Routine #4</th>
      </tr>
      <tr>
          <span class="bolded"><td>Exercise</td>
          <td>Reps</td></span>
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
    </table>
`);
  $('.welcome').animate({opacity:1}, 1000)
}
