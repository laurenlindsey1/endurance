function append(){
$('#routine').append(`Quanity<input type="text" name="quantity">(reps or seconds)
      Exercise: <input type="text" name="description">`);
}

function submit(){
    $('#routine').submit();
}


function setupHandlers() {
  $('#plus').on('click', append);
  $('#submit').on('click', submit);

}

$(document).ready(setupHandlers);
