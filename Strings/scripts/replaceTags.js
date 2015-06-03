/*
Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a>
with corresponding tags [URL=…]…/URL].
Example:
input
 <p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit
 <a href="www.devbg.org">our forum</a> to discuss the courses.</p>
 output
 <p>Please visit [URL=http://academy.telerik.com]our site[/URL] to choose a training course. Also visit
 [URL=www.devbg.org]our forum[/URL] to discuss the courses.</p>
*/

(function(){
    var input = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>',
        output = replaceLinks(input);

    console.log("REPLACE TAGS");
    console.log(input);
    console.log(output);

    function replaceLinks(string){
        if (!string) {
            return "Null, undefined or empty value.";
        }

        var indOpeningTag = string.indexOf('<a href="');

        while (indOpeningTag > -1) {
            string = string.replace('<a href="', '[URL=');
            string = string.replace('">', ']');
            string = string.replace('</a>', '[/URL]');
            indOpeningTag = string.indexOf('<a href="');
        }

        return string;
    }
}());
