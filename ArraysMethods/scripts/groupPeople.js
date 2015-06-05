/*
Write a function that groups an array of people by first letter of first name and returns the groups as a JavaScript Object
Use Array#reduce
Use only array methods and no regular loops (for, while)

 Example:

 result = {
 'a': [{
    firstname: 'Asen',
        ...
}, {
    firstname: 'Anakonda',
     ...
}],
 'j': [{
    firstname: 'John',
    ...
    }]
};
*/

(function(){
    var letters,
        people = [1, 2, 1, 2, 4, 5, 4].map(function (item) {
        letters = String.fromCharCode(item + 64, item + 64 + 1);
        return createPerson(letters, 'Unknown', 20, true)
    });

    var groupNames = people.reduce(function (groups, person) {
        var currentLetter = person.firstName[0];

        if (!groups[currentLetter]) {
            groups[currentLetter] = [];
        }

        groups[currentLetter].push(person);
        return groups
    }, {});

    console.log('GROUP PEOPLE');
    console.log(people);
    console.log(groupNames);
}());
