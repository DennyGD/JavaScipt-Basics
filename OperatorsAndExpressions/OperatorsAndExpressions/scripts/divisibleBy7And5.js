function isDivisibleBy7And5() {
    var input = document.getElementById("input").value;
    var result;

    if (isNaN(input)) {
        result = "NaN";
    }

    else {
        result = input % 7 === 0 && input % 5 === 0 ? "true" : "false";
    }

    document.getElementById("result").value = result;
}