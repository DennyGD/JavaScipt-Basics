/*
Write a function for creating people.
Each person must have firstname, lastname, age and gender (true is female, false is male)
Generate an array with ten people with different names, ages and genders
*/


var clones = [],
    cloneName = 'John',
    initialAge = 20,
    isFemale;

for (var i = 1; i <= 10; i += 1 ) {
    isFemale = generateRandomBool();
    clones.push(createPerson(cloneName, i.toString(), initialAge + i, isFemale));
}

console.log('MAKE PERSON');
console.log('Clones:');
clones.forEach(function(clone){console.log(clone.toString())});


function createPerson(firstName, lastName, age, gender){
    if (!firstName || !lastName || isNaN(age) || (typeof gender !== 'boolean')) {
        return 'Invalid arguments.';
    }

    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender === true ? 'female' : 'male',
        toString: function(){return 'name: ' + this.firstName + this.lastName + '; age: ' + this.age +
            '; gender: ' + this.gender}
    }
}

function generateRandomBool(){
    return Boolean(Math.floor(Math.random() * 2));
}