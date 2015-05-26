//  Write a function that checks if a given object contains a given property.

(function(){
    var student = {firstName: "Jane", lastName: "Doe", age: "unknown"},
        wantedProperty = "age",
        hasProp = hasProperty(student, wantedProperty);

    console.log("HAS PROPERTY");
    console.log(student);
    console.log("it has property " + wantedProperty + ": " + hasProp);

    function hasProperty(obj, property){
        for (var prop in obj) {
            if (prop === property) {
                return true;
            }
        }

        return false;
    }
}());