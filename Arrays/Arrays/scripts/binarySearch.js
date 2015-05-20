//  Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.

var sortedNums = [-10, -9.5, 0, 1, 5, 13, 45, 123, 567, 999],
    element = 13;

console.log("BINARY SEARCH");
console.log(sortedNums);
console.log(`Index of ${element}:`);
console.log(findIndexByBinarySearch(element, sortedNums));

function findIndexByBinarySearch(element, sortedArr) {
    if (sortedArr.length === 0 || !isFinite(element)) {
        return -1;
    }

    var start = 0,
        end = sortedArr.length - 1,
        mid = (start + end) / 2;

    Math.floor(mid);

    while (start <= end) {
        if (element > sortedArr[mid]) {
            start = mid + 1;
        } else if (element < sortedArr[mid]) {
            end = mid - 1;
        } else if (element === sortedArr[mid]) {
            return mid;
        }

        mid = Math.floor((start + end) / 2);
    }

    return -1;
}