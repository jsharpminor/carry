function updateCarryInfo() {


	var illegalFill = '#cc0000';
	var permittedFill = '#009933';
	var hasPermitFill = '#003399';

	///Alabama
	var over21 = $('input[name=q21]:checked').val();
	var residency = $('#residency').val();
	var citizen = $('input[name=citizen]:checked').val();
	var permitsOwned = $('input[name=permits]:checked').map(function () {
		return $(this).val();
	}).get();

	function validateCarry(state,
			constitutionalCarry,
			ageRequirement, ageRequirementException,
			reciprocity, reciprocityExceptions,
			nonresidentPermitPolicy,
			stateResidentPermitPolicy, stateResidentGracePeriod) {

		var age = $('input[name=q21]:checked').val();
		var residency = $('#residency').val();
		var citizen = $('input[name=citizen]:checked').val();
		var permitsOwned = $('input[name=permits]:checked').map(function () {
			return $(this).val();
		}).get();
		legality = 0
		tooltip = '';
		longState = stateNameFromAbbr(state)
		if(residency) {
			longResState = stateNameFromAbbr(residency)
		}
		article = policy[state].article
		var acceptedList = []

		if(constitutionalCarry === 'constitutional carry') {
			newTooltip = longState + " has Constitutional Carry. Anyone " + ageRequirement +
						" may legally carry concealed in " + longState + " with just their driver's license."
			tooltip = legalize(legality, 1, tooltip, newTooltip)
			legality = 1
		}
		if (constitutionalCarry === 'constitutional carry for residents') {
			if(residency === state)
			{
				if(validAge(ageRequirement, age)) {
					newTooltip = longState + " has Constitutional Carry for residents. Residents " +
							ageRequirement + " may legally carry concealed in " + longState + " with just their " +
							"driver's license."
					tooltip = legalize(legality, 1, tooltip, newTooltip)
					legality = 1
				}
				else {
					newTooltip = "Although " + longState + " has Constitutional Carry for residents, persons " +
					"must be " + ageRequirement + " to legally carry concealed firearms in " + 
					longState + "."
					tooltip = legalize(legality, 0, tooltip, newTooltip)
					legality = 0
				}
			}
		}
		newTooltip = longState + " requires a permit for concealed carry."
		$.each(permitsOwned, function (index, thisPermit) {
			if(state === thisPermit) {
				newTooltip = "You indicated that you have " + article + longState + " permit. Cplmap does " +
							" no further checking against state policies. We presume that the states do " +
							" their own checking before issuing your permit."
				tooltip = legalize(legality, 2, tooltip, newTooltip)
				legality = 2
				return false;
			}
			if (state === residency &&
			  stateResidentPermitPolicy === "requires state residents permit in state") {
				newTooltip = "Although " + longState + " accepts out-of-state permits, your status as " +
							article + longState + " resident means that you must acquire " + article +
							longState + " permit to legally carry in " + longState + "." + stateResidentGracePeriod;
				tooltip = legalize(legality, 0, tooltip, newTooltip)
				legality = 0
				return false;
			}
			if(reciprocity === 'accepts all permits') {
				if (validAge(ageRequirement, age)) {
					acceptedList.push(stateNameFromAbbr(thisPermit))
					sentenceList = toSentence(acceptedList)
					if(acceptedList.length === 1) {
						newTooltip = longState + " accepts all permits. Your " + acceptedList + " permit is valid in " + longState + ".";
						tooltip = legalize(legality, 1, tooltip, newTooltip)
						legality = 1
					}
					else {
						newTooltip = longState + " accepts all permits. Your " +
									sentenceList + " permits are valid in " + longState + ".";
						tooltip = legalize(legality, 1, tooltip, newTooltip)
						legality = 1
					}
				}
				else {
					newTooltip = "Although " + longState + " accepts all carry permits, state law" +
								" requires that you be " + ageRequirement + " to carry concealed."
					tooltip = legalize(legality, 0, tooltip, newTooltip)
					legality = 0
				}
			}
			else if(typeof reciprocity === "object") {
				if (nonresidentPermitPolicy === "accepts nonresident permits") {
					if(sentenceList = getAcceptedList(reciprocity, permitsOwned)) {
						newTooltip = longState + " accepts some permits. Your permits from " + sentenceList +
									" are accepted in " + longState + ".";
						tooltip = legalize(legality, 1, tooltip, newTooltip)
						legality = 1
					}
					else {
						reciprocityList = stateAbbrList(reciprocity)
						newTooltip = longState + " accepts nonresident permits from " + reciprocityList +
									". You haven't indicated that you have any of these."
						tooltip = legalize(legality, 0, tooltip, newTooltip)
						legality = 0
					}
				}
				else if(nonresidentPermitPolicy === "does not honor nonresident permits") {
					var acceptedResidentPermit = false
					if(acceptedResidentPermit = findResidentPermits(residency, permitsOwned, reciprocity)) {
						newTooltip = longState + " accepts resident permits from your home state of " + longResState + "."
						tooltip = legalize(legality, 1, tooltip, newTooltip)
						legality = 1
					}
					else {
						console.log(reciprocity, residency)
						if(getAcceptedList(reciprocity, residency) ){
							if(findResidentPermits(residency, permitsOwned, reciprocity))
							{
								newTooltip = "Congrats"
								tooltip = legalize(legality, 1, tooltip, newTooltip)
								legality = 1
							}
							else {
								newTooltip = longState + " accepts resident permits from some states, including your home state of " +
											longResState + ". You must acquire a permit to legally carry concealed in " + longState + "."
								tooltip = legalize(legality, 0, tooltip, newTooltip)
								legality = 0
							}
						}
						else {
							newTooltip = longState + " does not accept nonresident permits. " + longState + " accepts " + 
										"residential permits from some states, but not from " + longResState + "."
							tooltip = legalize(legality, 0, tooltip, newTooltip)
							legality = 0
						}
					}
				}	
				else {
					newTooltip = "Working on that."
					tooltip = legalize(legality, 0, tooltip, newTooltip)
					legality = 0
				}
			} 
			else {
				newTooltip = longState + " does not accept any out-of-state permits.";
				tooltip = legalize(legality, 0, tooltip, newTooltip)
				legality = 0
			}
		});
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
		console.log(acceptedList)
		sentenceList = toSentence(acceptedList);

//

//			newTooltip = longState + " accepts some permits. Your permit from " + acceptedList + " is accepted in " + longState + ".";

		policy[state].Policy = tooltip
	}

		validateCarry("al",
						"permit required",
						"over 21", "",
						"accepts all permits", "",
						"accepts nonresident permits",
						"requires state residents permit in state", "");
		validateCarry("ak",
						"constitutional carry",
						"over 21", "",
						"accepts all permits", "",
						"accepts nonresident permits",
						"no state resident permit policy", "");
		///Arizona
		validateCarry("az",
						"constitutional carry",
						"over 21", "",
						"accepts all permits", "",
						"accepts nonresident permits",
						"no state resident permit policy", "");
		validateCarry("ar",
						"permit required",
						"over 21", {"over 19" : "member of Armed Forces or honorably discharged"},
						"accepts all permits", "",
						"accepts nonresident permits",
						"no state resident permit policy", "");
		validateCarry("ca",
						"permit required",
						"over 21", "",
						"does not accept out-of-state permits", "",
						"does not honor nonresident permits",
						"requires state residents permit in state", "");
		validateCarry("co",
						"permit required",
						"over 21", "",
						['al', 'ak', 'az', 'ar', 'de',  'fl', 'ga', 'id', 'in', 'ia',
						 'ks', 'ky', 'la', 'mi', 'ms',  'mo', 'mt', 'ne', 'nh', 'nm',
						 'nc', 'nd', 'oh', 'ok', 'pa',  'sd', 'tn', 'tx', 'ut', 'va',
						 'wv', 'wi', 'wy'], {"age" : "over 21"},
						 "does not honor nonresident permits",
						 "requires state residents permit in state", "")
		///Connecticut
		validateCarry("ct",
						"permit required",
						"over 21", "",
						"does not accept out-of-state permits", "",
						"does not honor nonresident permits",
						"requires state residents permit in state", "");
		///Delaware
		validateCarry("de",
						"permit required",
						"over 21", "",
						['ak', 'ar', 'az', 'co', 'fl',  'id', 'ky', 'me', 'mi', 'mo',
						 'nm', 'nc', 'nd', 'oh', 'ok',  'sd', 'tn', 'tx', 'ut',
						 'wv'], "",
						"accepts nonresident permits",
						"requires state residents permit in state", "");
		///District of Columbia
		validateCarry("dc",
						"permit required",
						"over 21", "",
						"does not accept out-of-state permits", "",
						"does not honor nonresident permits",
						"requires state residents permit in state", "");
		validateCarry("fl",
						"permit required",
						"over 21", "",
						['al', 'ak', 'az', 'ar', 'co',  'de', 'ga', 'id', 'in', 'ia',
						 'ks', 'ky', 'la', 'me', 'mi',  'ms', 'mo', 'mt', 'ne', 'nv',
						 'nh', 'nm', 'nc', 'nd', 'oh',  'ok', 'pa', 'sc', 'sd', 'tn',
						 'tx', 'ut', 'va', 'wv', 'wy'], "",
						 "does not honor nonresident permits",
						 "no state resident permit policy", "")
		///Georgia
		validateCarry("ga",
						"permit required",
						"over 18", "",
						['al', 'ak', 'az', 'ar', 'co',  'fl', 'id', 'ia', 'in', 'ks',
						 'ky', 'la', 'me', 'mi', 'mo',  'ms', 'mt', 'nh', 'nc', 'nd',
						 'oh', 'ok', 'pa', 'sc', 'sd',  'tn', 'tx', 'ut', 'wi', 'wv',
						 'wy'], "",
						"accepts nonresident permits",
						"requires state residents permit in state", "");
		///Hawaii
		validateCarry("hi",
						"permit required",
						"over 21", "",
						"does not accept out-of-state permits", "",
						"does not honor nonresident permits",
						"requires state residents permit in state", "");
		///Idaho
		validateCarry("id",
						"constitutional carry for residents",
						"over 21", "",
						"accepts all permits", "",
						"accepts nonresident permits",
						"no state resident permit policy", "");
		///Illinois
		if(permitsOwned.includes('il')) {
			$('#vmap').vectorMap('set', 'colors', {il: hasPermitFill})
		} else {
			$('#vmap').vectorMap('set', 'colors', {il: illegalFill});
		}
		///Indiana
		if(permitsOwned.includes('in')) {
			$('#vmap').vectorMap('set', 'colors', {in: hasPermitFill})
		} else if(permitsOwned.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {in: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {in: illegalFill});
		}
		///Iowa
		if(permitsOwned.includes('ia')) {
			$('#vmap').vectorMap('set', 'colors', {ia: hasPermitFill})
		} else if(permitsOwned.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {ia: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ia: illegalFill});
		}
		///Kansas
		if(permitsOwned.includes('ks')) {
			$('#vmap').vectorMap('set', 'colors', {ks: hasPermitFill})
		} else if(citizen === 'usCitizen' && over21 === 'over21') {
			$('#vmap').vectorMap('set', 'colors', {ks: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ks: illegalFill});
		}
		///Kentucky
		if(permitsOwned.includes('ky')) {
			$('#vmap').vectorMap('set', 'colors', {ky: hasPermitFill})
		} else if(permitsOwned.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {ky: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ky: illegalFill});
		}
		///Louisiana
		if(residency === 'la') {
			if(permitsOwned.includes('la')) {
				$('#vmap').vectorMap('set', 'colors', {la: hasPermitFill})
			}
			else {
				$('#vmap').vectorMap('set', 'colors', {la: illegalFill});
			}
		}
		else if(permitsOwned.includes('la')) {
			$('#vmap').vectorMap('set', 'colors', {la: hasPermitFill})
		} else if (findOne(['al', 'ak', 'az', 'ar', 'co', 'fl', 'ga', 'id', 'ia', 'in',
							'ks', 'ky', 'me', 'mi', 'mo', 'ms', 'mn', 'mt', 'ne', 'nv',
							'nh', 'nm', 'nc', 'nd', 'oh', 'ok', 'pa', 'sc', 'sd', 'tn',
							'tn', 'tx', 'ut', 'va', 'wa', 'wi', 'wv', 'wy'], permitsOwned)) {
			$('#vmap').vectorMap('set', 'colors', {la: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {la: illegalFill});
		}
		///Maine
		if(permitsOwned.includes('me')) {
			$('#vmap').vectorMap('set', 'colors', {me: hasPermitFill})
		} else if(over21 === 'over21' ||
		  (over21 === 'over18' && permitsOwned.length > 0)) {
			$('#vmap').vectorMap('set', 'colors', {me: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {me: illegalFill});
		}
		///Maryland
		if(permitsOwned.includes('md')) {
			$('#vmap').vectorMap('set', 'colors', {md: hasPermitFill})
		} else {
			$('#vmap').vectorMap('set', 'colors', {md: illegalFill});
		}
		///Massachusetts
		if(permitsOwned.includes('ma')) {
			$('#vmap').vectorMap('set', 'colors', {ma: hasPermitFill})
		} else {
			$('#vmap').vectorMap('set', 'colors', {ma: illegalFill});
		}
		///Michigan
		if(permitsOwned.includes('mi')) {
			$('#vmap').vectorMap('set', 'colors', {mi: hasPermitFill})
		} else if(permitsOwned.length > 0) {
			if(findResidentPermits(residency, permitsOwned, "all")) {
				$('#vmap').vectorMap('set', 'colors', {mi: permittedFill});
			} else {
				$('#vmap').vectorMap('set', 'colors', {mi: illegalFill});
			}
		} else {
			$('#vmap').vectorMap('set', 'colors', {mi: illegalFill});
		}
		///Minnesota
		if(permitsOwned.includes('mn')) {
			$('#vmap').vectorMap('set', 'colors', {mn: hasPermitFill})
		} else if (findOne(['ak', 'de', 'id', 'il', 'ks', 'ky', 'la', 'mi', 'nv',
							'nj', 'nm', 'nd', 'ri', 'sc', 'sd'], permitsOwned)) {
			$('#vmap').vectorMap('set', 'colors', {mn: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {mn: illegalFill});
		}
		///Mississippi
		if(permitsOwned.includes('ms')) {
			$('#vmap').vectorMap('set', 'colors', {ms: hasPermitFill})
		} else if(citizen === 'usCitizen' && over21 === 'over21') {
			$('#vmap').vectorMap('set', 'colors', {ms: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ms: illegalFill});
		}
		///Missouri
		if(permitsOwned.includes('mo')) {
			$('#vmap').vectorMap('set', 'colors', {mo: hasPermitFill})
		} else if((over21 === 'over18') || (over21 === 'over21')) {
			$('#vmap').vectorMap('set', 'colors', {mo: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {mo: illegalFill});
		}
		///Montana
		if(permitsOwned.includes('mt')) {
			$('#vmap').vectorMap('set', 'colors', {mt: hasPermitFill})
		} else if (findOne(['al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'fl', 'ga', 'id',
							'il', 'in', 'ia', 'ks', 'ky', 'la', 'md', 'ma', 'mi', 'mn',
							'mo', 'ms', 'ne', 'nv', 'nj', 'nm', 'ny', 'nc', 'nd', 'oh',
							'ok', 'or', 'pa', 'sc', 'sd', 'tn', 'tx', 'ut', 'va', 'wa',
							'wi', 'wv', 'wy'], permitsOwned)) {
			$('#vmap').vectorMap('set', 'colors', {mt: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {mt: illegalFill});
		}
		///Nebraska
		if(permitsOwned.includes('ne')) {
			$('#vmap').vectorMap('set', 'colors', {ne: hasPermitFill})
		} else if (findOne(['ak', 'az', 'ar', 'ca', 'co', 'ct', 'dc', 'fl', 'hi', 'id',
					 'ia', 'il', 'ks', 'ky', 'la', 'me', 'mi', 'mn', 'mo', 'mt',
					 'ne', 'nv', 'nj', 'nm', 'nc', 'nd', 'oh', 'ok', 'or', 'ri',
					 'sc', 'sd', 'tn', 'tx', 'ut', 'va', 'wi', 'wv',
					 'wy'], permitsOwned) && over21 === 'over21') {
			$('#vmap').vectorMap('set', 'colors', {ne: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ne: illegalFill});
		}
		///Nevada
		if(permitsOwned.includes('nv')) {
			$('#vmap').vectorMap('set', 'colors', {nv: hasPermitFill})
		} else if (findOne(['ak', 'az', 'ar', 'fl', 'id', 'il', 'ks', 'ky', 'la', 'ma',
					 'mi', 'mn', 'ms', 'mt', 'ne', 'nv', 'nm', 'nc', 'nd', 'oh',
					 'ok', 'sc', 'sd', 'tn', 'tx', 'ut', 'va', 'wi', 'wv',
					 'wy'], permitsOwned)) {
			$('#vmap').vectorMap('set', 'colors', {nv: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {nv: illegalFill});
		}
		///New Hampshire
		if(permitsOwned.includes('nh')) {
			$('#vmap').vectorMap('set', 'colors', {nh: hasPermitFill})
		} else {
			$('#vmap').vectorMap('set', 'colors', {nh: permittedFill});
		}
		if(!$('#permittedList [name=nh]').length)
		{
			$('#permittedList').append('<li name="nh">&nbsp;</li>');
		}
		///New Jersey
		if(permitsOwned.includes('nj')) {
			$('#vmap').vectorMap('set', 'colors', {nj: hasPermitFill})
		} else {
			$('#vmap').vectorMap('set', 'colors', {nj: illegalFill});
		}
		///New Mexico
		if(permitsOwned.includes('nm')) {
			$('#vmap').vectorMap('set', 'colors', {nm: hasPermitFill})
		} else if (findOne(['ak', 'az', 'ar', 'co', 'de', 'fl', 'id', 'ks', 'la', 'mi',
					 'mi', 'ms', 'mo', 'ne', 'nv', 'nc', 'nd', 'oh',
					 'ok', 'sc', 'tn', 'tx', 'va', 'wv', 'wy'], permitsOwned)) {
			$('#vmap').vectorMap('set', 'colors', {nm: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {nm: illegalFill});
		}
		///New York
		if(permitsOwned.includes('ny')) {
			$('#vmap').vectorMap('set', 'colors', {ny: hasPermitFill})
		} else {
			$('#vmap').vectorMap('set', 'colors', {ny: illegalFill});
		}
		///North Carolina
		if(permitsOwned.includes('nc')) {
			$('#vmap').vectorMap('set', 'colors', {nc: hasPermitFill})
		} else if(permitsOwned.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {nc: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {nc: illegalFill});
		}
		///North Dakota
		if(permitsOwned.includes('nd')) {
			$('#vmap').vectorMap('set', 'colors', {nd: hasPermitFill})
		} else if (findOne(['al', 'ak', 'az', 'ar', 'co', 'de', 'fl', 'ga', 'id', 'in',
					 'ia', 'ks', 'ky', 'la', 'me', 'mi', 'mn', 'mo', 'ms', 'mt',
					 'ne', 'nv', 'nh', 'nm', 'nc', 'oh', 'ok', 'pa', 'sc',
					 'sd', 'tn', 'tx', 'ut', 'va', 'wa', 'wv', 'wi',
					 'wy'], permitsOwned)) {
			$('#vmap').vectorMap('set', 'colors', {nd: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {nd: illegalFill});
		}
		///Ohio
		if(permitsOwned.includes('oh')) {
			$('#vmap').vectorMap('set', 'colors', {oh: hasPermitFill})
		} else if(permitsOwned.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {oh: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {oh: illegalFill});
		}
		///Oklahoma
		if(permitsOwned.includes('ok')) {
			$('#vmap').vectorMap('set', 'colors', {al: hasPermitFill})
		} else if((permitsOwned.length > 0) || 
				   residency === 'ak' || 
				   residency === 'az' || 
				   residency === 'me' || 
				   residency === 'ms' || 
				   residency === 'ok' || 
				   residency === 'vt' || 
				   residency === 'wy') {
			$('#vmap').vectorMap('set', 'colors', {ok: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ok: illegalFill});
		}
		///Oregon
		if(permitsOwned.includes('or')) {
			$('#vmap').vectorMap('set', 'colors', {or: hasPermitFill})
		} else {
			$('#vmap').vectorMap('set', 'colors', {or: illegalFill});
		}
		///Pennsylvania
		if(permitsOwned.includes('pa')) {
			$('#vmap').vectorMap('set', 'colors', {pa: hasPermitFill})
		} else if (findOne(['ak', 'az', 'ar', 'co', 'fl', 'ga', 'in', 'ia', 'ks', 'ky',
					 'la', 'mi', 'ms', 'mo', 'mt', 'nc', 'nd', 'oh', 'ok', 'pa', 
					 'sd', 'tn', 'tx', 'ut', 'va', 'wv', 'wi', 'wy'], permitsOwned)) {
			$('#vmap').vectorMap('set', 'colors', {pa: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {pa: illegalFill});
		}
		///Rhode Island
		if(permitsOwned.includes('ri')) {
			$('#vmap').vectorMap('set', 'colors', {ri: hasPermitFill})
		} else {
			$('#vmap').vectorMap('set', 'colors', {ri: illegalFill});
		}
		///South Carolina
		if(permitsOwned.includes('sc')) {
			$('#vmap').vectorMap('set', 'colors', {sc: hasPermitFill})
		} else if (((permitsOwned.includes('ak') && residency === 'ak') || 
					(permitsOwned.includes('az') && residency === 'az') || 
					(permitsOwned.includes('ar') && residency === 'ar') || 
					(permitsOwned.includes('fl') && residency === 'fl') || 
					(permitsOwned.includes('ga') && residency === 'ga') || 
					(permitsOwned.includes('id') && residency === 'id') || 
					(permitsOwned.includes('ks') && residency === 'ks') || 
					(permitsOwned.includes('ky') && residency === 'ky') || 
					(permitsOwned.includes('la') && residency === 'la') || 
					(permitsOwned.includes('mi') && residency === 'mi') || 
					(permitsOwned.includes('ms') && residency === 'ms') || 
					(permitsOwned.includes('mo') && residency === 'mo') || 
					(permitsOwned.includes('nm') && residency === 'nm') || 
					(permitsOwned.includes('nc') && residency === 'nc') || 
					(permitsOwned.includes('nd') && residency === 'nd') || 
					(permitsOwned.includes('oh') && residency === 'oh') || 
					(permitsOwned.includes('ok') && residency === 'ok') || 
					(permitsOwned.includes('sd') && residency === 'sd') || 
					(permitsOwned.includes('tn') && residency === 'tn') || 
					(permitsOwned.includes('tx') && residency === 'tx') || 
					(permitsOwned.includes('va') && residency === 'va') || 
					(permitsOwned.includes('wv') && residency === 'wv') || 
					(permitsOwned.includes('wy') && residency === 'wy')) &&
			  over21 === 'over21') {
			$('#vmap').vectorMap('set', 'colors', {sc: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {sc: illegalFill});
		}
		///South Dakota
		if(permitsOwned.includes('sd')) {
			$('#vmap').vectorMap('set', 'colors', {sd: hasPermitFill})
		} else if(permitsOwned.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {sd: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {sd: illegalFill});
		}
		///Tennessee
		if(permitsOwned.includes('tn')) {
			$('#vmap').vectorMap('set', 'colors', {tn: hasPermitFill})
		} else if(permitsOwned.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {tn: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {tn: illegalFill});
		}
		///Texas
		if(permitsOwned.includes('tx')) {
			$('#vmap').vectorMap('set', 'colors', {tx: hasPermitFill})
		} else if (findOne(['al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'de', 'fl', 'ga',
					 'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'md', 'ma',
					 'mi', 'mo', 'ms', 'mt', 'ne', 'nv', 'nj', 'nm', 'ny', 'nc',
					 'nd', 'oh', 'ok', 'pa', 'ri', 'sc', 'sd', 'tn', 'tx', 'ut',
					 'va', 'wv', 'wy'], permitsOwned)) {
			$('#vmap').vectorMap('set', 'colors', {tx: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {tx: illegalFill});
		}
		///Utah
		if(permitsOwned.includes('ut')) {
			$('#vmap').vectorMap('set', 'colors', {ut: hasPermitFill})
		} else if(permitsOwned.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {ut: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ut: illegalFill});
		}
		///Vermont
		if(permitsOwned.includes('vt')) {
			$('#vmap').vectorMap('set', 'colors', {vt: hasPermitFill})
		} else {
			$('#vmap').vectorMap('set', 'colors', {vt: permittedFill});
		}
		///Virginia
		if(permitsOwned.includes('va')) {
			$('#vmap').vectorMap('set', 'colors', {va: hasPermitFill})
		} else if(permitsOwned.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {va: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {va: illegalFill});
		}
		///Washington
		if(permitsOwned.includes('wa')) {
			$('#vmap').vectorMap('set', 'colors', {wa: hasPermitFill})
		} else if (findOne(['id', 'ks', 'la', 'mi', 'nc', 'nd', 'oh',
							'ok', 'ut'], permitsOwned) && over21 === 'over21') {
			$('#vmap').vectorMap('set', 'colors', {wa: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {wa: illegalFill});
		}
		///West Virginia
		if(permitsOwned.includes('wv')) {
			$('#vmap').vectorMap('set', 'colors', {wv: hasPermitFill})
		} else if(citizen === 'usCitizen' && over21 === 'over21') {
			$('#vmap').vectorMap('set', 'colors', {wv: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {wv: illegalFill});
		}
		///Wisconsin
		if(permitsOwned.includes('wi')) {
			$('#vmap').vectorMap('set', 'colors', {wi: hasPermitFill})
		} else if (findOne(['al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'ga', 'hi', 'id',
					 'il', 'in', 'ia', 'ks', 'ky', 'la', 'md', 'ma', 'mi', 'mn',
					 'mo', 'ms', 'mt', 'ne', 'nv', 'nm', 'ny', 'nc', 'nd', 'oh',
					 'pa', 'PR', 'sc', 'sd', 'tn', 'tx', 'ut', 'va', 'VI', 'wa',
					 'wv', 'wy'], permitsOwned)) {
			$('#vmap').vectorMap('set', 'colors', {wi: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {wi: illegalFill});
		}
		///Wyoming
		if(permitsOwned.includes('wy')) {
			$('#vmap').vectorMap('set', 'colors', {wy: hasPermitFill})
		} else if((residency === 'wy') ||
			findOne(['al', 'ak', 'az', 'ar', 'co', 'fl', 'ga', 'id', 'in', 'ia',
					 'ks', 'ky', 'la', 'me', 'mi', 'ms', 'mo', 'mt', 'ne', 'nh',
					 'nv', 'nm', 'nc', 'nd', 'oh', 'ok', 'pa', 'sc', 'sd', 'tn',
					 'tx', 'ut', 'va', 'wv', 'wi'], permitsOwned))
		{
			$('#vmap').vectorMap('set', 'colors', {wy: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {wy: illegalFill});
		}
	}
