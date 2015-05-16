function checkThirdDigit() {
    var input = document.getElementById("input").value,
        result;
    console.log(input.length);

    if (isNaN(input)) {
        result = "Invalid input.";
    }

    else if (input.length < 3) {
        result = "false";
    }

    else {
        input = input + "";
        var reversed = input.split("").reverse().join("");
        result = reversed[2] === "7" ? "true" : "false";
    }

    document.getElementById("result").value = result;
}