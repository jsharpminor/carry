$(document).ready(function () {
	var residencySelected = false;
	var permitsOwned = [];
	permitsAccepted = [];
	$('.question').change(function () {
		updateCarryInfo(statePolicy);
	});
	$('#residencyInitial').change(function () {
		$("#residency").val($("#residencyInitial option:selected").val());
		updateCarryInfo(statePolicy);
		residencySelected = true;
		$("#dialogInit").dialog('close');
	})
	var initialize = $("#dialogInit").dialog({
		autoOpen: true,
		beforeClose: function () {
			return residencySelected;
		},
		closeOnEscape: false,
		modal: true,
		width: $(window).width() * 0.9,
	});
	$(".noNonresPermitsDialog").dialog({
		open: function(event) {
			var state = $(this).data('state');
			var residency = $('#residency').val();
			$('input[value='+state+']').prop('checked', false);
			updateCarryInfo(statePolicy);
			if(residency === state)
			{
				$('input[value='+state+']').prop('checked', true);
				updateCarryInfo(statePolicy);
				$(this).dialog('close');
			}
		},
		autoOpen: false,
		modal: true,
		buttons: [
			{
				text: "Cancel",
				click: function(e, f) {
					var state = $(this).data('state');
					$('input[value='+state+']').prop('checked', false);
//					console.log(state)
					$(this).dialog('close');
				}
			}, {
				text: "Add permit anyway",
				click: function (e) {
					var state = $(this).data('state');
					$('input[value='+state+']').prop('checked', true);
					updateCarryInfo(statePolicy);
					$(this).dialog('close');
				}
		}]
	});
	$(".stateQuestion").click(function () {
		if($(this).prop('checked')) {
			var stateCode = $(this).attr('value');
			var stateDialogText = statePolicy[stateCode].dialogText
			if(stateDialogText != "") {
				$('#stateDialog').html(stateDialogText);
				$('#stateDialog').data('state', stateCode);
				$('#stateDialog').dialog('open');
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
			event.preventDefault();
		},
		onLabelShow: function(event, label, code) {
				label.html('<div class="map-tooltip" id="az-tooltip"><h3 class="header" align="center">' + statePolicy[code].stateName + ' - Click for More Info</h3><p class="description">' + statePolicy[code].Policy + '</p></div>');
		}
	});
	updateCarryInfo(statePolicy);
});


function isEmptyArray(myObject) {
	if (typeof myObject === "object") {
		if(myObject.length === 0) {
			return true;
		}
	}
	return false;
}
function findOne (haystack, arr) {
	return arr.some(function (v) {
		return haystack.indexOf(v) >= 0;
	});
}

/// Sentence creation funtions.

function stateAbbrArrayToSentence(abbrArray) {
	stateNameArray = abbrArray.map(function (abbr) {
		return stateNameFromAbbr(abbr)
	})
	sentenceList = toSentence(stateNameArray)
	return sentenceList;
}
function toSentence(arr) {
//	console.log(arr, arr.length)
	var output = arr.slice(0, -2).join(', ') + 
		  (arr.slice(0, -2).length ? ', ' : '') +
		   arr.slice(-2).join(' and ');
//	console.log(output)
	return output;
}
function stateAbbrList(permitsAccepted) {
	permitsAccepted = permitsAccepted.map(function(x){ return x.toUpperCase() })
	return toSentence(permitsAccepted)
}
function stateNameFromAbbr(abbr) {
	return statePolicy[abbr].stateName;
}

function colorState(legality, state) {
	var illegalFill = '#cc0000';
	var permittedFill = '#009933';
	var hasPermitFill = '#003399';
	var conflictFill  = '#cccc00'

	var permitObject = {}
	if(legality === 2) {
		permitObject[state] = hasPermitFill
	}
	else if(legality === 1) {
		permitObject[state] = permittedFill
	}
	else if (legality === "Conflict") {
		permitObject[state] = conflictFill
	}
	else {
		permitObject[state] = illegalFill
	}
	$('#vmap').vectorMap('set', 'colors', permitObject)

}
