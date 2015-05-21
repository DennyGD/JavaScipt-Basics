//Write a script that compares two char arrays lexicographically (letter by letter).
(function () {
    var firstArray = ["a", "!", "c", "d"],
        secondArray = ["a", "!", "c", "d"],
        firstString,
        secondString;

    firstString = firstArray.join("");
    secondString = secondArray.join("");

    console.log("LEXICOGRAPHIC COMPARISON:");
    console.log("Array 1: ", firstArray);
    console.log("Array 2: ", secondArray);
    console.log("Equal ? ", firstString === secondString);

    firstArray = [",", "c", "o", "f", "f", "e", "e"];
    secondArray = [",", "c", "o", "f", "f", "e", "."];

    console.log("Array 1: ", firstArray);
    console.log("Array 2: ", secondArray);
    console.log("Equal ? ", compareCharArrays(firstArray, secondArray));

    function compareCharArrays(firstArray, secondArray) {
        if (firstArray.length !== secondArray.length || firstArray.length === 0) {
            return false;
        }

        var arrLength = firstArray.length;

        for (var i = 0; i < arrLength; i++) {
            if (firstArray[i] !== secondArray[i]) {
                return false;
            }
        }

        return true;
    }
}());