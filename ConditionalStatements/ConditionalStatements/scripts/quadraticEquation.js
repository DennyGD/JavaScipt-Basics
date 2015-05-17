//Examples:

//      a	    b	    c	    roots
//      2	    5	    -3	    x1=-3; x2=0.5
//      -1	    3	    0	    x1=3; x2=0
//      -0.5	4	    -8	    x1=x2=4
//      5	    2	    8	    no real roots

var a = 2,
    b = 5,
    c = -3,
    discriminant,
    x,
    x1,
    x2;

console.log("Quadratic equation:");

discriminant = (b * b) - (4 * a * c);

if (discriminant < 0) {
    console.log("The quadratic equation a*x*x + bx + c = 0 has no real roots.");
} else if (discriminant === 0) {
    x = -(b / (2 * a));
    console.log("The quadratic equation a*x*x + bx + c = 0 has two roots which are actually equal:", x);
}  else if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant))/(2*a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log("The quadratic equation a*x*x + bx + c = 0 has two real roots: x1 is", x1, "and x2 is", x2);
}