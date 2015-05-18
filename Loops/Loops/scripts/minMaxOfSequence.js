function minMaxOfSequence() {
    var input = document.getElementById("input-third-task").value,
        numbers = [];

    // split by whitespace and comma
    numbers = input.split(/[ ,]+/);
    numbers.sort(sortNumbers);

    console.log("Min value of sequence:", numbers[0]);
    console.log("Max value of sequence:", numbers[numbers.length - 1]);
    document.getElementById("third-task-result1").innerText = "Min value: " + numbers[0];
    document.getElementById("third-task-result2").innerText = "Max value: " + numbers[numbers.length-1];
}

function sortNumbers(a, b) {
    return a - b;
}