//Examples:

//  a	    b	    result
//  5	    2	    2 5
//  3	    4	    3 4
//  5.5	    4.5	    4.5 5.5

(function () {
    var a = 5.5,
        b = 4.5,
        temp;

    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }

    console.log("Exchange if greater:");
    console.log(a, b);
    console.log();
}());