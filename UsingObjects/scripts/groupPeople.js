/*
Write a function that groups an array of people by age, first or last name.
The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
Use function overloading (i.e. just one function)
*/

(function () {
    var people = [
        { firstName: "Havelock", lastName: "Vetinari", age: 44 },
        { firstName: "Magrat", lastName: "Garlick", age: 20 },
        { firstName: "Esmerelda", lastName: "Weatherwax", age: 66 },
        { firstName: "Gytha", lastName: "Ogg", age: 44 },
        { firstName: "Tiffany", lastName: "Aching", age: 20 },
        { firstName: "Mustrum", lastName: "Ridcully", age: 66 }],
        criterion = "age",
        groups = groupPeople(people, criterion);

    console.log("GROUP PEOPLE");
    console.log(groups);

    function groupPeople(peopleArr, criterion){
        var groupedPeople = [],
            arrLength = peopleArr.length,
            currentValue;

        for (var index = 0; index < arrLength; index++) {
            currentValue = peopleArr[index][criterion];
            if (!(groupedPeople[currentValue])) {
                groupedPeople[currentValue] = [];
            }
            groupedPeople[currentValue].push(peopleArr[index]);
        }

        return groupedPeople;
    }
}());