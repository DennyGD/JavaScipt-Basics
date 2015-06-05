/*
Write a function that prints all underaged people of an array of people
Use Array#filter and Array#forEach
Use only array methods and no regular loops (for, while)
*/

(function (){
    var people = [],
        underagedPeople = [];

    people.push(createPerson('Jane', 'Doe', 16, true));
    people.push(createPerson('John', 'Doe', 18, false));
    people.push(createPerson('Elizabeth', 'Doe', 14, true));

    underagedPeople = people.filter(function(person){return person.age < 18});

    console.log('UNDERAGED PEOPLE');
    console.log('Initial list:');
    people.forEach(function (person) {console.log(person.toString())});
    console.log('List of underaged:');
    underagedPeople.forEach(function (person) {console.log(person.toString())});
}());