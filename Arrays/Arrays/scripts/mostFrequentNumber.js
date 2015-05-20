//  Write a script that finds the most frequent number in an array.
//  Example:
//  input	                                    result
//  4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3	    4 (5 times)

var arrOfNumbers = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
    sortedNumbers = [];

// in order to keep the original array, make a copy to be sorted
for (var i = 0; i < arrOfNumbers.length; i++) {
    sortedNumbers[i] = arrOfNumbers[i];
}

sortedNumbers.sort()

console.log("MOST FREQUENT NUMBER");
console.log(arrOfNumbers);
console.log(getMaxSequence(sortedNumbers));

