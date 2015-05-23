//  Write a function that checks if the element at given position in given array of integers is bigger than its
//  two neighbours (when such exist).


var numbers = [1, 1, 5, 10, 5, 15, 5],
    index = 3,
    result;

result = isLargerThanNeighbours(numbers, index);

console.log("LARGER THAN NEIGHBOURS:");
console.log(numbers);
console.log("number at index " + index + " is larger than neighbours: " + result);

function isLargerThanNeighbours(numbersArr, index){
    if (!Array.isArray(numbersArr) || typeof index !== "number" || index < 1 || index + 1 > numbersArr.length-1) {
        return false;
    }

    if (numbersArr[index] > numbersArr[index-1] && numbersArr[index] > numbersArr[index+1]) {
        return true;
    }

    return false;
}

