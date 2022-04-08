

function leftRotate(arr, n, k){
	
	let mod = k % n;


	for (let i = 0; i < n; i++)
		console.log((arr[(mod + i) % n]) + " ");

	console.log("\n");
}


let arr = [ 1,2,3,4,5,6,7 ];
let n = arr.length;

let k = 2;

leftRotate(arr, n, k);
console.log("\n");



k = 3;

leftRotate(arr, n, k);
console.log("\n");

