function checkPoint() {
    var x = parseFloat(document.getElementById("input-x").value),
        y = parseFloat(document.getElementById("input-y").value),
        r = 5;
     
     if ((x * x) + (y * y) < (r * r)) {
        document.getElementById("result").value = true;
    }
    else {
        document.getElementById("result").value = false;
    }
}