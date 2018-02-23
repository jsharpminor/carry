$(document).ready(function () {
	var residencySelected = false;
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
		open: function(event, whoknows) {
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
				click: function(e) {
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

function findResidentPermits(residency, permitsHeld, permitsAccepted) {
	var residenceFound = false;
	// Check to see if the user even has a resident permit. Resident permit being defined as 
	// holding a permit in the state where the user has residence.
	$.each(permitsHeld, function(index, value) {
		// Next, check to see if the user resides in a state whose permit is acceptable.
		if(permitsAccepted === 'all') {
			residenceFound = residency;
			return false;
		}
		if($.inArray(residency, permitsAccepted) > -1) {
			if($.inArray(residency, permitsHeld) > -1) {
				residenceFound = residency
				return false;
			}
		}
	})
	if (residenceFound === residency) {
		return residency;
	}
	return false;
}

function stateNameFromAbbr(abbr) {
	return statePolicy[abbr].stateName;
}

function isEmptyArray(myObject) {
	if (typeof myObject === "object") {
		if(myObject.length === 0) {
			return true;
		}
	}
	return false;
}

function validAge (ageRequirement, over21) {
	console.log(ageRequirement, over21)
	if(typeof ageRequirement === "number" &&
		typeof over21 === "number" &&
		over21 > 1 &&
		over21 >= ageRequirement) {
		return true;
	}
	else if (typeof ageRequirement === "undefined") {
		return true;
	}
	return false;
}
function getAcceptedList(permitsAccepted, permitsOwned) {
	var acceptedList = [];
	if(typeof(permitsOwned) === "string") {
		permitsOwned = [permitsOwned]
	}
	$.each(permitsOwned, function(index, value) {
		if($.inArray(value, permitsAccepted) > -1) {
			acceptedList.push(value);
		}
	})
	if(acceptedList.length === 0) {
		return false;
	}
	sentenceList = toSentence(acceptedList);
	return sentenceList;
}
function findOne (haystack, arr) {
	return arr.some(function (v) {
		return haystack.indexOf(v) >= 0;
	});
}
function toSentence(arr) {
	return arr.slice(0, -2).join(', ') + 
		  (arr.slice(0, -2).length ? ', ' : '') +
		   arr.slice(-2).join(' and ');
}
function stateAbbrList(permitsAccepted) {
	permitsAccepted = permitsAccepted.map(function(x){ return x.toUpperCase() })
	return toSentence(permitsAccepted)
}
function legalize(oldLevel, newLevel, oldMessage, newMessage) {
	if(oldLevel === 1 && newLevel === 2) {
		newMessage = oldMessage + " " + newMessage;
	}
	if(oldLevel === 2 && newLevel === 2) {
		newMessage = oldMessage + " " + newMessage;
	}
	if(oldLevel === 1 && newLevel === 1) {
		newMessage = oldMessage + " " + newMessage;
	}
	if(oldLevel === 2 && newLevel === 1) {
		newMessage = oldMessage + " " + newMessage;
	}
	return newMessage.trim();
}

function validateCarry(ourPolicy, residency, permitsOwned, over21) {
	var state        = ourPolicy.stateAbbr
	var longState    = stateNameFromAbbr(state)

	if(residency === undefined || residency === "") {
		longResState = undefined
	}
	else {
		var longResState = stateNameFromAbbr(residency)
	}
	var permitted    = {"constitutional" : 0,
						"permit"         : 0,
						"reciprocity"    : 0,
						"message"		 : ""}
	var disqualified = false

	if($.inArray(state, permitsOwned) > -1) {
		if(residency !== state &&
		   ourPolicy.issuesNonresidentPermits === false) {
			permitted.permit = "Conflict"
			permitted.Pmessage = longState + ' does not issue nonresident permits. You have indicated that you reside in ' +
								longResState + '. This data presents an apparent conflict. Proceed with caution.'
		}
		else {
			if(validAge(ourPolicy.ageForPermit, over21)) {
				permitted.permit = 1
				permitted.Pmessage = 'You indicated that you have a ' + longState + ' permit.'
			}
			else {
				permitted.permit = "Conflict"
				permitted.Pmessage = 'You indicated that you have a ' + longState + ' permit. According to our data, ' +
									longState + ' does not issue permits to persons under ' + ourPolicy.ageForPermit + '.'
			}
		}
	}
	if(ourPolicy.constitutionalCarry) {
		if(ourPolicy.constitutionalCarry === true) {
			if(over21 >= ourPolicy.constitutionalCarryAge) {
				permitted.constitutional = 1
				permitted.Cmessage = longState + " has Constitutional Carry."
			}
			else {
				permitted.Cmessage = longState + " has Constitutional Carry for persons over " + ourPolicy.constitutionalCarryAge + "."
			}
		}
	}
	if(typeof ourPolicy.reciprocity === "object")
		console.log(state, typeof(ourPolicy.reciprocity), ourPolicy.reciprocity)
	else 
		console.log(state, typeof(ourPolicy.reciprocity))
	if(ourPolicy.reciprocity &&
		permitsOwned.length > 0 ) {
		if(ourPolicy.reciprocity === true) {

		}
		else if (typeof ourPolicy.reciprocity === "object") {

		}
	}

	// Decisions over. Coloring time.
	statePolicy[state].Policy = permitted.message
	if(permitted.constitutional === "Conflict" ||
	   permitted.permit         === "Conflict" ||
	   permitted.reciprocity    === "Conflict") {
		colorState("Conflict", state)
	}
	else if (permitted.permit === 1 &&
			 disqualified === false) {
		colorState(2, state)
	}
	else if ((permitted.constitutional === 1 ||
			  permitted.reciprocity    === 1) &&
			  disqualified === false) {
		colorState(1, state)
	}
	else {
		colorState(0, state)
	}

}