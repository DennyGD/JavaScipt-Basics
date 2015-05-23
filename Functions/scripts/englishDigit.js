/*
Write a function that returns the last digit of given integer as an English word.
    Examples:

input	    output
512	        two
1024	    four
12309	    nine*/

function englishDigit(){
    var input = document.getElementById("input-first-task").value,
        result,
        lastDigit;

    if ((isFinite(input) === false) || (isInt(input) === false)) {
        result = "Invalid input";
    } else {
        lastDigit = parseInt(input[input.length-1]);
        result = convertDigitToAWord(lastDigit);
    }

    document.getElementById("result-first-task").innerText = "Result: " + result;
    console.log("ENGLISH DIGIT:", result);

    function convertDigitToAWord(digit) {
        switch (digit) {
            case 0: return "Zero";
            case 1: return "One";
            case 2: return "Two";
            case 3: return "Three";
            case 4: return "Four";
            case 5: return "Five";
            case 6: return "Six";
            case 7: return "Seven";
            case 8: return "Eight";
            case 9: return "Nine";
            default: return "Not a digit";
        }
    }

    function isInt(number){
        return number % 1 === 0 ? true : false;
    }
};