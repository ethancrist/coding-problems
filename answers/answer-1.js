/**
 * @title Coding Problem #1
 * @mailinglist dailycodingproblem.com
 * @totaltime ~2 mins (untimed)
 * @author ethancrist
 **/

// Foreword: The bonus mentions doing this in "one pass". Not sure what this meant.
//           Originally I thought they meant one loop? Will leave my original answer as is.
function checkResult(list, k) {
    // First, we are linking through each number in the list to select one.
    for (let i = 0, len = list.length; i < len; i++) {
        // Now that we are ready to select one, comparing it with every other number in the list.
        for (let j = 0; j < len; j++) {
            // If this number + any other number in the list == k, then result is true.
            if (list[i]+list[j] == k) return true
        }
    };

    // We've made it this far, which means none of the two numbers == k.
    return false
};

// Passing through our list and k as parameters
checkResult([ 10, 15, 3, 7 ], 17);
