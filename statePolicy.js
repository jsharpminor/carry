	function updateCarryInfo() {

		function findOne (haystack, arr) {
			return arr.some(function (v) {
				return haystack.indexOf(v) >= 0;
			});
		}

		var over21 = $('input[name=q21]:checked').val();
		var residency = $('#residency').val();
		var citizen = $('input[name=citizen]:checked').val();
		var permits = $('input[name=permits]:checked').map(function () {
			return $(this).val();
		}).get();
		var illegalFill = '#cc0000';
		var permittedFill = '#009933';

/*		console.log("Age:" + over21);
		console.log("Residency: " + residency);
		console.log("Citizenship: " + citizen);
		console.log("Permits owned: " + permits);
		console.log("# Permits owned: " + permits.length); */

		///Alabama
		if(permits.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {al: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {al: illegalFill});
		}
		///Alaska
		if(citizen === 'usCitizen' && over21 === 'over21') {
			$('#vmap').vectorMap('set', 'colors', {ak: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ak: illegalFill});
		}
		///Arizona
		if(citizen === 'usCitizen' && over21 === 'over21') {
			$('#vmap').vectorMap('set', 'colors', {az: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {az: illegalFill});
		}
		///Arkansas
		if(permits.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {ar: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ar: illegalFill});
		}
		///California
		if(permits.includes('ca') && residency === 'ca') {
			$('#vmap').vectorMap('set', 'colors', {ca: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ca: illegalFill});
		}
		///Colorado
		if ((permits.includes('al') && residency === 'al') ||
			(permits.includes('ak') && residency === 'ak') || 
			(permits.includes('az') && residency === 'az') || 
			(permits.includes('ar') && residency === 'ar') || 
			(permits.includes('co') && residency === 'co') || 
			(permits.includes('de') && residency === 'de') || 
			(permits.includes('fl') && residency === 'fl') || 
			(permits.includes('ga') && residency === 'ga') || 
			(permits.includes('id') && residency === 'id') || 
			(permits.includes('in') && residency === 'in') || 
			(permits.includes('ia') && residency === 'ia') || 
			(permits.includes('ks') && residency === 'ks') || 
			(permits.includes('ky') && residency === 'ky') || 
			(permits.includes('la') && residency === 'la') || 
			(permits.includes('mi') && residency === 'mi') || 
			(permits.includes('ms') && residency === 'ms') || 
			(permits.includes('mo') && residency === 'mo') || 
			(permits.includes('mt') && residency === 'mt') || 
			(permits.includes('ne') && residency === 'ne') || 
			(permits.includes('nh') && residency === 'nh') || 
			(permits.includes('nm') && residency === 'nm') || 
			(permits.includes('nc') && residency === 'nc') || 
			(permits.includes('nd') && residency === 'nd') || 
			(permits.includes('oh') && residency === 'oh') || 
			(permits.includes('ok') && residency === 'ok') || 
			(permits.includes('pa') && residency === 'pa') || 
			(permits.includes('sd') && residency === 'sd') || 
			(permits.includes('tn') && residency === 'tn') || 
			(permits.includes('tx') && residency === 'tx') || 
			(permits.includes('ut') && residency === 'ut') || 
			(permits.includes('va') && residency === 'va') || 
			(permits.includes('wv') && residency === 'wv') || 
			(permits.includes('wi') && residency === 'wi') || 
			(permits.includes('wy') && residency === 'wy')) {
			$('#vmap').vectorMap('set', 'colors', {co: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {co: illegalFill});
		}
		///Connecticut
		if(permits.includes('ct')) {
			$('#vmap').vectorMap('set', 'colors', {ct: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ct: illegalFill});
		}
		///Delaware
		if (findOne(['ak', 'ar', 'az', 'co', 'de', 'fl', 'id', 'ky', 'me', 'mi',
					 'mo', 'nm', 'nc', 'nd', 'oh', 'ok', 'sd', 'tn', 'tx', 'ut',
					 'wv'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {de: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {de: illegalFill});
		}
		///District of Columbia
		if(permits.includes('dc')) {
			$('#vmap').vectorMap('set', 'colors', {dc: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {dc: illegalFill});
		}
		///Florida
		if ((permits.includes('al') && residency === 'al') ||
			(permits.includes('ak') && residency === 'ak') || 
			(permits.includes('az') && residency === 'az') || 
			(permits.includes('ar') && residency === 'ar') || 
			(permits.includes('co') && residency === 'co') || 
			(permits.includes('de') && residency === 'de') || 
			(permits.includes('fl')) || 
			(permits.includes('ga') && residency === 'ga') || 
			(permits.includes('id') && residency === 'id') || 
			(permits.includes('in') && residency === 'in') || 
			(permits.includes('ia') && residency === 'ia') || 
			(permits.includes('ks') && residency === 'ks') || 
			(permits.includes('ky') && residency === 'ky') || 
			(permits.includes('la') && residency === 'la') || 
			(permits.includes('me') && residency === 'me') || 
			(permits.includes('mi') && residency === 'mi') || 
			(permits.includes('ms') && residency === 'ms') || 
			(permits.includes('mo') && residency === 'mo') || 
			(permits.includes('mt') && residency === 'mt') || 
			(permits.includes('ne') && residency === 'ne') || 
			(permits.includes('nv') && residency === 'nv') || 
			(permits.includes('nh') && residency === 'nh') || 
			(permits.includes('nm') && residency === 'nm') || 
			(permits.includes('nc') && residency === 'nc') || 
			(permits.includes('nd') && residency === 'nd') || 
			(permits.includes('oh') && residency === 'oh') || 
			(permits.includes('ok') && residency === 'ok') || 
			(permits.includes('pa') && residency === 'pa') || 
			(permits.includes('sc') && residency === 'sc') || 
			(permits.includes('sd') && residency === 'sd') || 
			(permits.includes('tn') && residency === 'tn') || 
			(permits.includes('tx') && residency === 'tx') || 
			(permits.includes('ut') && residency === 'ut') || 
			(permits.includes('va') && residency === 'va') || 
			(permits.includes('wv') && residency === 'wv') || 
			(permits.includes('wy') && residency === 'wy')) {
			$('#vmap').vectorMap('set', 'colors', {fl: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {fl: illegalFill});
		}
		///Georgia
		if (findOne(['al', 'ak', 'az', 'ar', 'co', 'fl', 'ga', 'id', 'ia', 'in',
					 'ks', 'ky', 'la', 'me', 'mi', 'mo', 'ms', 'mt', 'nh', 'nc',
					 'nd', 'oh', 'ok', 'pa', 'sc', 'sd', 'tn', 'tx', 'ut', 'wi',
					 'wv', 'wy'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {ga: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ga: illegalFill});
		}
		///Hawaii
		if(permits.includes('hi')) {
			$('#vmap').vectorMap('set', 'colors', {hi: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {hi: illegalFill});
		}
		///Idaho
		if(permits.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {id: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {id: illegalFill});
		}
		///Illinois
		if(permits.includes('il')) {
			$('#vmap').vectorMap('set', 'colors', {il: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {il: illegalFill});
		}
		///Indiana
		if(permits.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {in: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {in: illegalFill});
		}
		///Iowa
		if(permits.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {ia: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ia: illegalFill});
		}
		///Kansas
		if(citizen === 'usCitizen' && over21 === 'over21') {
			$('#vmap').vectorMap('set', 'colors', {ks: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ks: illegalFill});
		}
		///Kentucky
		if(permits.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {ky: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ky: illegalFill});
		}
		///Louisiana
		if (findOne(['al', 'ak', 'az', 'ar', 'co', 'fl', 'ga', 'id', 'ia', 'in',
					 'ks', 'ky', 'la', 'me', 'mi', 'mo', 'ms', 'mn', 'mt', 'ne',
					 'nv', 'nh', 'nm', 'nc', 'nd', 'oh', 'ok', 'pa', 'sc', 'sd',
					 'tn', 'tx', 'ut', 'va', 'wa', 'wi', 'wv', 'wy'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {la: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {la: illegalFill});
		}
		///Maine
		if(citizen === 'usCitizen' && over21 === 'over21') {
			$('#vmap').vectorMap('set', 'colors', {me: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {me: illegalFill});
		}
		///Maryland
		if(permits.includes('md')) {
			$('#vmap').vectorMap('set', 'colors', {md: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {md: illegalFill});
		}
		///Massachusetts
		if(permits.includes('ma')) {
			$('#vmap').vectorMap('set', 'colors', {ma: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ma: illegalFill});
		}
		///Michigan
		if(permits.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {mi: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {mi: illegalFill});
		}
		///Minnesota
		if (findOne(['ar', 'de', 'id', 'il', 'ks', 'ky', 'la', 'mi', 'mn', 'nv',
					 'nj', 'nm', 'nd', 'ri', 'sc', 'sd'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {mn: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {mn: illegalFill});
		}
		///Mississippi
		if(citizen === 'usCitizen' && over21 === 'over21') {
			$('#vmap').vectorMap('set', 'colors', {ms: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ms: illegalFill});
		}
		///Missouri
		if(citizen === 'usCitizen' && (over21 === 'over18') || (over21 === 'over21')) {
			$('#vmap').vectorMap('set', 'colors', {mo: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {mo: illegalFill});
		}
		///Montana
		if (findOne(['al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'fl', 'ga', 'id',
					 'il', 'in', 'ia', 'ks', 'ky', 'la', 'md', 'ma', 'mi', 'mn',
					 'mo', 'ms', 'mt', 'ne', 'nv', 'nj', 'nm', 'ny', 'nc', 'nd',
					 'oh', 'ok', 'or', 'pa', 'sc', 'sd', 'tn', 'tx', 'ut', 'va',
					 'wa', 'wi', 'wv', 'wy'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {mt: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {mt: illegalFill});
		}
		///Nebraska
		if (findOne(['ak', 'az', 'ar', 'ca', 'co', 'ct', 'dc', 'fl', 'hi', 'id',
					 'ia', 'il', 'ks', 'ky', 'la', 'me', 'mi', 'mn', 'mo', 'mt',
					 'ne', 'nv', 'nj', 'nm', 'nc', 'nd', 'oh', 'ok', 'or', 'ri',
					 'sc', 'sd', 'tn', 'tx', 'ut', 'va', 'wa', 'wi', 'wv',
					 'wy'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {ne: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ne: illegalFill});
		}
		///Nevada
		if (findOne(['ak', 'az', 'ar', 'fl', 'id', 'il', 'ks', 'ky', 'la', 'ma',
					 'mi', 'mn', 'ms', 'mt', 'ne', 'nv', 'nm', 'nc', 'nd', 'oh',
					 'ok', 'sc', 'sd', 'tn', 'tx', 'ut', 'va', 'wi', 'wv',
					 'wy'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {nv: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {nv: illegalFill});
		}
		///New Hampshire
		if(citizen === 'usCitizen') {
			$('#vmap').vectorMap('set', 'colors', {nh: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {nh: illegalFill});
		}
		///New Jersey
		if(permits.includes('nj')) {
			$('#vmap').vectorMap('set', 'colors', {nj: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {nj: illegalFill});
		}
		///New Mexico
		if (findOne(['ak', 'az', 'ar', 'co', 'de', 'fl', 'id', 'ks', 'la', 'mi',
					 'mi', 'ms', 'mo', 'ne', 'nv', 'nm', 'nc', 'nd', 'oh',
					 'ok', 'sc', 'tn', 'tx', 'va', 'wv', 'wy'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {nm: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {nm: illegalFill});
		}
		///New York
		if(permits.includes('ny')) {
			$('#vmap').vectorMap('set', 'colors', {ny: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ny: illegalFill});
		}
		///North Carolina
		if(permits.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {nc: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {nc: illegalFill});
		}
		///North Dakota
		if (findOne(['al', 'ak', 'az', 'ar', 'co', 'de', 'fl', 'ga', 'id', 'in',
					 'ia', 'ks', 'ky', 'la', 'me', 'mi', 'mn', 'mo', 'ms', 'mt',
					 'ne', 'nv', 'nh', 'nm', 'nc', 'nd', 'oh', 'ok', 'pa', 'sc',
					 'sd', 'tn', 'tx', 'ut', 'va', 'wa', 'wv', 'wi',
					 'wy'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {nd: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {nd: illegalFill});
		}
		///Ohio
		if(permits.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {oh: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {oh: illegalFill});
		}
		///Oklahoma
		if((permits.length > 0) || 
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
		if(permits.includes('or')) {
			$('#vmap').vectorMap('set', 'colors', {or: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {or: illegalFill});
		}
		///Pennsylvania
		if (findOne(['ak', 'az', 'ar', 'co', 'fl', 'ga', 'in', 'ia', 'ks', 'ky',
					 'la', 'mi', 'ms', 'mo', 'mt', 'nc', 'nd', 'oh', 'ok', 'pa', 
					 'sd', 'tn', 'tx', 'ut', 'va', 'wv', 'wi', 'wy'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {pa: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {pa: illegalFill});
		}
		///Rhode Island
		if(permits.includes('ri')) {
			$('#vmap').vectorMap('set', 'colors', {ri: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ri: illegalFill});
		}
		///South Carolina
		if ((permits.includes('ak') && residency === 'ak') || 
			(permits.includes('az') && residency === 'az') || 
			(permits.includes('ar') && residency === 'ar') || 
			(permits.includes('fl') && residency === 'fl') || 
			(permits.includes('ga') && residency === 'ga') || 
			(permits.includes('in') && residency === 'in') || 
			(permits.includes('ia') && residency === 'ia') || 
			(permits.includes('ks') && residency === 'ks') || 
			(permits.includes('ky') && residency === 'ky') || 
			(permits.includes('la') && residency === 'la') || 
			(permits.includes('mi') && residency === 'mi') || 
			(permits.includes('ms') && residency === 'ms') || 
			(permits.includes('mo') && residency === 'mo') || 
			(permits.includes('nm') && residency === 'nm') || 
			(permits.includes('nc') && residency === 'nc') || 
			(permits.includes('nd') && residency === 'nd') || 
			(permits.includes('oh') && residency === 'oh') || 
			(permits.includes('ok') && residency === 'ok') || 
			(permits.includes('sc')) || 
			(permits.includes('sd') && residency === 'sd') || 
			(permits.includes('tn') && residency === 'tn') || 
			(permits.includes('tx') && residency === 'tx') || 
			(permits.includes('va') && residency === 'va') || 
			(permits.includes('wv') && residency === 'wv') || 
			(permits.includes('wi') && residency === 'wi') || 
			(permits.includes('wy') && residency === 'wy')) {
			$('#vmap').vectorMap('set', 'colors', {sc: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {sc: illegalFill});
		}
		///South Dakota
		if(permits.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {sd: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {sd: illegalFill});
		}
		///Tennessee
		if(permits.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {tn: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {tn: illegalFill});
		}
		///Texas
		if (findOne(['al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'de', 'fl', 'ga',
					 'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'md', 'ma',
					 'mi', 'mo', 'ms', 'mt', 'ne', 'nv', 'nj', 'nm', 'ny', 'nc',
					 'nd', 'oh', 'ok', 'pa', 'ri', 'sc', 'sd', 'tn', 'tx', 'ut',
					 'va', 'wv', 'wy'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {tx: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {tx: illegalFill});
		}
		///Utah
		if(permits.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {ut: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ut: illegalFill});
		}
		///Vermont
		$('#vmap').vectorMap('set', 'colors', {vt: permittedFill});
		///Virginia
		if(permits.length > 0) {
			$('#vmap').vectorMap('set', 'colors', {va: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {va: illegalFill});
		}
		///Washington
		if (findOne(['id', 'ks', 'la', 'mi', 'nc', 'nd', 'oh', 'ok', 'ut',
					 'wa'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {wa: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {wa: illegalFill});
		}
		///West Virginia
		if(citizen === 'usCitizen' && over21 === 'over21') {
			$('#vmap').vectorMap('set', 'colors', {wv: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {wv: illegalFill});
		}
		///Wisconsin
		if (findOne(['al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'ga', 'hi', 'id',
					 'il', 'in', 'ia', 'ks', 'ky', 'la', 'md', 'ma', 'mi', 'mn',
					 'mo', 'ms', 'mt', 'ne', 'nv', 'nm', 'ny', 'nc', 'nd', 'oh',
					 'pa', 'PR', 'sc', 'sd', 'tn', 'tx', 'ut', 'va', 'VI', 'wa',
					 'wv', 'wi', 'wy'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {wi: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {wi: illegalFill});
		}
		///Wyoming
		if((residency === 'wy') || permits.length > 0)
		{
			$('#vmap').vectorMap('set', 'colors', {wy: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {wy: illegalFill});
		}
	}
