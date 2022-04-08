

// Javascript implementation of the approach

// Function to return the count
// of N-digit palindrome numbers
function nDigitPalindromes(n)
{
	return (5 * Math.pow(1, parseInt((n - 1) / 2)));
}


var n = 5;
console.log(nDigitPalindromes(n));


