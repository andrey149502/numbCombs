function sumIs10(arr) {
	var sum = 0;	

	arr.forEach(function(elem) {
		sum += elem;
	});

	if (sum == 10) {
		return true
	}

	return false;
}

function makeAllCombs(arr) {
	var combs = [];

	for (var i = 1; i <= arr.length ; i++) {
		combs = combs.concat(nDigitComb(arr, i));
	}

	return combs;
}

function combs10(arr) {
	var result = [];
	var combs = makeAllCombs(arr);

	for (var i = 0; i < combs.length; i++) {
		if(sumIs10(combs[i])) {
			result.push(combs[i]);
		}
	}

	return result;
}

function nDigitComb(arr, n) {

	var counters = [];

	for (var i = 0; i < n; i++) {
		counters.push(i);
	}


	var result = [];

	do {
		var comb = [];

		for (var i = 0; i < n; i++) {
			comb.push(arr[counters[i]]);
		}

		result.push(comb);

	}
	while(counterInc(counters, arr.length));

	return result;
}


function counterInc(counters, limit) {

	for (var i = counters.length - 1; i >= 0; --i, --limit) {
		if (counters[i] + 1  != limit) { // 
			counters[i]++;
			return true;	
		}
	}

	return false;
}