let data = [{principal: 2500, time: 1.8},
			{principal: 1000, time: 5},
			{principal: 3000, time: 1},
			{principal: 2000, time: 3}];


let interestCalculator = function(x){

	let rate = 0;
	let interest = 0;
	let interestData = [];

	for(i=0; i < x.length; i++){

		if(x[i].principal >= 2500 && (x[i].time > 1 && x[i].time < 3)){
			rate = 3;
		}else if(x[i].principal >= 2500 && x[i].time >= 3){
			rate = 4;
		}else if(x[i].principal < 2500 || x[i].time <= 1){
			rate = 2;
		}else{
			rate = 1;
		}

		interest = x[i].principal * x[i].time * rate;

		interestData.push({principal: x[i].principal, rate: rate, time: x[i].time, interest: interest});

	}

	console.log(interestData);

	return interestData;

}

interestCalculator(data);
