/*
Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
Example:

The target sub-string is 'in'.

The text is as follows:
We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight.
So we are drinking all the day. We will move out of it in 5 days.

The result is: 9
*/

(function () {
    var text = "We are living in an yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.",
        target = "in",
        targetCount = getSubstringCount(text, target);

    console.log("SUBSTRING IN TEXT");
    console.log("count: " + targetCount);

    function getSubstringCount(string, substring){
        if (!string || !substring) {
            return -1;
        }

        string = string.toUpperCase();
        substring = substring.toUpperCase();

        var counter = 0,
            index = string.indexOf(substring),
            position,
            substrLength = substring.length,
            strLength = string.length;

        while (index > -1) {
            counter++;
            position = index + substrLength;
            if (position >= strLength-1) {
                break;
            }
            index = string.indexOf(substring, position);
        }

        return counter;
    }
}());