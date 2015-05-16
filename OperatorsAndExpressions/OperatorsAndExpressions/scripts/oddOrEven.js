function isOdd() {
    var input = document.getElementById("input").value;
    var result;

    if (isNaN(input)) {
        result = "NaN";
    }
    else {
        result = input % 2 !== 0 ? "true" : "false";
    }

    document.getElementById("result").value = result;
}