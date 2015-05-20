//  Write a script that finds the maximal sequence of equal elements in an array.
//  Example:
//  input	                            result
//  2, 1, 1, 2, 3, 3, 2, 2, 2, 1	    2, 2, 2

var numbers = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1],
    booleans = [true, false, true, false, false];

console.log("MAXIMAL SEQUENCE:");
console.log(numbers);
console.log(getMaxSequence(numbers));
console.log(booleans);
console.log(getMaxSequence(booleans));

function getMaxSequence(arr) {
    var result,
        arrLength = arr.length,
        currentElement,
        winningElement,
        currentCount = 1,
        maxCount = 0;

    if (arrLength === 0) {
        result = "Empty array";
        return result;
    }

    for (var i = 0; i < arrLength-1; i++) {
        currentElement = arr[i];
        if (currentElement != null && currentElement !== "") {
            if (currentElement === arr[i + 1]) {
                currentCount++;
            } if (currentElement !== arr[i + 1] || i === arrLength-2) {
                if (currentCount > maxCount) {
                    maxCount = currentCount;
                    winningElement = currentElement;
                }
                currentCount = 1;
            }
        }
    }

    maxCount === 0 ? result = "Empty variables" : result = `${winningElement} -> ${maxCount} time(s)`;
    return result;
}

//  https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings
//  http://stackoverflow.com/questions/5515310/is-there-a-standard-function-to-check-for-null-undefined-or-blank-variables-in