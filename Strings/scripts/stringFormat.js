/*
Write a function that formats a string using placeholders.
The function should work with up to 30 placeholders and all types.

 var str = stringFormat('Hello {0}!', 'Peter');
 -> str = 'Hello Peter!';

 var frmt = '{0}, {1}, {0} text {2}';
 var str = stringFormat(frmt, 1, 'Pesho', 'Gosho');
 ->  str = '1, Pesho, 1 text Gosho'
*/

(function(){
    var strWithPlaceholders = '{0} {1} {2} {3} day! {0}',
        result;

    result = formatString(strWithPlaceholders, ':)', 'Have', 'a', 'nice');
    console.log('STRING FORMAT');
    console.log(result);

    function formatString(format, stringsToInsert){
        var args = [].slice.apply(arguments);

        if (args.length < 2) {
            return 'Invalid arguments.';
        }

        var format = args[0],
            stringsToInsert = args.slice(1),
            iterations = stringsToInsert.length,
            currentPlaceholder;

        for (var i = 0; i < iterations; i += 1) {
            currentPlaceholder = '{' + i + '}';
            format = replaceAll(format, currentPlaceholder, stringsToInsert[i]);
        }

        return format;
    }

}());
