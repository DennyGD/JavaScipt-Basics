//  Write a function that counts how many times given number appears in given array.
//  Write a test function to check if the function is working correctly.

(function () {
    var numbers = [10, 5, -1, 0, 45, 10, -5, 5, 3.5, 10.1, 10],
        wantedNumber = 10,
        count;

    count = countNumberAppearances(numbers, wantedNumber);

    console.log("APPEARANCE COUNT:");
    console.log(numbers);
    console.log(wantedNumber + " -> " + count + " time(s)");

    testCountNumberAppearances();

    function countNumberAppearances(arr, num){
        if (!Array.isArray(arr) || typeof num !== "number") {
            return -1;
        }

        var arrLength = arr.length,
            count = 0;

        for (var i = 0; i < arrLength; i++) {
            if (num === arr[i]) {
                count++;
            }
        }

        return count;
    }

    function testCountNumberAppearances(){
        var actualResult,
            expectedResult;

        // some standard case
        actualResult = countNumberAppearances([1, 1000, -1.1, 0, 5, -1.1, 1.1, 15, 1, -1.1], -1.1);
        expectedResult = 3;
        console.assert(actualResult === expectedResult, "standard case");

        // pass an empty array
        actualResult = countNumberAppearances([], 1);
        expectedResult = 0;
        console.assert(actualResult === expectedResult, "pass an empty array");

        // pass string as second argument
        actualResult = countNumberAppearances([5, 10, 15, 20, 5, 25], "5");
        expectedResult = -1;
        console.assert(actualResult === expectedResult, "pass string as second argument");

        // search for nonexistent number
        actualResult = countNumberAppearances([5, 10, 15, 20, 5, 25], 10.1)
        expectedResult = 0;
        console.assert(actualResult === expectedResult, "search for nonexistent number");

        // mixed array
        actualResult = countNumberAppearances([-56, -5.6, 0, -100, "-5.6", 5.6, 11, -0, 56], -5.6);
        expectedResult = 1;
        console.assert(actualResult === expectedResult, "mixed array");

        // search for zero
        actualResult = countNumberAppearances([1.1, 1, -0, -0.1, 0.1, 0, -0, -1, -0], 0);
        expectedResult = 4;
        console.assert(actualResult === expectedResult, "search for 0");
    }
}());

//  https://developer.mozilla.org/en-US/docs/Web/API/console/assert