//  Examples:
//
//    a	    b	    c	    result
//
//    5	    2	    2	      +
//   -2    -2       1         +
//   -2     4       3         -
//    0    -2.5     4         0
//   -1    -0.5    -5.1       -

(function () {
    var a = -1,
        b = -0.5,
        c = -5.1;

    console.log("Multiplication sign:");

    if (a === 0 || b === 0 || c === 0) {
        console.log("0");
    } else if ((a > 0) && (b > 0) && (c > 0)) {
        console.log("+");
    } else if ((a < 0) && (b < 0) && (c < 0)) {
        console.log("-");
    } else if ((a < 0) && (b > 0) && (c > 0)) {
        console.log("-");
    } else if ((a > 0) && (b < 0) && (c > 0)) {
        console.log("-");
    } else if ((a > 0) && (b > 0) && (c < 0)) {
        console.log("-");
    } else {
        console.log("+");
    }
}());
