/*
Write a JavaScript function that reverses a string and returns it.
Example:

input	    output
sample	    elpmas
*/

(function(){
    var originalString = "): regnarts ,olleH",
        reversedString = reverseString(originalString);

    console.log("REVERSE STRING");
    console.log("original string: " + originalString);
    console.log("reversed string: " + reversedString);

    function reverseString(str) {
        var reversed = "",
            strLength = str.length-1;

        if (!str) {
            return str;
        }

        for(var i = strLength; i >= 0; i--){
            reversed += str[i];
        }

        return reversed;
    }
}());