/*
Write a function for extracting all email addresses from given text.
All sub-strings that match the format @… should be recognized as emails.
Return the emails as array of strings.
*/

(function(){
    var text = "cellymonnyga-3695@yopmail.com , pleaseWork@abv.bg notAn e-mail address JohnDoe@yahoo.com EricJFarkas@armyspy.com. jAneDoe@gmail.com sunny day.great",
        emails = extractEmails(text);

    console.log("EXTRACT E-MAILS");
    console.log("input: " + text);
    console.log("output: " + emails);

    function extractEmails(string){
        if (!string) {
            return "Null, undefined or empty string.";
        }

        var pattern = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/gi,
            extractedMails = string.match(pattern);

        return extractedMails;
    }
}());