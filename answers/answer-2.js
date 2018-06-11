/**
 * @title Coding Problem #2
 * @mailinglist dailycodingproblem.com
 * @totaltime 4m19s (bad)
 * @author ethancrist
 **/

// Redefine input to test the results.
const input = [ 1, 2, 3, 4, 5 ];
let results = [];

for (let i = 0, len = input.length; i < len; i++) {
	let result = 1;
	for (let j = 0; j < len; j++) {
    	if (i !== j) result *= input[j];
	};
	results.push(result);
};

console.log(results);
