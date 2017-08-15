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
          <th colspan="2">Abs Sample Routine #1</th>
      </tr>
      <tr>
        <span class="bolded">  <td>Exercise</td>
          <td>Reps</td> </span>
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
    </table>`);
  $('.welcome').animate({opacity:1}, 1000)
}
function display2() {
  $('.welcome').html(`  <table>
      <tr>
          <th colspan="2">Abs Sample Routine #2</th>
      </tr>
      <tr>
          <span class="bolded"><td>Exercise</td>
          <td>Reps</td></span>
      </tr>
      <tr>
          <td>Knee Raises</td>
          <td>12</td>
      </tr>
      <tr>
          <td>Side Planks (Left then Right)</td>
          <td>30 (sec for each side)</td>
      </tr>
      <tr>
          <td>Side to Side Knee Raises</td>
          <td>12 (6 on each side)</td>
      </tr>
      <tr>
          <td>Heel Touches</td>
          <td>24 (12 on each side)</td>
      </tr>
    </table>`);
  $('.welcome').animate({opacity:1}, 1000)
}
function display3() {
  $('.welcome').html(`    <table>
        <tr>
            <th colspan="2">Abs Sample Routine #3</th>
        </tr>
        <tr>
            <span class="bolded"><td>Exercise</td>
            <td>Reps</td></span>
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
      </table>`);
  $('.welcome').animate({opacity:1}, 1000)
}
function display4() {
  $('.welcome').html(`  <table>
      <tr>
          <th colspan="2">Abs Sample Routine #4</th>
      </tr>
      <tr>
        <span class="bolded">  <td>Exercise</td>
          <td>Reps</td></span>
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
    </table>`);
  $('.welcome').animate({opacity:1}, 1000)
}
