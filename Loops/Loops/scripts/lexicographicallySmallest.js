function lexicographicallyOrdered() {
    var documentProps,
        windowProps,
        navigatorProps;

    documentProps = Object.getOwnPropertyNames(document);
    documentProps.sort(function (a, b) {
        return a.localeCompare(b, "en", {"sensitivity": "base"});
    });

    windowProps = Object.getOwnPropertyNames(window);
    windowProps.sort(function (a, b) {
        return a.localeCompare(b, "en", { "sensitivity": "base" });
    });

    navigatorProps = Object.getOwnPropertyNames(navigator);
    navigatorProps.sort(function (a, b) {
        return a.localeCompare(b, "en", { "sensitivity": "base" });
    });

    printFourthTask();

    function printFourthTask() {
        console.log("Fourth task:");
        console.log(documentProps[0]);
        console.log(documentProps[documentProps.length - 1]);
        console.log(windowProps[0]);
        console.log(windowProps[windowProps.length - 1]);
        console.log(navigatorProps[0]);
        console.log(navigatorProps[navigatorProps.length - 1]);
        document.getElementById("fourth-task-result1").innerText = "Document: " + documentProps[0] + "; " + documentProps[documentProps.length - 1];
        document.getElementById("fourth-task-result2").innerText = "Window: " + windowProps[0] + "; " + windowProps[windowProps.length - 1];
        document.getElementById("fourth-task-result3").innerText = "Navigator: " + navigatorProps[0] + "; " + navigatorProps[navigatorProps.length - 1];
    }
}