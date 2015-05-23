/*
    Example:

    input	    output
    256	        652
    123.45	    54.321
*/

function reverseNumber(){
    var input = document.getElementById("input-second-task").value,
        result,
        inputAsNum,
        reversedNegativeNum;

    if(parseFloat(input)){
        inputAsNum = parseFloat((input));
        if(inputAsNum < 0) {
           reversedNegativeNum = reverseString(input);
            result = "-" + reversedNegativeNum.substring(0, reversedNegativeNum.length-1);
        } else {
            result = reverseString(input);
        }
    } else {
        result = "Invalid input";
    }

    document.getElementById("result-second-task").innerText = "Result: " + result;
    console.log("REVERSE NUMBER:", result);

    function reverseString(str) {
        var reversed = "",
            strLength = str.length-1;

        for(var i = strLength; i >= 0; i--){
            reversed += str[i];
        }

        return reversed;
    }
}
