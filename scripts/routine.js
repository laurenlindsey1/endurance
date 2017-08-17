function append(){
$('#routine').append(`<br>Quanity (reps or seconds): <input class="quantity" type="text" name="quantity">
      Exercise: <input class="description" type="text" name="description">`);
}

function setupHandlers() {
  $('#plus').on('click', append);
}

$(document).ready(setupHandlers);
