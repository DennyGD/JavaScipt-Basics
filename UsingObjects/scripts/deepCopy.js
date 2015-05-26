/*
Write a function that makes a deep copy of an object.
The function should work for both primitive and reference types.
*/

(function () {
    var firstString = "I want pancakes",
        secondString = deepCopy(firstString),
        menu = {breakfast: "coffee + pancakes", lunch: "pasta"},
        editedMenu = deepCopy(menu),
        arrayOfFood = ["waffles", "lemons", "porridge"],
        editedArrayOfFood = deepCopy(arrayOfFood);

    secondString += " for breakfast";

    editedMenu.lunch = "pizza";

    editedArrayOfFood[0] = "cherries";

    console.log("DEEP COPY");
    console.log("After performing deep copy of the original and edit the copy:");
    console.log(firstString);
    console.log(secondString);
    console.log(menu);
    console.log(editedMenu);
    console.log(arrayOfFood);
    console.log(editedArrayOfFood);

    function deepCopy(original){
        return JSON.parse(JSON.stringify(original));
    }

}());
