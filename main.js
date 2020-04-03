const data = [
			{principal: 2500, time: 1.8},
			{principal: 1000, time: 5},
			{principal: 3000, time: 1},
			{principal: 2000, time: 3}
		]

	function interestCalculator (a) {      
			let rate;
			let interest;
            let b = data.length;
            
			for (let i=0; i<b; i++){
				if (a[i].principal >= 2500 && 1 < a[i].time < 3){
					a[i].rate = 3;
				}
				else if (a[i].principal >= 2500 && a[i].time >= 3) {
					rate = 4;
					a[i].rate = 4;
				}
				else if (a[i].principal <= 2500 || a[i].time <= 1) {
					a[i].rate = 2;
				}
				else {
					a[i].rate = 1;
				}
			}

			for(let j=0; j<b; j++){
				a[j].interest = (a[j].principal * a[j].time * a[j].rate) / 100
			}
			let interestData = a;
			console.log(interestData);
			return interestData;
		}
		interestCalculator(data);
