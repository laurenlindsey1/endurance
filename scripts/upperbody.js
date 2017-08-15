
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


function setupHandlers() {
  $('.1').on('click', display1);
  $('.2').on('click', display2);
  $('.3').on('click', display3);
  $('.4').on('click', display4);
}
$(document).ready(setupHandlers);
