	function updateCarryInfo() {

		function findOne (haystack, arr) {
			return arr.some(function (v) {
				return haystack.indexOf(v) >= 0;
			});
		}

		var over21 = $('input[name=q21]:checked').val();
		var residency = $('#residency').val();
		var citizen = $('input[name=citizen]:checked').val();
		var permitsOwned = $('input[name=permits]:checked').map(function () {
			return $(this).val();
		}).get();
		var illegalFill = '#cc0000';
		var permittedFill = '#009933';
		var hasPermitFill = '#003399';

/*		console.log("Age:" + over21);
		console.log("Residency: " + residency);
		console.log("Citizenship: " + citizen);
		console.log("Permits owned: " + permitsOwned);
		console.log("# Permits owned: " + permitsOwned.length); */

		///Alabama
		if(permitsOwned.includes('al')) {
			$('#vmap').vectorMap('set', 'colors', {al: hasPermitFill})
		} else if(permitsOwned.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {al: permittedFill});
			if(!$('#permittedList [name=al]').length) {
				$('#permittedList').append('<li name="al">&nbsp;</li>');
			}
		} else {
			$('#vmap').vectorMap('set', 'colors', {al: illegalFill});
			if($('#permittedList [name=al]').length)
			{
				$('#permittedList').children('[name=al]').remove();
			}
		}
		///Alaska
		if(permitsOwned.includes('ak')) {
			$('#vmap').vectorMap('set', 'colors', {ak: hasPermitFill})
			if(!$('#permittedList [name=ak]').length) {
				$('#permittedList').append('<li name="ak">&nbsp;</li>');
			}
		} else if(over21 === 'over21') {
			$('#vmap').vectorMap('set', 'colors', {ak: permittedFill});
			if(!$('#permittedList [name=ak]').length) {
				$('#permittedList').append('<li name="ak">&nbsp;</li>');
			}
		} else {
			$('#vmap').vectorMap('set', 'colors', {ak: illegalFill});
			if($('#permittedList [name=ak]').length) {
				$('#permittedList').children('[name=ak]').remove();
			}
		}
		///Arizona
		if(permitsOwned.includes('az')) {
			$('#vmap').vectorMap('set', 'colors', {az: hasPermitFill})
			if($('#permittedList [name=az]').length) {
				$('#permittedList').children('[name=az]').remove();
			}
		} else if(over21 === 'over21') {
			$('#vmap').vectorMap('set', 'colors', {az: permittedFill});
			if($('#permittedList [name=az]').length) {
				$('#permittedList').children('[name=az]').remove();
			}
		} else {
			$('#vmap').vectorMap('set', 'colors', {az: illegalFill});
			if($('#permittedList [name=az]').length) {
				$('#permittedList').children('[name=az]').remove();
			}
		}
		///Arkansas
		if(permitsOwned.includes('ar')) {
			$('#vmap').vectorMap('set', 'colors', {ar: hasPermitFill})
		} else if(permitsOwned.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {ar: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ar: illegalFill});
		}
		///California
		if(permitsOwned.includes('ca')) {
			$('#vmap').vectorMap('set', 'colors', {ca: hasPermitFill})
		} else {
			$('#vmap').vectorMap('set', 'colors', {ca: illegalFill});
		}
		///Colorado
		if(permitsOwned.includes('co')) {
			$('#vmap').vectorMap('set', 'colors', {al: hasPermitFill})
		} else if ((permitsOwned.includes('al') && residency === 'al') ||
				   (permitsOwned.includes('ak') && residency === 'ak') || 
				   (permitsOwned.includes('az') && residency === 'az') || 
				   (permitsOwned.includes('ar') && residency === 'ar') || 
				   (permitsOwned.includes('de') && residency === 'de') || 
				   (permitsOwned.includes('fl') && residency === 'fl') || 
				   (permitsOwned.includes('ga') && residency === 'ga') || 
				   (permitsOwned.includes('id') && residency === 'id') || 
				   (permitsOwned.includes('in') && residency === 'in') || 
				   (permitsOwned.includes('ia') && residency === 'ia') || 
				   (permitsOwned.includes('ks') && residency === 'ks') || 
				   (permitsOwned.includes('ky') && residency === 'ky') || 
				   (permitsOwned.includes('la') && residency === 'la') || 
				   (permitsOwned.includes('mi') && residency === 'mi') || 
				   (permitsOwned.includes('ms') && residency === 'ms') || 
				   (permitsOwned.includes('mo') && residency === 'mo') || 
				   (permitsOwned.includes('mt') && residency === 'mt') || 
				   (permitsOwned.includes('ne') && residency === 'ne') || 
				   (permitsOwned.includes('nh') && residency === 'nh') || 
				   (permitsOwned.includes('nm') && residency === 'nm') || 
				   (permitsOwned.includes('nc') && residency === 'nc') || 
				   (permitsOwned.includes('nd') && residency === 'nd') || 
				   (permitsOwned.includes('oh') && residency === 'oh') || 
				   (permitsOwned.includes('ok') && residency === 'ok') || 
				   (permitsOwned.includes('pa') && residency === 'pa') || 
				   (permitsOwned.includes('sd') && residency === 'sd') || 
				   (permitsOwned.includes('tn') && residency === 'tn') || 
				   (permitsOwned.includes('tx') && residency === 'tx') || 
				   (permitsOwned.includes('ut') && residency === 'ut') || 
				   (permitsOwned.includes('va') && residency === 'va') || 
				   (permitsOwned.includes('wv') && residency === 'wv') || 
				   (permitsOwned.includes('wi') && residency === 'wi') || 
				   (permitsOwned.includes('wy') && residency === 'wy')) {
			$('#vmap').vectorMap('set', 'colors', {co: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {co: illegalFill});
		}
		///Connecticut
		if(permitsOwned.includes('ct')) {
			$('#vmap').vectorMap('set', 'colors', {ct: hasPermitFill})
		} else {
			$('#vmap').vectorMap('set', 'colors', {ct: illegalFill});
		}
		///Delaware
		if(permitsOwned.includes('de')) {
			$('#vmap').vectorMap('set', 'colors', {de: hasPermitFill})
		} else if (findOne(['ak', 'ar', 'az', 'co', 'fl', 'id', 'ky', 'me', 'mi', 'mo',
							'nm', 'nc', 'nd', 'oh', 'ok', 'sd', 'tn', 'tx', 'ut',
							'wv'], permitsOwned)) {
			$('#vmap').vectorMap('set', 'colors', {de: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {de: illegalFill});
		}
		///District of Columbia
		if(permitsOwned.includes('dc')) {
			$('#vmap').vectorMap('set', 'colors', {dc: hasPermitFill})
		} else {
			$('#vmap').vectorMap('set', 'colors', {dc: illegalFill});
		}
		///Florida
		if(permitsOwned.includes('fl')) {
			$('#vmap').vectorMap('set', 'colors', {fl: hasPermitFill})
		} else if ((permitsOwned.includes('al') && residency === 'al') ||
				   (permitsOwned.includes('ak') && residency === 'ak') || 
				   (permitsOwned.includes('az') && residency === 'az') || 
				   (permitsOwned.includes('ar') && residency === 'ar') || 
				   (permitsOwned.includes('co') && residency === 'co') || 
				   (permitsOwned.includes('de') && residency === 'de') || 
				   (permitsOwned.includes('ga') && residency === 'ga') || 
				   (permitsOwned.includes('id') && residency === 'id') || 
				   (permitsOwned.includes('in') && residency === 'in') || 
				   (permitsOwned.includes('ia') && residency === 'ia') || 
				   (permitsOwned.includes('ks') && residency === 'ks') || 
				   (permitsOwned.includes('ky') && residency === 'ky') || 
				   (permitsOwned.includes('la') && residency === 'la') || 
				   (permitsOwned.includes('me') && residency === 'me') || 
				   (permitsOwned.includes('mi') && residency === 'mi') || 
				   (permitsOwned.includes('ms') && residency === 'ms') || 
				   (permitsOwned.includes('mo') && residency === 'mo') || 
				   (permitsOwned.includes('mt') && residency === 'mt') || 
				   (permitsOwned.includes('ne') && residency === 'ne') || 
				   (permitsOwned.includes('nv') && residency === 'nv') || 
				   (permitsOwned.includes('nh') && residency === 'nh') || 
				   (permitsOwned.includes('nm') && residency === 'nm') || 
				   (permitsOwned.includes('nc') && residency === 'nc') || 
				   (permitsOwned.includes('nd') && residency === 'nd') || 
				   (permitsOwned.includes('oh') && residency === 'oh') || 
				   (permitsOwned.includes('ok') && residency === 'ok') || 
				   (permitsOwned.includes('pa') && residency === 'pa') || 
				   (permitsOwned.includes('sc') && residency === 'sc') || 
				   (permitsOwned.includes('sd') && residency === 'sd') || 
				   (permitsOwned.includes('tn') && residency === 'tn') || 
				   (permitsOwned.includes('tx') && residency === 'tx') || 
				   (permitsOwned.includes('ut') && residency === 'ut') || 
				   (permitsOwned.includes('va') && residency === 'va') || 
				   (permitsOwned.includes('wv') && residency === 'wv') || 
				   (permitsOwned.includes('wy') && residency === 'wy')) {
			$('#vmap').vectorMap('set', 'colors', {fl: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {fl: illegalFill});
		}
		///Georgia
		if(permitsOwned.includes('ga')) {
			$('#vmap').vectorMap('set', 'colors', {ga: hasPermitFill})
		} else if (findOne(['al', 'ak', 'az', 'ar', 'co', 'fl', 'id', 'ia', 'in', 'ks',
							'ky', 'la', 'me', 'mi', 'mo', 'ms', 'mt', 'nh', 'nc', 'nd',
							'oh', 'ok', 'pa', 'sc', 'sd', 'tn', 'tx', 'ut', 'wi', 'wv',
							'wy'], permitsOwned)) {
			$('#vmap').vectorMap('set', 'colors', {ga: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ga: illegalFill});
		}
		///Hawaii
		if(permitsOwned.includes('hi')) {
			$('#vmap').vectorMap('set', 'colors', {hi: hasPermitFill})
		} else {
			$('#vmap').vectorMap('set', 'colors', {hi: illegalFill});
		}
		///Idaho
		if(permitsOwned.includes('id')) {
			$('#vmap').vectorMap('set', 'colors', {id: hasPermitFill})
		} else if((permitsOwned.length > 0) ||
					residency === 'id') {
			$('#vmap').vectorMap('set', 'colors', {id: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {id: illegalFill});
		}
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
		if(permitsOwned.includes('la')) {
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
			$('#vmap').vectorMap('set', 'colors', {mi: permittedFill});
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
