/*
Write a function that finds the youngest person in a given array of people and prints his/hers full name
Each person has properties firstname, lastname and age.

Example:

var people = [
    { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname : 'Bay', lastname: 'Ivan', age: 81},… ];
*/

(function () {
    var people = [
        { firstName: "Havelock", lastName: "Vetinari", age: 44 },
        { firstName: "Magrat", lastName: "Garlick", age: 23 },
        { firstName: "Esmerelda", lastName: "Weatherwax", age: 120 },
        { firstName: "Gytha", lastName: "Ogg", age: 64 },
        { firstName: "Tiffany", lastName: "Aching", age: 16 },
        { firstName: "Mustrum", lastName: "Ridcully", age: 66 },
        ],
        youngestPerson = getTheYoungestPerson(people);


    console.log("YOUNGEST PERSON");
    console.log(people);
    console.log("The youngest of them is " + youngestPerson);

    function getTheYoungestPerson(peopleArr){
        var minAge = Number.MAX_VALUE,
            youngestPerson = "",
            arrLength = peopleArr.length;

        for (var i = 0; i < arrLength; i++) {
            if (peopleArr[i].age < minAge) {
                minAge = peopleArr[i].age;
                youngestPerson = peopleArr[i].firstName + " " + peopleArr[i].lastName;
            }
        }

        return youngestPerson;
    }
}());