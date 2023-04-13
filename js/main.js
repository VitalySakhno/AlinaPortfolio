$(function () {

	$(".head-inner nav ul li.switch a").on("click", function (e) {
		$("body").toggleClass("switchMode");
		e.prevedDefault();
	});

});