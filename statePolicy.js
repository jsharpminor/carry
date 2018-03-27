function updateCarryInfo(statePolicy) {

	var over21 = Number($('input[name=q21]:checked').val());
	var residency = $('#residency').val();
	var citizen = $('input[name=citizen]:checked').val();
	var permitsOwned = $('input[name=permits]:checked').map(function () {
		return $(this).val();
	}).get();
	$.each(statePolicy, function(state, Policy) {
		validateCarry(Policy, residency, permitsOwned, over21)
	});
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
function disqualify() {
//	validAge()
}

function outofStatePermits(statePolicy, reciprocity) {
	if(typeof reciprocity === "string") {
		if (reciprocity === true) {
			if(permitsOwned.length > 0) {

			}
		}
	}
	if(typeof reciprocity === "object") {
		if(reciprocity.length === 0) {

		}
	}
}

function constitutionalCarry(statePolicy) {
//	console.log(statePolicy.constitutionalCarry)
	if(statePolicy.constitutionalCarry === true) {
		var returnVar = statePolicy.stateAbbr + " has Constitutional Carry."
		return returnVar
	}
}

statePolicy = {}
statePolicy['al'] = { "stateAbbr" : "al",
					  "stateName" : "Alabama",
						"article" : "an",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
				 "reciprocityAge" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
	   "issuesNonresidentPermits" : false,
		"residentsMustPermitHere" : true,
					 "dialogText" : "Alabama honors all other states' permits, but it does not issue nonresident permits."}

statePolicy['ak'] = { "stateAbbr" : "ak",
					  "stateName" : "Alaska",
						"article" : "an",
			"constitutionalCarry" : true,
				   "ageForPermit" : 21,
				 "reciprocityAge" : 21,
		 "constitutionalCarryAge" : 21,
	   "issuesNonresidentPermits" : false,
					 "dialogText" : "Alaska has constitutional carry for people over 21, but it does not issue nonresident permits."}

statePolicy['az'] = { "stateAbbr" : "az",
					  "stateName" : "Arizona",
						"article" : "an",
			"constitutionalCarry" : true,
				   "ageForPermit" : 21,
				   "reciprocity" : true,
				 "reciprocityAge" : 21,
		 "constitutionalCarryAge" : 21,
	   "issuesNonresidentPermits" : true,
					 "dialogText" : ""}

statePolicy['ar'] = { "stateAbbr" : "ar",
					  "stateName" : "Arkansas",
						"article" : "an",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
				 "reciprocityAge" : 21,
		"ageRequirementException" :{"19" : "member of Armed Forces or honorably discharged"},
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : false,
	   "issuesNonresidentPermits" : false,
					 "dialogText" : "Arkansas honors all other states' permits, but it does not issue nonresident permits."}

statePolicy['ca'] = { "stateAbbr" : "ca",
					  "stateName" : "California",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : false,
	   "issuesNonresidentPermits" : false,
					 "dialogText" : "California does not honor any other states' permits, and it does not issue nonresident permits."}

statePolicy['co'] = { "stateAbbr" : "co",
					  "stateName" : "Colorado",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : ['al', 'ak', 'az', 'ar', 'de',  'fl', 'ga', 'id', 'in', 'ia',
									 'ks', 'ky', 'la', 'mi', 'ms',  'mo', 'mt', 'ne', 'nh', 'nm',
									 'nc', 'nd', 'oh', 'ok', 'pa',  'sd', 'tn', 'tx', 'ut', 'va',
									 'wv', 'wi', 'wy'],
	  "acceptsNonresidentPermits" : false,
		"residentsMustPermitHere" : true,
	   "issuesNonresidentPermits" : "limited",
					 "dialogText" : "Colorado honors select permits if the person resides in the state of issuance. It only gives nonresident permits to people who have property or businesses in Colorado, or members of the military."}

statePolicy['ct'] = { "stateAbbr" : "ct",
					  "stateName" : "Connecticut",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : false,
	   "issuesNonresidentPermits" : true,
					 "dialogText" : ""}

statePolicy['de'] = { "stateAbbr" : "de",
					  "stateName" : "Delaware",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : ['ak', 'ar', 'az', 'co', 'fl',  'id', 'ky', 'me', 'mi', 'mo',
				 					 'nm', 'nc', 'nd', 'oh', 'ok',  'sd', 'tn', 'tx', 'ut', 'wv'],
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
	   "issuesNonresidentPermits" : "limited",
					 "dialogText" : "Delaware honors 21 states' permits. It only issues 30-day temporary licenses to nonresidents. \"No individual shall be issued more than 3 temporary licenses.\""}

statePolicy['dc'] = { "stateAbbr" : "dc",
					  "stateName" : "District of Columbia",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : false,
	   "issuesNonresidentPermits" : false,
					 "dialogText" : "DC does not honor any other states' permits. It only issues up to two-year permits to applicants who have \"good reason to fear injury to his or her person or property or has any other proper reason for carrying a pistol\". In practice, DC is no-issue."}

statePolicy['fl'] = { "stateAbbr" : "fl",
					  "stateName" : "Florida",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : ['al', 'ak', 'az', 'ar', 'co',  'de', 'ga', 'id', 'in', 'ia',
									 'ks', 'ky', 'la', 'me', 'mi',  'ms', 'mo', 'mt', 'ne', 'nv',
									 'nh', 'nm', 'nc', 'nd', 'oh',  'ok', 'pa', 'sc', 'sd', 'tn',
									 'tx', 'ut', 'va', 'wv', 'wy'],
	  "acceptsNonresidentPermits" : "does not honor nonresident permits",
		"residentsMustPermitHere" : false,
	   "issuesNonresidentPermits" : true,
					 "dialogText" : ""}

statePolicy['ga'] = { "stateAbbr" : "ga",
					  "stateName" : "Georgia",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 18,
					"reciprocity" : ['al', 'ak', 'az', 'ar', 'co',  'fl', 'id', 'ia', 'in', 'ks',
									 'ky', 'la', 'me', 'mi', 'mo',  'ms', 'mt', 'nh', 'nc', 'nd',
									 'oh', 'ok', 'pa', 'sc', 'sd',  'tn', 'tx', 'ut', 'wi', 'wv',
									 'wy'],
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
	   "issuesNonresidentPermits" : false,
					 "dialogText" : "Georgia honors 32 states' permits. It does not issue nonresident permits."}

statePolicy['hi'] = { "stateAbbr" : "hi",
					  "stateName" : "Hawaii",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : false,
	   "issuesNonresidentPermits" : false,
					 "dialogText" : "Hawaii does not honor any other states' permits, and it does not issue nonresident permits. It is a may-issue state that is no-issue in practice."}

statePolicy['id'] = { "stateAbbr" : "id",
					  "stateName" : "Idaho",
						"article" : "an",
			"constitutionalCarry" : "constitutional carry for residents",
				   "ageForPermit" : 21,
		 "constitutionalCarryAge" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : false,
					 "dialogText" : ""}

statePolicy['il'] = { "stateAbbr" : "il",
					  "stateName" : "Illinois",
						"article" : "an",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : false,
					 "dialogText" : "Illinois does not honor any others states' permits. The Illinois State Police have stated that they will only issue nonresident permits to residents of Arkansas, Mississippi, Texas, and Virginia."}

statePolicy['in'] = { "stateAbbr" : "in",
					  "stateName" : "Indiana",
						"article" : "an",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
					 "dialogText" : "Indiana honors all other states' permits. It will only issue nonresident permits to an applicant who \"has a regular place of business or employment in Indiana\"."}

statePolicy['ia'] = { "stateAbbr" : "ia",
					  "stateName" : "Iowa",
						"article" : "an",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
					 "dialogText" : "Iowa honors all other states' permits, but it will only issue a nonresident permit to law enforcement officers and \"other nonresidents with a demonstrable viable threat to themselves or their family as verified by a law enforcement agency in the jurisdiction where the threat occurred\"."}

statePolicy['ks'] = { "stateAbbr" : "ks",
					  "stateName" : "Kansas",
						"article" : "a",
			"constitutionalCarry" : true,
				   "ageForPermit" : 21,
		 "constitutionalCarryAge" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : false,
					 "dialogText" : "Kansas has constitutional carry, but it does not issue nonresident permits."}

statePolicy['ky'] = { "stateAbbr" : "ky",
					  "stateName" : "Kentucky",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
					 "dialogText" : "Kentucky honors all other states' permits, but it only gives nonresident permits to members of the Armed Forces who have already been assigned to posts in Kentucky for at least 6 months."}

statePolicy['la'] = { "stateAbbr" : "la",
					  "stateName" : "Louisiana",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : ['al', 'ak', 'az', 'ar', 'co',  'fl', 'ga', 'id', 'ia', 'in',
									 'ks', 'ky', 'me', 'mi', 'mo',  'ms', 'mn', 'mt', 'ne', 'nv',
									 'nh', 'nm', 'nc', 'nd', 'oh',  'ok', 'pa', 'sc', 'sd', 'tn',
									 'tn', 'tx', 'ut', 'va', 'wa',  'wi', 'wv', 'wy'],
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
					 "dialogText" : "Louisiana honors 37 states' permits. It does not issue nonresident permits."}

///Maine has constitutional carry for those over 21; seems to honor permits for those over 18.
statePolicy['me'] = { "stateAbbr" : "me",
					  "stateName" : "Maine",
						"article" : "a",
			"constitutionalCarry" : true,
				   "ageForPermit" : 21,
		 "constitutionalCarryAge" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : false,
					 "dialogText" : ""}

statePolicy['md'] = { "stateAbbr" : "md",
					  "stateName" : "Maryland",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : false,
					 "dialogText" : "Maryland does not honor any other states' permits. It is a may-issue state; close to no-issue in practice. A Maryland permit is nearly impossible for the average person to acquire. You must show cause, which includes police reports, and even then it is a toss-up. Be very sure you want to select Maryland."}

statePolicy['ma'] = { "stateAbbr" : "ma",
					  "stateName" : "Massachusetts",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : false,
					 "dialogText" : "Massachusetts does not honor any other states' permits. A Massachusetts permit requires an appearance in person at the Firearms Records Bureau in Chelsea, MA. Massachusetts is may-issue; nonresident permits are rarely issued."}

statePolicy['mi'] = { "stateAbbr" : "mi",
					  "stateName" : "Michigan",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : "does not honor nonresident permits",
		"residentsMustPermitHere" : true,
					 "dialogText" : "Michigan honors all other states' permits if you are a resident of that state, but it does not issue nonresident permits."}

statePolicy['mn'] = { "stateAbbr" : "mn",
					  "stateName" : "Minnesota",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : ['ak', 'de', 'id', 'il', 'ks',  'ky', 'la', 'mi', 'nv', 'nj',
									 'nm', 'nd', 'ri', 'sc', 'sd'],
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : false,
					 "dialogText" : ""}

statePolicy['ms'] = { "stateAbbr" : "ms",
					  "stateName" : "Mississippi",
						"article" : "a",
			"constitutionalCarry" : true,
		 "constitutionalCarryAge" : 21,
				   "ageForPermit" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : false,
					 "dialogText" : "Mississippi has constitutional carry for anyone over 21 in a holster or bag, but it does not issue nonresident permits. Beware of \"pocket carrying\" or other styles of carrying in Mississippi; it's illegal."}

statePolicy['mo'] = { "stateAbbr" : "mo",
					  "stateName" : "Missouri",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 18,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
					 "dialogText" : "Missouri has constitutional carry for anyone over 18, but it does not issue nonresident permits."}

statePolicy['mt'] = { "stateAbbr" : "mt",
					  "stateName" : "Montana",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : ['al', 'ak', 'az', 'ar', 'ca',  'co', 'ct', 'fl', 'ga', 'id',
									 'il', 'in', 'ia', 'ks', 'ky',  'la', 'md', 'ma', 'mi', 'mn',
									 'mo', 'ms', 'ne', 'nv', 'nj',  'nm', 'ny', 'nc', 'nd', 'oh',
									 'ok', 'or', 'pa', 'sc', 'sd',  'tn', 'tx', 'ut', 'va', 'wa',
									 'wi', 'wv', 'wy'],
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : false,
					 "dialogText" : "Montana honors 43 states' permits. It does not issue nonresident permits."}

statePolicy['ne'] = { "stateAbbr" : "ne",
					  "stateName" : "Nebraska",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : ['ak', 'az', 'ar', 'ca', 'co',  'ct', 'dc', 'fl', 'hi', 'id',
									 'ia', 'il', 'ks', 'ky', 'la',  'me', 'mi', 'mn', 'mo', 'mt',
									 'ne', 'nv', 'nj', 'nm', 'nc',  'nd', 'oh', 'ok', 'or', 'ri',
									 'sc', 'sd', 'tn', 'tx', 'ut',  'va', 'wi', 'wv', 'wy'],
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : false,
					 "dialogText" : "Nebraska honors 38 states' permits. It does not issue nonresident permits."}

statePolicy['nv'] = { "stateAbbr" : "nv",
					  "stateName" : "Nevada",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : ['ak', 'az', 'ar', 'fl', 'id',  'il', 'ks', 'ky', 'la', 'ma',
									 'mi', 'mn', 'ms', 'mt', 'ne',  'nv', 'nm', 'nc', 'nd', 'oh',
									 'ok', 'sc', 'sd', 'tn', 'tx',  'ut', 'va', 'wi', 'wv', 'wy'],
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : false,
					 "dialogText" : ""}

statePolicy['nh'] = { "stateAbbr" : "nh",
					  "stateName" : "New Hampshire",
						"article" : "a",
			"constitutionalCarry" : true,
				   "ageForPermit" : 21,
		 "constitutionalCarryAge" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : false,
					 "dialogText" : ""}

statePolicy['nj'] = { "stateAbbr" : "nj",
					  "stateName" : "New Jersey",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : false,
					 "dialogText" : "New Jersey is a may-issue state; in practice, almost no-issue. A New Jersey permit is nearly impossible for the average person to acquire. Be very sure you want to select New Jersey."}

statePolicy['nm'] = { "stateAbbr" : "nm",
					  "stateName" : "New Mexico",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : ['ak', 'az', 'ar', 'co', 'de',  'fl', 'id', 'ks', 'la', 'mi',
									 'mi', 'ms', 'mo', 'ne', 'nv',  'nc', 'nd', 'oh', 'ok', 'sc',
									 'tn', 'tx', 'va', 'wv', 'wy'],
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : false,
					 "dialogText" : "New Mexico honors 24 states' permits. It does not issue nonresident permits."}

statePolicy['ny'] = { "stateAbbr" : "ny",
					  "stateName" : "New York",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : false,
					 "dialogText" : "New York does not honor any other states' permits. It does not issue nonresident permits."}

statePolicy['nc'] = { "stateAbbr" : "nc",
					  "stateName" : "North Carolina",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
					 "dialogText" : "North Carolina honors all other states' permits. It does not issue nonresident permits."}

statePolicy['nd'] = { "stateAbbr" : "nd",
					  "stateName" : "North Dakota",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : ['al', 'ak', 'az', 'ar', 'co',  'de', 'fl', 'ga', 'id', 'in',
									 'ia', 'ks', 'ky', 'la', 'me',  'mi', 'mn', 'mo', 'ms', 'mt',
									 'ne', 'nv', 'nh', 'nm', 'nc',  'oh', 'ok', 'pa', 'sc', 'sd',
									 'tn', 'tx', 'ut', 'va', 'wa',  'wv', 'wi', 'wy'],
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : false,
					 "dialogText" : ""}

statePolicy['oh'] = { "stateAbbr" : "oh",
					  "stateName" : "Ohio",
						"article" : "an",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
					 "dialogText" : "Ohio honors all other states' permits. It only issues nonresident permits to people employed in Ohio. It also can issue an emergency license to people with a \"justifiable need.\""}

statePolicy['ok'] = { "stateAbbr" : "ok",
					  "stateName" : "Oklahoma",
						"article" : "an",
			"constitutionalCarry" : "constitutional carry for certain residents",
		 "constitutionalCarryAge" : 21,
		"constitutionalCarryList" : ["ak", "az", "id", "me", "ms",  "mo", "nh", "vt", "wv", "wy"],
				   "ageForPermit" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
					 "dialogText" : "In addition to honoring all other states' permits, Oklahoma honors constitutional carry for residents of certain constitutional carry states. It does not issue nonresident permits."}

statePolicy['or'] = { "stateAbbr" : "or",
					  "stateName" : "Oregon",
						"article" : "an",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : false,
					 "dialogText" : "Oregon does not honor any other states' permits. It shall issue a permit to residents of states that border Oregon, or people who own or lease property in Oregon, but does not issue nonresident permits to residents of other states without owning property in Oregon."}

statePolicy['pa'] = { "stateAbbr" : "pa",
					  "stateName" : "Pennsylvania",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : ['ak', 'az', 'ar', 'co', 'fl',  'ga', 'in', 'ia', 'ks', 'ky',
									 'la', 'mi', 'ms', 'mo', 'mt',  'nc', 'nd', 'oh', 'ok', 'sd',
									 'tn', 'tx', 'ut', 'va', 'wv',  'wi', 'wy'],
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : false,
					 "dialogText" : ""}

statePolicy['ri'] = { "stateAbbr" : "ri",
					  "stateName" : "Rhode Island",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : false,
					 "dialogText" : "Rhode Island does not honor any other states' permits. Nonresident permits are rarely issued."}

statePolicy['sc'] = { "stateAbbr" : "sc",
					  "stateName" : "South Carolina",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : ['ak', 'az', 'ar', 'fl', 'ga',  'id', 'ks', 'ky', 'la', 'mi',
									 'ms', 'mo', 'nm', 'nc', 'nd',  'oh', 'ok', 'sd', 'tn', 'tx',
									 'va', 'wv', 'wy'],
	  "acceptsNonresidentPermits" : "does not honor nonresident permits",
		"residentsMustPermitHere" : true,
					 "dialogText" : "South Carolina honors permits from 23 states where the licensee is a resident of the issuing state. South Carolina will only issue nonresident permits to South Carolina landowners."}

statePolicy['sd'] = { "stateAbbr" : "sd",
					  "stateName" : "South Dakota",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
					 "dialogText" : "While South Dakota honors all other states' permits, it does not itself issue nonresident permits."}

statePolicy['tn'] = { "stateAbbr" : "tn",
					  "stateName" : "Tennessee",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
					 "dialogText" : "Tennessee only issues permits to nonresidents employed in Tennessee for six months or more. While it honors all other states' permits, if it denies a permit, the applicant's privilege to carry in Tennessee is revoked regardless of what concealed carry permits he holds."}

statePolicy['tx'] = { "stateAbbr" : "tx",
					  "stateName" : "Texas",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : ['al', 'ak', 'az', 'ar', 'ca',  'co', 'ct', 'de', 'fl', 'ga',
									 'hi', 'id', 'il', 'in', 'ia',  'ks', 'ky', 'la', 'md', 'ma',
									 'mi', 'mo', 'ms', 'mt', 'ne',  'nv', 'nj', 'nm', 'ny', 'nc',
									 'nd', 'oh', 'ok', 'pa', 'ri',  'sc', 'sd', 'tn', 'tx', 'ut',
									 'va', 'wv', 'wy'],
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
					 "dialogText" : ""}

statePolicy['ut'] = { "stateAbbr" : "ut",
					  "stateName" : "Utah",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
					 "dialogText" : ""}

statePolicy['vt'] = { "stateAbbr" : "vt",
					  "stateName" : "Vermont",
						"article" : "a",
			"constitutionalCarry" : true,
	   "issuesNonresidentPermits" : false,
		 "constitutionalCarryAge" : 21,
				   "ageForPermit" : 21,
					 "dialogText" : "Vermont does not issue concealed carry permits to anyone, resident or nonresident. It is forbidden by its state constitution from restricting or regulating the rights of its citizens to bear arms. Selecting Vermont may produce unexpected and inaccurate results."}

statePolicy['va'] = { "stateAbbr" : "va",
					  "stateName" : "Virginia",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
					 "dialogText" : ""}

statePolicy['wa'] = { "stateAbbr" : "wa",
					  "stateName" : "Washington",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : ['id', 'ks', 'la', 'mi', 'nc',  'nd', 'oh', 'ok', 'ut'],
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
					 "dialogText" : ""}

statePolicy['wv'] = { "stateAbbr" : "wv",
					  "stateName" : "West Virginia",
						"article" : "a",
			"constitutionalCarry" : true,
		 "constitutionalCarryAge" : 21,
				   "ageForPermit" : 21,
					"reciprocity" : true,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : false,
					 "dialogText" : "West Virginia has constitutional carry. It does not issue nonresident permits."}

statePolicy['wi'] = { "stateAbbr" : "wi",
					  "stateName" : "Wisconsin",
						"article" : "a",
			"constitutionalCarry" : false,
				   "ageForPermit" : 21,
					"reciprocity" : ['al', 'ak', 'az', 'ar', 'ca',  'co', 'ct', 'ga', 'hi', 'id',
									 'il', 'in', 'ia', 'ks', 'ky',  'la', 'md', 'ma', 'mi', 'mn',
									 'mo', 'ms', 'mt', 'ne', 'nv',  'nm', 'ny', 'nc', 'nd', 'oh',
									 'pa', 'pr', 'sc', 'sd', 'tn',  'tx', 'ut', 'va', 'vi', 'wa',
									 'wv', 'wy'],
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
					 "dialogText" : "Wisconsin honors 43 states' permits. It does not issue nonresident permits."}

statePolicy['wy'] = { "stateAbbr" : "wy",
					  "stateName" : "Wyoming",
						"article" : "a",
			"constitutionalCarry" : "constitutional carry for residents",
		 "constitutionalCarryAge" : 21,
				   "ageForPermit" : 21,
					"reciprocity" : ['al', 'ak', 'az', 'ar', 'co',  'fl', 'ga', 'id', 'in', 'ia',
									 'ks', 'ky', 'la', 'me', 'mi',  'ms', 'mo', 'mt', 'ne', 'nh',
									 'nv', 'nm', 'nc', 'nd', 'oh',  'ok', 'pa', 'sc', 'sd', 'tn',
									 'tx', 'ut', 'va', 'wv', 'wi'],
	   "issuesNonresidentPermits" : false,
	  "acceptsNonresidentPermits" : true,
		"residentsMustPermitHere" : true,
					 "dialogText" : "Wyoming has constitutional carry for its residents. It honors any other states' permits. It does not issue nonresident permits."}

/*	function validateCarry(state,
			constitutionalCarry, constitutionalCarryList,
			ageRequirement, ageRequirementException,
			reciprocity, reciprocityExceptions,
			acceptsNonresidentPermits,
			stateResidentPermitPolicy, stateResidentGracePeriod) {

		function buildTextFromThePermitList (permitsOwned, legality) {
			var sentenceList = '';
			var validPermitList = permitsOwned.map(function (x) {
				return policy[x].Name
			})

			if(validPermitList.length > 0) {
				if(typeof validPermitList === "object")
					sentenceList = toSentence(validPermitList)
				else sentenceList = stateNameFromAbbr(validPermitList)
				if (legality) {
					if(validPermitList.length > 1) {
						newTooltip += " " + longState + " also honors your " + sentenceList + " permits."
					}
					else {
						newTooltip += " " + longState + " also honors your " + sentenceList + " permit."
					}
				}
				else {
					legality = 1
					if(validPermitList.length > 1) {
						newTooltip = longState + " honors your " + sentenceList + " permits."
					}
					else {
						newTooltip = longState + " honors your " + sentenceList + " permit."
					}
				}
			}
			return newTooltip
		}


		var age = $('input[name=q21]:checked').val();
		var residency = $('#residency').val();
		var citizen = $('input[name=citizen]:checked').val();
		var permitsOwned = $('input[name=permits]:checked').map(function () {
			return $(this).val();
		}).get();
		var legality = 0
		var newTooltip = 'Initialize';
		var longState = stateNameFromAbbr(state)
		var longResState = 'undefined';
		if(residency) {
			longResState = stateNameFromAbbr(residency)
		}
		var article = policy[state].article
		var validPermitList = [];

		if(constitutionalCarry === 'constitutional carry') {
			if(validAge(ageRequirement, age))
			{
				newTooltip = longState + " has Constitutional Carry. Anyone " + ageRequirement +
							" may legally carry concealed in " + longState + " with just their driver's license."
				legality = 1
			}
			else {
				newTooltip = "Although " + longState + " has Constitutional Carry, persons " +
							"must be " + ageRequirement + " to legally carry concealed firearms in " + 					
							longState + "."
			}
		}
		else if (constitutionalCarry === 'constitutional carry for residents') {
			if(residency === state && validAge(ageRequirement, age))
			{
				newTooltip = longState + " has Constitutional Carry for residents. Residents " +
							ageRequirement + " may legally carry concealed in " + longState + " with just their " +
							"driver's license."
				legality = 1
			}
			else {
				newTooltip = "Although " + longState + " has Constitutional Carry for residents, persons " +
							"must be " + ageRequirement + " to legally carry concealed firearms in " + 					
							longState + "."
			}
		}
		else if (constitutionalCarry === 'constitutional carry for certain residents') {
			if(getAcceptedList(constitutionalCarryList, residency)) {
				newTooltip = longState + " recognizes Constitutional Carry for residents of " + longResState + ". " +
							longResState + " residents can legally carry concealed in " + longState + " with just their " +
							"driver's license."
				legality = 1
			}
		}
		if($.inArray(state, permitsOwned) > -1)
		{
			newTooltip = "You indicated that you have " + article + longState + " permit. Cplmap does " +
						" no further checking against state policies. We presume that the states do " +
						" their own checking before issuing your permit."
			legality = 2
		}
		// We already checked for in-state permits. If the state won't accept anything else, we're done here.
		if(residency === state &&
			stateResidentPermitPolicy === "requires state residents permit in state") {
			if(legality === 0) {
				newTooltip = "Although " + longState + " accepts out-of-state permits, your status as " +
							article + longState + " resident means that you must acquire " + article +
							longState + " permit to legally carry in " + longState + "." + stateResidentGracePeriod;
			}
			else {
				newTooltip = "Error 13"
			}
		} else if (isEmptyArray(reciprocity)) {
			newTooltip = longState + " does not accept any out-of-state permits.";
		}
		else {
			newTooltip += "Error 14"
			if (acceptsNonresidentPermits === "does not honor nonresident permits") {
				if (reciprocity === true) {
					if ($.inArray(residency, permitsOwned) > -1) {
						newTooltip = longState + " honors your " + longResState + "permit."
						legality = 1
					}
					else {
							newTooltip = longState + " accepts resident permits from all states. You must " +
										"acquire a permit to legally carry concealed in " + longState + "."
					}
				}
				else if($.inArray(residency, reciprocity) > -1) {
					if($.inArray(residency, permitsOwned) > -1) {
						newTooltip = longState + " accepts resident permits from your home state of " + longResState + "."
						validPermitList.push(state);
					}
					else {
							newTooltip = longState + " accepts resident permits from some states, including your home state of " +
										longResState + ". You must acquire a permit to legally carry concealed in " + longState + "."
					}
				}
				else {
					newTooltip = longState + " does not accept nonresident permits. " + longState + " accepts " + 
								"resident permits from some states, but not from " + longResState + "."
				}
			}
			else if(typeof reciprocity === "object") {
				var sentenceList = ''
				if(sentenceList = getAcceptedList(reciprocity, permitsOwned)) {
					newTooltip = buildTextFromThePermitList(validPermitList, legality)
					if (legality < 1) {
						legality = 1
					}
				}
				else {
					abbrList = stateAbbrList(reciprocity)
					newTooltip = longState + " only accepts permits from the states of " + abbrList + "."
				}
			}
			else if (reciprocity === true) {
				if(permitsOwned.length > 0) {
					newTooltip = "Error 15"
					newTooltip = buildTextFromThePermitList(validPermitList, legality)
					if (legality < 1) {
						legality = 1
					}
				}
				else if(legality === 0) {
					newTooltip = longState + " accepts all permits, but requires you to have one before you carry concealed."
				}
				else {
					newTooltip += "Error 12"
				}
			}
			else {
				newTooltip = "Error. State reciprocity policy is probably not set correctly."
			}
		}

		var permitObject = {}

		if(legality === 2) {
			permitObject[state] = hasPermitFill
		}
		else if(legality === 1) {
			permitObject[state] = permittedFill
		}
		else {
			permitObject[state] = illegalFill
		}
		$('#vmap').vectorMap('set', 'colors', permitObject)

		policy[state].Policy = newTooltip
	}
*/
