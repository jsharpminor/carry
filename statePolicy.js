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
		var illegalFill = '#ff0000';
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
		if(permits.includes('CA') && residency === 'CA') {
			$('#vmap').vectorMap('set', 'colors', {ca: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ca: illegalFill});
		}
		///Colorado
		if ((permits.includes('AL') && residency === 'AL') ||
			(permits.includes('AK') && residency === 'AK') || 
			(permits.includes('AZ') && residency === 'AZ') || 
			(permits.includes('AR') && residency === 'AR') || 
			(permits.includes('CO') && residency === 'CO') || 
			(permits.includes('DE') && residency === 'DE') || 
			(permits.includes('FL') && residency === 'FL') || 
			(permits.includes('GA') && residency === 'GA') || 
			(permits.includes('ID') && residency === 'ID') || 
			(permits.includes('IN') && residency === 'IN') || 
			(permits.includes('IA') && residency === 'IA') || 
			(permits.includes('KS') && residency === 'KS') || 
			(permits.includes('KY') && residency === 'KY') || 
			(permits.includes('LA') && residency === 'LA') || 
			(permits.includes('MI') && residency === 'MI') || 
			(permits.includes('MS') && residency === 'MS') || 
			(permits.includes('MO') && residency === 'MO') || 
			(permits.includes('MT') && residency === 'MT') || 
			(permits.includes('NE') && residency === 'NE') || 
			(permits.includes('NH') && residency === 'NH') || 
			(permits.includes('NM') && residency === 'NM') || 
			(permits.includes('NC') && residency === 'NC') || 
			(permits.includes('ND') && residency === 'ND') || 
			(permits.includes('OH') && residency === 'OH') || 
			(permits.includes('OK') && residency === 'OK') || 
			(permits.includes('PA') && residency === 'PA') || 
			(permits.includes('SD') && residency === 'SD') || 
			(permits.includes('TN') && residency === 'TN') || 
			(permits.includes('TX') && residency === 'TX') || 
			(permits.includes('UT') && residency === 'UT') || 
			(permits.includes('VA') && residency === 'VA') || 
			(permits.includes('WV') && residency === 'WV') || 
			(permits.includes('WI') && residency === 'WI') || 
			(permits.includes('WY') && residency === 'WY')) {
			$('#vmap').vectorMap('set', 'colors', {co: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {co: illegalFill});
		}
		///Connecticut
		if(permits.includes('CT')) {
			$('#vmap').vectorMap('set', 'colors', {ct: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ct: illegalFill});
		}
		///Delaware
		if (findOne(['AK', 'AR', 'AZ', 'CO', 'DE', 'FL', 'ID', 'KY', 'ME', 'MI',
					 'MO', 'NM', 'NC', 'ND', 'OH', 'OK', 'SD', 'TN', 'TX', 'UT',
					 'WV'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {de: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {de: illegalFill});
		}
		///District of Columbia
		if(permits.includes('DC')) {
			$('#vmap').vectorMap('set', 'colors', {dc: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {dc: illegalFill});
		}
		///Florida
		if ((permits.includes('AL') && residency === 'AL') ||
			(permits.includes('AK') && residency === 'AK') || 
			(permits.includes('AZ') && residency === 'AZ') || 
			(permits.includes('AR') && residency === 'AR') || 
			(permits.includes('CO') && residency === 'CO') || 
			(permits.includes('DE') && residency === 'DE') || 
			(permits.includes('FL') && residency === 'FL') || 
			(permits.includes('GA') && residency === 'GA') || 
			(permits.includes('ID') && residency === 'ID') || 
			(permits.includes('IN') && residency === 'IN') || 
			(permits.includes('IA') && residency === 'IA') || 
			(permits.includes('KS') && residency === 'KS') || 
			(permits.includes('KY') && residency === 'KY') || 
			(permits.includes('LA') && residency === 'LA') || 
			(permits.includes('ME') && residency === 'ME') || 
			(permits.includes('MI') && residency === 'MI') || 
			(permits.includes('MS') && residency === 'MS') || 
			(permits.includes('MO') && residency === 'MO') || 
			(permits.includes('MT') && residency === 'MT') || 
			(permits.includes('NE') && residency === 'NE') || 
			(permits.includes('NV') && residency === 'NV') || 
			(permits.includes('NH') && residency === 'NH') || 
			(permits.includes('NM') && residency === 'NM') || 
			(permits.includes('NC') && residency === 'NC') || 
			(permits.includes('ND') && residency === 'ND') || 
			(permits.includes('OH') && residency === 'OH') || 
			(permits.includes('OK') && residency === 'OK') || 
			(permits.includes('PA') && residency === 'PA') || 
			(permits.includes('SC') && residency === 'SC') || 
			(permits.includes('SD') && residency === 'SD') || 
			(permits.includes('TN') && residency === 'TN') || 
			(permits.includes('TX') && residency === 'TX') || 
			(permits.includes('UT') && residency === 'UT') || 
			(permits.includes('VA') && residency === 'VA') || 
			(permits.includes('WV') && residency === 'WV') || 
			(permits.includes('WY') && residency === 'WY')) {
			$('#vmap').vectorMap('set', 'colors', {fl: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {fl: illegalFill});
		}
		///Georgia
		if (findOne(['AL', 'AK', 'AZ', 'AR', 'CO', 'FL', 'GA', 'ID', 'IA', 'IN',
					 'KS', 'KY', 'LA', 'ME', 'MI', 'MO', 'MS', 'MT', 'NH', 'NC',
					 'ND', 'OH', 'OK', 'PA', 'SC', 'SD', 'TN', 'TX', 'UT', 'WI',
					 'WV', 'WY'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {ga: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ga: illegalFill});
		}
		///Hawaii
		if(permits.includes('HI')) {
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
		if(permits.includes('IL')) {
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
		if (findOne(['AL', 'AK', 'AZ', 'AR', 'CO', 'FL', 'GA', 'ID', 'IA', 'IN',
					 'KS', 'KY', 'LA', 'ME', 'MI', 'MO', 'MS', 'MN', 'MT', 'NE',
					 'NV', 'NH', 'NM', 'NC', 'ND', 'OH', 'OK', 'PA', 'SC', 'SD',
					 'TN', 'TX', 'UT', 'VA', 'WA', 'WI', 'WV', 'WY'], permits)) {
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
		if(permits.includes('MD')) {
			$('#vmap').vectorMap('set', 'colors', {md: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {md: illegalFill});
		}
		///Massachusetts
		if(permits.includes('MA')) {
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
		if (findOne(['AR', 'DE', 'ID', 'IL', 'KS', 'KY', 'LA', 'MI', 'MN', 'NV',
					 'NJ', 'NM', 'ND', 'RI', 'SC', 'SD'], permits)) {
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
		if(citizen === 'usCitizen' && over21 === 'over18') {
			$('#vmap').vectorMap('set', 'colors', {mo: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {mo: illegalFill});
		}
		///Montana
		if (findOne(['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'FL', 'GA', 'ID',
					 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'MD', 'MA', 'MI', 'MN',
					 'MO', 'MS', 'MT', 'NE', 'NV', 'NJ', 'NM', 'NY', 'NC', 'ND',
					 'OH', 'OK', 'OR', 'PA', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA',
					 'WA', 'WI', 'WV', 'WY'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {mt: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {mt: illegalFill});
		}
		///Nebraska
		if (findOne(['AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DC', 'FL', 'HI', 'ID',
					 'IA', 'IL', 'KS', 'KY', 'LA', 'ME', 'MI', 'MN', 'MO', 'MT',
					 'NE', 'NV', 'NJ', 'NM', 'NC', 'ND', 'OH', 'OK', 'OR', 'RI',
					 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'WA', 'WI', 'WV',
					 'WY'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {ne: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ne: illegalFill});
		}
		///Nevada
		if (findOne(['AK', 'AZ', 'AR', 'FL', 'ID', 'IL', 'KS', 'KY', 'LA', 'MA',
					 'MI', 'MN', 'MS', 'MT', 'NE', 'NV', 'NM', 'NC', 'ND', 'OH',
					 'OK', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'WI', 'WV',
					 'WY'], permits)) {
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
		if(permits.includes('NJ')) {
			$('#vmap').vectorMap('set', 'colors', {nj: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {nj: illegalFill});
		}
		///New Mexico
		if (findOne(['AK', 'AZ', 'AR', 'CO', 'DE', 'FL', 'ID', 'KS', 'LA', 'MI',
					 'MI', 'MS', 'MO', 'NE', 'NV', 'NM', 'NC', 'ND', 'OH',
					 'OK', 'SC', 'TN', 'TX', 'VA', 'WV', 'WY'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {nm: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {nm: illegalFill});
		}
		///New York
		if(permits.includes('NY')) {
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
		if (findOne(['AL', 'AK', 'AZ', 'AR', 'CO', 'DE', 'FL', 'GA', 'ID', 'IN',
					 'IA', 'KS', 'KY', 'LA', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT',
					 'NE', 'NV', 'NH', 'NM', 'NC', 'ND', 'OH', 'OK', 'PA', 'SC',
					 'SD', 'TN', 'TX', 'UT', 'VA', 'WA', 'WV', 'WI',
					 'WY'], permits)) {
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
			residency === 'AK' || 
			residency === 'AZ' || 
			residency === 'ME' || 
			residency === 'MS' || 
			residency === 'VT' || 
			residency === 'WY') {
			$('#vmap').vectorMap('set', 'colors', {ok: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ok: illegalFill});
		}
		///Oregon
		if(permits.includes('OR')) {
			$('#vmap').vectorMap('set', 'colors', {or: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {or: illegalFill});
		}
		///Pennsylvania
		if (findOne(['AK', 'AZ', 'AR', 'CO', 'FL', 'GA', 'IN', 'IA', 'KS', 'KY',
					 'LA', 'MI', 'MS', 'MO', 'MT', 'NC', 'ND', 'OH', 'OK', 'PA', 
					 'SD', 'TN', 'TX', 'UT', 'VA', 'WV', 'WI', 'WY'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {pa: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {pa: illegalFill});
		}
		///Rhode Island
		if(permits.includes('RI')) {
			$('#vmap').vectorMap('set', 'colors', {ri: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {ri: illegalFill});
		}
		///South Carolina
		if ((permits.includes('AK') && residency === 'AK') || 
			(permits.includes('AZ') && residency === 'AZ') || 
			(permits.includes('AR') && residency === 'AR') || 
			(permits.includes('FL') && residency === 'FL') || 
			(permits.includes('GA') && residency === 'GA') || 
			(permits.includes('IN') && residency === 'IN') || 
			(permits.includes('IA') && residency === 'IA') || 
			(permits.includes('KS') && residency === 'KS') || 
			(permits.includes('KY') && residency === 'KY') || 
			(permits.includes('LA') && residency === 'LA') || 
			(permits.includes('MI') && residency === 'MI') || 
			(permits.includes('MS') && residency === 'MS') || 
			(permits.includes('MO') && residency === 'MO') || 
			(permits.includes('NM') && residency === 'NM') || 
			(permits.includes('NC') && residency === 'NC') || 
			(permits.includes('ND') && residency === 'ND') || 
			(permits.includes('OH') && residency === 'OH') || 
			(permits.includes('OK') && residency === 'OK') || 
			(permits.includes('SC') && residency === 'SC') || 
			(permits.includes('SD') && residency === 'SD') || 
			(permits.includes('TN') && residency === 'TN') || 
			(permits.includes('TX') && residency === 'TX') || 
			(permits.includes('VA') && residency === 'VA') || 
			(permits.includes('WV') && residency === 'WV') || 
			(permits.includes('WI') && residency === 'WI') || 
			(permits.includes('WY') && residency === 'WY')) {
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
		if (findOne(['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
					 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'MD', 'MA',
					 'MI', 'MO', 'MS', 'MT', 'NE', 'NV', 'NJ', 'NM', 'NY', 'NC',
					 'ND', 'OH', 'OK', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
					 'VA', 'WV', 'WY'], permits)) {
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
		if (findOne(['ID', 'KS', 'LA', 'MI', 'NC', 'ND', 'OH', 'OK', 'UT',
					 'WA'], permits)) {
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
		if (findOne(['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'GA', 'HI', 'ID',
					 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'MD', 'MA', 'MI', 'MN',
					 'MO', 'MS', 'MT', 'NE', 'NV', 'NM', 'NY', 'NC', 'ND', 'OH',
					 'PA', 'PR', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'WA',
					 'WV', 'WI', 'WY'], permits)) {
			$('#vmap').vectorMap('set', 'colors', {wi: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {wi: illegalFill});
		}
		///Wyoming
		if(residency === 'WY')
		{
			$('#vmap').vectorMap('set', 'colors', {wy: permittedFill});
		} else {
			$('#vmap').vectorMap('set', 'colors', {wy: illegalFill});
		}
	}
