//  a	    b	        c	        d	    e	        biggest
//  5	    2	        2	        4	    1	        5
//  -2	    -22	        1	        0	    0	        1
//  -2	    4	        3	        2	    0	        4
//  0	    -2.5	    0	        5	    5	        5
//  -3	    -0.5	   -1.1	       -2	   -0.1	      -0.1


(function () {
    function getTheGreatestNumber() {
        var lengthArg = arguments.length,
            greatestNumber;

        if (lengthArg === 0) {
            return 0;
        }

        greatestNumber = arguments[0];

        for (var i = 0; i < lengthArg; i++) {
            if (greatestNumber < arguments[i]) {
                greatestNumber = arguments[i];
            }
        }

        return greatestNumber;
    }

    console.log("The biggest of five numbers:");
    console.log(getTheGreatestNumber(0, -2.5, 0, 5, 5));

    // or just use Math.max
    console.log(Math.max(-8, -7, -1.5, -1.6));
}());