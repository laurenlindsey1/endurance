function append(){
$('#routine').append(`
      Quanity<input class="quantity" type="text" name="quantity">(reps or seconds)
      Exercise: <input class="description" type="text" name="description">`);
}

function setupHandlers() {
  $('#plus').on('click', append);
}

$(document).ready(setupHandlers);
