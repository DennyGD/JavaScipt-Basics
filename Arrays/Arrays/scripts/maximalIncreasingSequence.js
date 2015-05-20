//  Write a script that finds the maximal increasing sequence in an array.
//  Example:
//  input	                    result
//  3, 2, 3, 4, 2, 2, 4	        2, 3, 4

var sequence = [3, 2, 3, 4, 2, 2, 4],
    maxIncreasingSequence = [],
    currentSequence = [],
    count = 0,
    maxCount = 0,
    seqLength = sequence.length,
    startingNum,
    nextNum;

for (var i = 0; i < seqLength; i++) {
    startingNum = sequence[i];
    currentSequence.push(startingNum);

    for (var j = i + 1; j < seqLength; j++) {
        startingNum = sequence[j - 1];
        nextNum = sequence[j];
        if (nextNum > startingNum) {
            currentSequence.push(nextNum);
            count++;
        } else {
            break;
        }
    } if (count > maxCount) {
        maxCount = count;
        maxIncreasingSequence = [];
        for (index in currentSequence) {
            maxIncreasingSequence.push(currentSequence[index]);
        }
    }

    currentSequence = [];
    count = 0;
}

console.log("MAXIMAL INCREASING SEQUENCE");
console.log("Sequence: ", sequence);
console.log(maxIncreasingSequence);