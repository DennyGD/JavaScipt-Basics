function numbersToN() {
    var num = document.getElementById("input-first-task").value,
        result;

    if (validateNumber(num)) {
        result = getOutput(parseInt(num));
    } else {
        result = "Invalid input.";
    }

    console.log("Numbers from 1 to N:");
    console.log(result);
    document.getElementById("first-task-result").innerText = "Result: " + result;
}


function validateNumber(input) {
    if (isFinite(input) === false || input < 2) {
        return false;
    } else {
        return true;
    }
}

function getOutput(number) {
    var output = "1";

    for (var i = 2; i <= number; i++) {
        output +=  ", " + i;
    }

    return output;
}

