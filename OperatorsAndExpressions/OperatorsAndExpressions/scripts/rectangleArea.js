function calculateRectangleArea() {
    var width = document.getElementById("input-width").value,
        height = document.getElementById("input-height").value,
        result;

    if (isNaN(width) || isNaN(height)) {
        result = "Invalid input";
    }

    else if (width <= 0 || height <= 0) {
        result = "Positive numbers only";
    }

    else {
        result = width * height;
    }

    document.getElementById("result").value = result;
}