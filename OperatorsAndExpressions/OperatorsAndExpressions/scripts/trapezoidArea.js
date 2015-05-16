function calculateTrapezoidArea() {
    var a = parseFloat(document.getElementById("input-a").value),
        b = parseFloat(document.getElementById("input-b").value),
        h = parseFloat(document.getElementById("input-height").value);

    document.getElementById("result").value = ((a + b) / 2) * h;
}