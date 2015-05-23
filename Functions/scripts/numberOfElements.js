//Write a function to count the number of div elements on the web page

(function (){
    var wantedTag = "div",
        count;

    count = countTag(wantedTag);

    console.log("NUMBER OF ELEMENTS:");
    console.log(wantedTag + " -> " + count);

    function countTag(tag){
        if (!tag) {
            return -1;
        }

        tag = tag.toLowerCase();

        var tags = document.getElementsByTagName(tag),
            tagsLength = tags.length;

        return tagsLength;
    }
})();
