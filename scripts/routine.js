function append(){
$('#routine').append(`
      <form class="routine" method='get' action="/routine" name="routine">
      Quanity<input class="quantity" type="text" name="quantity">(reps or seconds)
      Exercise: <input class="description" type="text" name="description">
      </form>`);
}


function submit(){
	console.log('clicked')
	var quantity = [];
   	var description = [];

   	$('.routine').each(function(i) {
   		quantity.push($($('.quantity')[i]).val());
   		description.push($($('.description')[i]).val());

   	});

   	quantity = quantity.join('_')
   	description = description.join('_')
   	console.log(quantity);
   	console.log(description);


   	$('.quantity').val(quantity);
   	$('.description').val(description);
   	$('.routine').submit();
}

function setupHandlers() {
  $('#plus').on('click', append);
  $('#submit').on('click', submit);
  $('#plus').click();
}

$(document).ready(setupHandlers);
