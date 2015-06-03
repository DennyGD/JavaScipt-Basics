/*
You are given a text. Write a function that changes the text in all regions:

<upcase>text</upcase> to uppercase.
<lowcase>text</lowcase> to lowercase
<mixcase>text</mixcase> to mix casing(random)

Example:
We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>.
We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.

The expected result:
We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.

Note: Regions can be nested.
*/

(function () {
    var text = "We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.",
        editedText = changeText(text);

    console.log("PARSE TAGS");
    console.log(text);
    console.log(editedText);

    function changeText(text) {
        if (!text) {
            return "Null, undefined or empty value.";
        }

        var indClosingTagStart = text.indexOf('</'),
            indClosingTagEnd,
            currentTag,
            strToEdit,
            indOpeningTagStart,
            indOpeningTagEnd;

        while (indClosingTagStart > -1) {
            indClosingTagEnd = text.indexOf('>', indClosingTagStart + 2);
            currentTag = text.substring(indClosingTagStart + 2, indClosingTagEnd);

            indOpeningTagEnd = text.lastIndexOf('>', indClosingTagStart - 1);
            indOpeningTagStart = text.lastIndexOf('<', indOpeningTagEnd - 1);

            strToEdit = text.substring(indOpeningTagEnd + 1, indClosingTagStart);

            switch (currentTag) {
                case 'mixcase':
                    strToEdit = mixIt(strToEdit); break;
                case 'upcase':
                    strToEdit = strToEdit.toUpperCase(); break;
                case 'lowcase':
                    strToEdit = strToEdit.toLowerCase(); break;
            }

            text = text.substring(0, indOpeningTagStart) + strToEdit + text.substring(indClosingTagEnd + 1);
            indClosingTagStart = text.indexOf('</');
        }

        return text;
    }

    function mixIt(str){
        if (!str) {
            return "Null, undefined or empty value.";
        }

        var strLength = str.length,
            mixed = "",
            isUpper,
            currentChar;

        for (var i = 0; i < strLength; i += 1) {
            isUpper = getRandomBool();

            if (isUpper === true) {
                currentChar = str[i].toUpperCase();
            } else {
                currentChar = str[i].toLowerCase();
            }

            mixed += currentChar;
        }

        return mixed;
    }

    function getRandomBool(){
        return Boolean(Math.floor(Math.random() * 2));
    }

}());

//  Random bool value generation -> https://triangle717.wordpress.com/2014/10/02/js-randomly-generate-a-boolean-value/
//  !!Math.floor(Math.random() * 2) is actually faster