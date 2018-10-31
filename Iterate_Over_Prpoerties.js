// 2. Iterating over an object's properties
// Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.

myObj = {

    foo: "hello",
    bar: "six",
    fum: "fly",
    quux: "zero",
    spam: 36

}

for(let key in myObj){

    console.log(key + " value = " + myObj[key]);

}


