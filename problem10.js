

	
	function bitonicGenerator(arr,n)
	{
		
		let evenArr = [];
		let oddArr = [];

		
		for (let i = 0; i < n; i++) {
			if (i % 2 != 1) {
				evenArr.push(arr[i]);
			}
			else {
				oddArr.push(arr[i]);
			}
		}

		evenArr.sort(function(a,b){return a-b;});
		

		let i = 0;
		for (let j = 0; j < evenArr.length; j++) {
			arr[i++] = evenArr[j];
		}
	
	}
	
	
	let arr=[3,9,1,44,6];
	let n = arr.length;
	bitonicGenerator(arr, n);
	for (let i = 0; i < n; i++) {
		console.log(arr[i] + " ");
	}
	
	
