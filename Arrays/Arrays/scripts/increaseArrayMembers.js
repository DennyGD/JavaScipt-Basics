//Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
//Print the obtained array on the console.

var arrayIntegers = [];
arrayIntegers.length = 20;

for (var i = 0; i < arrayIntegers.length; i++) {
    arrayIntegers[i] = i * 5;
}

console.log("INCREASE ARRAY MEMBERS:");
console.log(arrayIntegers);