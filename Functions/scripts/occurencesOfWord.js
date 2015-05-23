/*
Write a function that finds all the occurrences of word in a text.
The search can be case sensitive or case insensitive.
Use function overloading.
*/

(function (){
    var text = "The JavaScript core language features are defined in a standard called ECMA-262. The language defined in this standard is called ECMAScript, of which the JavaScript in the browser and Node.js environments are a superset. While browsers and Node.js may add more capabilities through additional objects and methods, the core of the language remains as defined in ECMAScript, which is why the ongoing development of ECMA-262 is vital to the success of JavaScript as a whole.",
        wantedWord = "language",
        count;

    count = wordCount(text, wantedWord);
    console.log("OCCURENCES OF WORD:");
    console.log(`${wantedWord} -> ${count}`);

    function wordCount(text, word, caseSensitive){
        var textAsArr = [],
            arrLength;

        if (caseSensitive === undefined) {
            caseSensitive = true;
        }

        if(!text || !word || typeof caseSensitive !== "boolean"){
            return -1;
        }

        // TODO find a way to remove the last dot of the last sentence

        textAsArr = text.trim().match(/\S+/g);
        word = word.trim();
        arrLength = textAsArr.length;

        switch (caseSensitive) {
            case true: return wordCountCaseSensitive(textAsArr, word, arrLength);
            case false: return wordCountCaseInsensitive(textAsArr, word, arrLength);
        }

        function wordCountCaseSensitive(words, word, arrLength) {
            var count = 0;

            word = word.toUpperCase();

            for (var i = 0; i < arrLength; i++) {
                if (word === words[i].toUpperCase()) {
                    count++;
                }
            }

            return count;
        }

        function wordCountCaseInsensitive(words, word, arrLength){
            var count = 0;

            for (var i = 0; i < arrLength; i++) {
                if (word === words[i]) {
                    count++;
                }
            }

            return count;
        }
    }
}());

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
//  https://msdn.microsoft.com/en-us/library/bb386042.aspx -> Why toUpperCase is better
