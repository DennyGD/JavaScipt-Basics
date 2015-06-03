/*
Write a JavaScript function to check if in a given expression the brackets are put correctly.
Example of correct expression: ((a+b)/5-d).
Example of incorrect expression: )(a+b)).
*/

(function(){
    var firstExpression = "((a+b)/5-d)",
        secondExpression = ")(a+b))";

    console.log("CORRECT BRACKETS");
    console.log(firstExpression + ": " + bracketsAreCorrect(firstExpression));
    console.log(secondExpression + ": " + bracketsAreCorrect(secondExpression));

    function bracketsAreCorrect(string){
        if (!string) {
            return false;
        }

        var openingBrackets = getCharCount(string, "("),
            closingBrackets = getCharCount(string, ")");

        if ((openingBrackets === closingBrackets) && (string.indexOf("(") < string.indexOf(")"))
        && (string.lastIndexOf(")") > string.lastIndexOf("("))) {
            return true;
        }

        return false;
    }

    function getCharCount(string, char){
        var strLength = string.length,
            charCount = 0;

        for (var i = 0; i < strLength; i++) {
            if (char === string[i]) {
                charCount++;
            }
        }

        return charCount;
    }
}());