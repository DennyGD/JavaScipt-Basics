function checkThirdBit() {
    var input = document.getElementById("input").value,
        result,
        shiftedNumber;

    if (isNaN(input)) {
        result = "Invalid input.";
    }

    else {
        shiftedNumber = input >> 3;
        result = shiftedNumber & 1;
    }

    document.getElementById("result").value = result;
}