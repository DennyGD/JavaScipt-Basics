//  Examples:
// a	        b	            c	                biggest
// 5	        2	            2	                5
// -2	        -2	            1	                1
// -2	        4	            3	                4
// 0           -2.5             5                   5
//-0.1          -0.5            -1.1                -0.1

(function () {
    var a = -0.1,
        b = -0.5,
        c = -1.1;

    console.log("The biggest of three:");

    if (a >= b && a >= c) {
        console.log("a =", a);
    } else if (b >= a && b >= c) {
        console.log("b =", b);
    } else if (c >= a && c >= b) {
        console.log("c =", c);
    }
}());