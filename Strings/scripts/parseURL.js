/*
Write a script that parses an URL address given in the format:
[protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
Return the elements in a JSON object.

 Example:

 URL:	    http://telerikacademy.com/Courses/Courses/Details/239
 result:    { protocol: http,
             server: telerikacademy.com
            resource: /Courses/Courses/Details/239 }
*/

(function(){
    var url = new URL('http://telerikacademy.com/Courses/Courses/Details/239'),
        prot = url.protocol,
        server = url.host,
        resource = url.pathname,
        jsonObj;

    jsonObj = JSON.parse(JSON.stringify(prot));
    jsonObj += JSON.parse(JSON.stringify(server)) + JSON.parse(JSON.stringify(resource));

    console.log("PARSE URL");
    console.log(prot + "\n" + server + "\n" + resource);
}());

//  https://developer.mozilla.org/en-US/docs/Web/API/URL/URL