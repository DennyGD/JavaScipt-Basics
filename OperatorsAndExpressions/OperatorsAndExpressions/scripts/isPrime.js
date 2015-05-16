function isPrime() {
    var input = document.getElementById("input").value,
        maxDivider,
        divider = 2,
        prime = true;

    if (input <= 1) {
        prime = false;
    }

    maxDivider = Math.sqrt(input);
    maxDivider = Math.floor(maxDivider);

    while ((prime === true) && divider <= maxDivider) {
        if (input % divider === 0) {
            prime = false;
        }
        divider++;
    }

    document.getElementById("result").value = prime;
}