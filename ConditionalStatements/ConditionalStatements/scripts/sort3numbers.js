//  a	    b	    c	        result
//  5	    1	    2	        5 2 1
//  -2	    -2	    1	        1 -2 -2
//  -2	    4	    3	        4 3 -2
//  0	    -2.5    5	        5 0 -2.5

(function () {
    var a = -2,
        b = 4,
        c = 3;

    console.log("Sort 3 numbers:");

    if (a >= b && a >= c) {
        if (b >= c) {
            console.log(a, b, c);
        } else {
            console.log(a, c, b);
        }
    } else if (b >= a && b >= c) {
        if (a >= c) {
            console.log(b, a, c);
        } else {
            console.log(b, c, a);
        }
    } else {
        if (a >= b) {
            console.log(c, a, b);
        } else {
            console.log(c, b, a);
        }
    }
}());