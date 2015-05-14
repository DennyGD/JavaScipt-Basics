var someString = "some string";
var integer = 100;
var floatingPoint = 100.1;
var isTrue = true;
var arrayAllInOne = [someString, integer, floatingPoint, isTrue];

console.log(arrayAllInOne);

var joeysWords = "'How you doin'?', Joey said.";
console.log(joeysWords);

joeysWords = '\'How you doin\'?\', Joey said.';
console.log("Joey's words again (using slashes): ", joeysWords);
console.log("typeof joeysWords:", typeof (joeysWords));

console.log(`typeof ${someString}:`, typeof (someString));
console.log(`typeof ${integer}:`, typeof (integer));
console.log(`typeof ${floatingPoint}:`, typeof (floatingPoint));
console.log(`typeof ${isTrue}:`, typeof (isTrue));

var undefinedVariable;
var nullVariable = null;
console.log("This is an undefined variable:", undefinedVariable);
console.log("This is nullVariable:", nullVariable);