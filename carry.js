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
			open: function(e, f, g) {
				var state = $(this).data('state');
				$('input[value='+state+']').prop('checked', false);
				updateCarryInfo();
				console.log($(this));
				console.log(e);
				console.log(f);
				console.log(g);
			},
			autoOpen: false,
			modal: true,
			buttons: [
				{
					text: "Cancel",
					click: function(e) {
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
		$(".question").click(function () {
			if($(this).prop('checked')) {
				var stateCode = $(this).attr('value');
				if($('#'+stateCode+'Dialog').length) {
					$('#'+stateCode+'Dialog').dialog('open');
				}
			}
		});
		$(".stateInfo").dialog({
			modal:true,
			autoOpen:false,
			width: $(window).width() * 0.9,
			height: $(window).height() * 0.8
		});
		$('#vmap').vectorMap({
			map: 'usa_en',
			enableZoom: false,
			onRegionClick: function(event, code, region) {
				var infoCode = '#' + code + "Info";
				$(infoCode).dialog('open');
				console.log(infoCode);
				event.preventDefault();
			}
		});
		updateCarryInfo();
	});
