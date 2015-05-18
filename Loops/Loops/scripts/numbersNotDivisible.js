function numbersNotDivisible() {
    var input = document.getElementById("input-second-task").value,
        result;

    if (validateNumber(input)) {
        result = getOutputNotDivisible(input);
    } else {
        result = "Invalid input.";
    }

    console.log("Numbers not divisible by 5 and 7:");
    console.log(result);
    document.getElementById("second-task-result").innerText = "Result: " + result;
}

function getOutputNotDivisible(number) {
    var output = "1";

    for (var i = 2; i <= number; i++) {
        if (i % 5 !== 0 && i % 7 !== 0) {
            output += ", " + i;
        }
    }

    return output;
}