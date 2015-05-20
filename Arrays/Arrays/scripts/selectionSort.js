//  Sorting an array means to arrange its elements in increasing order.
//  Write a script to sort an array.
//  Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, 
//  move it at the second position, etc.
//  Hint: Use a second array

var arrNumbers = [10, 0, -6, 255, 1000, 3.5];
console.log("SELECTION SORT");
console.log("Unsorted array:", arrNumbers);
console.log("Sorted:", sortArray(arrNumbers));

function sortArray(arr) {
    if (arr.length === 0) {
        return "Empty array";
    }

    var minValue = Number.MAX_SAFE_INTEGER,
        currentNum,
        holdValue,
        position,
        arrLength = arr.length;

    for (var index = 0; index < arrLength; index++) {

        for (var i = index; i < arrLength; i++) {
            currentNum = arr[i];
            if (currentNum < minValue) {
                minValue = currentNum;
                position = i;
            }
        }
        holdValue = arr[index];
        arr[index] = minValue;
        arr[position] = holdValue;
        minValue = Number.MAX_SAFE_INTEGER;
    }

    return arr;
}

//  https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER