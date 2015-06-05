/*
Write a function that finds the youngest male person in a given array of people and prints his full name
Use only array methods and no regular loops (for, while)
Use Array#find
*/

(function () {
    var newClones = JSON.parse(JSON.stringify(clones));

    newClones = newClones.filter(function (clone) {
        return clone.gender === 'male'
    });

    // since the initial array is already sorted, add new person in the beginning of the new array
    newClones.unshift(createPerson('John', 'Doe', 27, false));

    console.log('YOUNGEST PERSON');
    console.log('Initial list:');
    console.log(newClones);

    newClones.sort(function(a, b){
        return a.age - b.age
    });

    console.log('The youngest male is ' + newClones[0].firstName + newClones[0].lastName);
}());