/*
Write a function that calculates the average age of all females, extracted from an array of persons
Use Array#filter
Use only array methods and no regular loops (for, while)
*/

(function () {
    var femalesAge = [],
        sumAge,
        averageAge;

    femalesAge = clones.filter(function(clone){
        return clone.gender === 'female'
    }).map(function(f){
        return f.age
    });

    sumAge = femalesAge.reduce(function(age, sum){
        return sum + age;
    }, 0);

    averageAge = sumAge / femalesAge.length;

    console.log('AVERAGE AGE OF FEMALES');
    console.log('Initial list: the clones from task 1');
    console.log('Average age of females: ' + averageAge);
}());