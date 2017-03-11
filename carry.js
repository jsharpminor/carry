	$(document).ready(function () {
		$('.question').change(function () {
			updateCarryInfo();
		});
		var initialize = $("#dialogInit").dialog({
			autoOpen: true,
			modal: true,
			width: $(window).width() * 0.9,
		});
		$(".noNonresPermitsDialog").dialog({
			open: function(e) {
				var state = $(this).data('state');
				$('input[value='+state+']').prop('checked', false);
				updateCarryInfo();
				console.log("Dechecked on opening: " + $('input[value='+state+']').attr('checked'));
			},
			autoOpen: false,
			modal: true,
			buttons: [
				{
					text: "Cancel",
					click: function(e) {
						console.log(e);
						console.log($(this));
						console.log(this);
						$(this).dialog('close');
					}
				}, {
					text: "Add permit anyway",
					click: function (e) {
						var state = $(this).data('state');
						$('input[value='+state+']').prop('checked', true);
						updateCarryInfo();
						$(this).dialog('close');
					}
			}]
		});
		$(".stateInfo").dialog({
			modal:true,
			autoOpen:false,
			width: $(window).width() * 0.9,
		});
		$('#vmap').vectorMap({
			map: 'usa_en',
			enableZoom: false,
			onRegionClick: function(event, code, region) {
				var infoCode = '#' + code + "Info";
				$(infoCode).dialog('open');
				console.log(infoCode);
			}
		});
			updateCarryInfo();
	});
