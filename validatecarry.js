function validatePermit(index, value) {
	permitsOwned[index] = {
			"name" : value,
			"fishy" : false
	}
}

function validateCarry(ourPolicy, residency, over21) {

	var state = ourPolicy.stateAbbr
	var carryStatus = 0
	console.log(permitsAccepted)
	permitsAccepted[state] = [];
	colorState(0, state)

	validateConstitutionalCarry(ourPolicy, residency, state)
	validateOutOfState(ourPolicy, residency, state)
}

function validateConstitutionalCarry(ourPolicy, residency, state) {
	if(ourPolicy.constitutionalCarry !== false) {
		if(ourPolicy.constitutionalCarry === true) {
			colorState(1, state)
		}
		else if (ourPolicy.constitutionalCarry === "residents"
			&& residency === state) {
			colorState(1, state)
		}
		else if (ourPolicy.constitutionalCarry === "certain residents") {
			if($.inArray(residency, ourPolicy.constitutionalCarryList) > -1) {
				colorState(1, state)
			}
		}
	}
}

function validateOutOfState(ourPolicy, residency, state) {
	$.each(permitsOwned, function(index, thisPermit) {
		if(ourPolicy.reciprocity === true) {
			colorState(1, state);
			permitsAccepted[state].push(thisPermit.name);
		}
		if(thisPermit.name === state) {
			colorState(2, state)
		}

	})
/*		if (permitsOwned.length > 0) {
	}
	else if(ourPolicy.reciprocity === "residents") {
		$.each(permitsOwned, function(index, value) {
			console.log("PermitsOwned:" + value)
//			if($.inArray(value))
		})
	}
	else if ($.isArray(ourPolicy.reciprocity)) {
		if(ourPolicy.acceptsNonresidentPermits) {
			$.each(permitsOwned, function(index, thisPermit) {
				if($.inArray(thisPermit.name, ourPolicy.reciprocity) > -1) {
					colorState(1, state)
				}
			})
		}
		else if($.inArray(residency, ourPolicy.reciprocity)) {
			$.each(permitsOwned, function(index, thisPermit) {
				if(thisPermit.name === residency &&
					thisPermit.name === state) {
//					colorState(1, state)
				}
			})
		}
	}

	return false*/

}

// longState + ' does not issue nonresident permits. You have indicated that you reside in ' +
//	longResState + '. This data presents an apparent conflict. Proceed with caution.'

// You indicated that you have a ' + longState + ' permit.'
	
// permitted.Pmessage = 'You indicated that you have a ' + longState + ' permit. According to our data, ' +
//	longState + ' does not issue permits to persons under ' + ourPolicy.ageForPermit + '.'

// longState + " has Constitutional Carry."

// longState + " has Constitutional Carry for persons over " + ourPolicy.constitutionalCarryAge + "."

// longState + " accepts all permits."

// longState + " honors your " + acceptedList;

// longState + " does not honor any other states' permits."

// longState + " does not honor any other states' permits, and it does not issue nonresident permits."

//	longState + " does not honor permits from your home state of " + longResState + ", and it does not honor nonresident permits."

// longState + " does not honor permits from any of the states"