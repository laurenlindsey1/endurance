function append(){
$('#routine').append(`Quanity (reps or seconds): <input class="quantity" type="text" name="quantity">
      Exercise: <input class="description" type="text" name="description">`);
}

function setupHandlers() {
  $('#plus').on('click', append);
}

$(document).ready(setupHandlers);
