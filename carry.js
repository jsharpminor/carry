	$(document).ready(function () {
		$('.question').change(function () {
			updateCarryInfo();
		});
		var initialize = $("#dialogInit").dialog({
			autoOpen: true,
			modal: true,
			width: $(window).width() * 0.7,
		});
		$('#vmap').vectorMap({
			map: 'usa_en',
			enableZoom: false
		});
	});

