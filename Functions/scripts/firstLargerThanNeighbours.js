/*
    Write a function that returns the index of the first element in array that is larger than its neighbours or -1,
    if there’s no such element.
    Use the function from the previous exercise.
*/

(function () {
    var someNumbers = [10, 9, 11, 30, 35, 100, 45, 55, 45],
        resultIndex;

    resultIndex = firstLargerThanNeighbours(someNumbers);

    console.log("FIRST LARGER THAN NEIGHBOURS:");
    console.log(someNumbers);
    console.log("index -> " + resultIndex);

    function firstLargerThanNeighbours(numbersArr){
        if (!Array.isArray(numbersArr) || numbersArr.length < 3) {
            return -1;
        }

        var arrLength = numbersArr.length;

        for (var i = 1; i < arrLength-2; i++ ) {
            if (isLargerThanNeighbours(numbersArr, i) === true) {
                return i;
            }
        }

        return -1;
    }

}());