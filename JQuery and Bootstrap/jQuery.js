console.log("Let's get ready to party with jQuery!")

$('article img').addClass('image-center')

$('p').eq(5).remove()

$("#title").css("font-size", Math.random() * 100);

$('ol').append('<li>HIIII!!!</li>')

$("aside")
        .empty()
        .append($("<p>", {text: "I am so so so so so soooooooo sorry about that shawty it will never happen again that list was disgusting!!"}));

$(".form-control").on('keyup blur change', function () {
	let red = $(".form-control").eq(0).val();
	let blue = $(".form-control").eq(1).val();
	let green = $(".form-control").eq(2).val();
		$("body").css("background-color",
		"rgb(" + red + "," + green + "," + blue + ")");
	});

$('img').on('click', function() {
	$(this).remove()
})

$('<form>').append('<input type="text"/>').append('<input type="text"/>').append('<button>')