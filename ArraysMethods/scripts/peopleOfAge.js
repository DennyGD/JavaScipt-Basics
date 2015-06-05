/*
Write a function that checks if an array of person contains only people of age (with age 18 or greater)
Use only array methods and no regular loops (for, while)
*/

(function () {
    var people = [],
        allAre18;

    people.push(createPerson('Jane', 'Doe', 18, true));
    people.push(createPerson('John', 'Doe', 18, false));
    people.push(createPerson('Elizabeth', 'Doe', 18, true));

    allAre18 = people.every(function (person) {return person.age === 18});

    console.log('PEOPLE OF AGE');
    people.forEach(function (person) {console.log(person.toString())});
    console.log(`All are 18: ${allAre18}`);
}());

// Template strings -> https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings