//  Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".

(function(){
    var text = "ABBA, lamal, exe, great, bright  11211",
        arr = text.split(/[ ,]+/),
        arrLength = arr.length;

    console.log("FIND PALINDROMES");

    for (var i = 0; i < arrLength; i += 1) {
        console.log(arr[i] + ": " + isPalindrome(arr[i]));
    }

    function isPalindrome(str){
        if (!str) {
            return false;
        }

        var strLength = str.length;
            iterations = parseInt(strLength / 2);

        for (var i = 0;i < iterations; i += 1) {
            if (str[i] !== str[strLength - 1 - i]) {
                return false;
            }
        }

        return true;
    }
}());
