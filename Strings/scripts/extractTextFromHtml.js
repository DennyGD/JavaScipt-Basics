/*
Write a function that extracts the content of a html page given as text.
The function should return anything that is in a tag, without the tags.

 Example:

 <html>
 <head>
 <title>Sample site</title>
 </head>
 <body>
 <div>text
 <div>more text</div>
 and more...
 </div>
 in body
 </body>
 </html>

 Result: Sample sitetextmore textand more...in body
*/

(function(){
    var htmlCode = "<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body </body></html>",
        extractedText = replaceTags(htmlCode);

    console.log("EXTRACT TEXT FROM HTML");
    console.log(htmlCode);
    console.log("extracted text: " + extractedText);

    function replaceTags(string){
        if (!string) {
            return "Null, undefined or empty string.";
        }

        var strLength = string.length,
            indOpeningBracket = string.indexOf("<"),
            indClosingBracket = string.indexOf(">"),
            currentTag;

        while (indOpeningBracket > -1) {
            currentTag = string.substring(indOpeningBracket, indClosingBracket + 1);
            string = string.replace(currentTag, "");
            indOpeningBracket = string.indexOf("<");
            indClosingBracket = string.indexOf(">");
        }

        return string;
    }
}());
