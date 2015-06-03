//  Write a function that replaces non breaking white-spaces in a text with &nbsp;
//"The substring() method returns a subset of a string between one index and another, or through the end of the string."
(function () {
    var text = "The substring() method returns a subset of a string between one index and another, or through the end of the string.",
        editedText = replaceAll(text, " ", "&nbsp;");

    console.log("NBSP");
    console.log("original text:");
    console.log(text);
    console.log("edited text:");
    console.log(editedText);
}());

function replaceAll(string, target, replacement){
    if (!string || !target || !replacement) {
        return "Incorrect value passed.";
    }

    var strLen = string.length,
        targetLen = target.length,
        index = string.indexOf(target),
        startIndex = 0,
        position,
        result = "";

    while (index > -1) {
        result += string.substring(startIndex, index) + replacement;
        position = index + targetLen;
        startIndex = index + targetLen;

        if (position >= strLen-1) {
            break;
        }

        index = string.indexOf(target, position);
    }

    return result += string.substring(startIndex);
}
