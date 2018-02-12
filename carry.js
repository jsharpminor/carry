var policy = {
	"al" : { 'Name' : "Alabama",
			'article' : 'an ' },
	"ak" : { 'Name' : "Alaska",
			'article' : 'an ' },
	"az" : { 'Name' : "Arizona",
			'article' : 'an ' },
	"ar" : { 'Name' : "Arkansas",
			'article' : 'an ' },
	"ca" : { 'Name' : "California",
			'article' : 'a ' },
	"co" : { 'Name' : "Colorado",
			'article' : 'a ' },
	"ct" : { 'Name' : "Connecticut",
			'article' : 'a ' },
	"de" : { 'Name' : "Delaware",
			'article' : 'a ' },
	"dc" : { 'Name' : "District of Columbia",
			'article' : 'a ' },
	"fl" : { 'Name' : "Florida",
			'article' : 'a ' },
	"ga" : { 'Name' : "Georgia",
			'article' : 'a ' },
	"hi" : { 'Name' : "Hawaii",
			'article' : 'a ' },
	"id" : { 'Name' : "Idaho",
			'article' : 'an ' },
	"il" : { 'Name' : "Illinois",
			'article' : 'an ' },
	"in" : { 'Name' : "Indiana",
			'article' : 'an ' },
	"ia" : { 'Name' : "Iowa",
			'article' : 'an ' },
	"ks" : { 'Name' : "Kansas",
			'article' : 'a ' },
	"ky" : { 'Name' : "Kentucky",
			'article' : 'a ' },
	"la" : { 'Name' : "Louisiana",
			'article' : 'a' },
	"me" : { 'Name' : "Maine",
			'article' : 'a ' },
	"md" : { 'Name' : "Maryland",
			'article' : 'a ' },
	"ma" : { 'Name' : "Massachusetts",
			'article' : 'a ' },
	"mi" : { 'Name' : "Michigan",
			'article' : 'a ' },
	"mn" : { 'Name' : "Minnesota",
			'article' : 'a ' },
	"ms" : { 'Name' : "Mississippi",
			'article' : 'a ' },
	"mo" : { 'Name' : "Missouri",
			'article' : 'a ' },
	"mt" : { 'Name' : "Montana",
			'article' : 'a ' },
	"ne" : { 'Name' : "Nebraska",
			'article' : 'a ' },
	"nv" : { 'Name' : "Nevada",
			'article' : 'a ' },
	"nh" : { 'Name' : "New Hampshire",
			'article' : 'a ' },
	"nj" : { 'Name' : "New Jersey",
			'article' : 'a ' },
	"nm" : { 'Name' : "New Mexico",
			'article' : 'a ' },
	"ny" : { 'Name' : "New York",
			'article' : 'a ' },
	"nc" : { 'Name' : "North Carolina",
			'article' : 'a ' },
	"nd" : { 'Name' : "North Dakota",
			'article' : 'a ' },
	"oh" : { 'Name' : "Ohio",
			'article' : 'an ' },
	"ok" : { 'Name' : "Oklahoma",
			'article' : 'an ' },
	"or" : { 'Name' : "Oregon",
			'article' : 'an ' },
	"pa" : { 'Name' : "Pennsylvania",
			'article' : 'a ' },
	"ri" : { 'Name' : "Rhode Island",
			'article' : 'a ' },
	"sc" : { 'Name' : "South Carolina",
			'article' : 'a ' },
	"sd" : { 'Name' : "South Dakota",
			'article' : 'a ' },
	"tn" : { 'Name' : "Tennessee",
			'article' : 'a ' },
	"tx" : { 'Name' : "Texas",
			'article' : 'a ' },
	"ut" : { 'Name' : "Utah",
			'article' : 'a ' },
	"vt" : { 'Name' : "Vermont",
			'article' : 'a ' },
	"va" : { 'Name' : "Virginia",
			'article' : 'a ' },
	"wa" : { 'Name' : "Washington",
			'article' : 'a ' },
	"wv" : { 'Name' : "West Virginia",
			'article' : 'a ' },
	"wi" : { 'Name' : "Wisconsin",
			'article' : 'a ' },
	"wy" : { 'Name' : "Wyoming",
			'article' : 'a ' }
};

$(document).ready(function () {
	var residencySelected = false;
	$('.question').change(function () {
		updateCarryInfo();
	});
	$('#residencyInitial').change(function () {
		$("#residency").val($("#residencyInitial option:selected").val());
		updateCarryInfo();
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
		open: function(e, f, g) {
			var state = $(this).data('state');
			var residency = $('#residency').val();
			$('input[value='+state+']').prop('checked', false);
			updateCarryInfo();
			if(residency === state)
			{
				console.log(state)
				$('input[value='+state+']').prop('checked', true);
				console.log("propchecked");
				updateCarryInfo();
				$(this).dialog('close');
			}
//			console.log($(this));
//			console.log(e);
//			console.log(f);
//			console.log(g);
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
		},
		onLabelShow: function(event, label, code) {
				label.html('<div class="map-tooltip" id="az-tooltip"><h3 class="header" align="center">' + policy[code].Name + ' - Click for More Info</h3><p class="description">' + policy[code].Policy + '</p></div>');
		}
	});
	updateCarryInfo();
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
				console.log(residency, permitsHeld, permitsAccepted)
				residenceFound = residency
				return false;
			}
		}
	})
	console.log(residenceFound, residency)
	if (residenceFound === residency) {
		return residency;
	}
	return false;
}

function stateNameFromAbbr(abbr) {
	return policy[abbr].Name;
}

function validAge (ageRequirement, over21) {
	if(over21 === 'over21') return true;

	if(ageRequirement === 'of any age') return true;

	if(ageRequirement === 'over 18' && over21 === 'over18') return true;

	if(ageRequirement === 'over 16' && over21 === 'over18' ||
		ageRequirement === 'over 16' && over21 === 'over16') return true;

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