let num= 23;

let stringedNum1 = toString(num)

console.log(typeof(stringedNum1))

// toString method is used to make a number to string

let stringedInteger = "89"

let numberedInteger = parseInt(stringedInteger)

console.log(numberedInteger)

// parseInt is used to convert a string to an integer

let floatedInteger = "89.987"

let numberedFloat = parseFloat(floatedInteger)

console.log(numberedFloat)

// parseFloat is used to convert a string to a float nubmer

let fixNumber = 45.674985709287

console.log(fixNumber.toFixed(3))

// toFixed will round up the float number and show will after the decimal point

let precisionNumber = 45.56766878

console.log(precisionNumber.toPrecision(6))

// toPrecision will also round up but will start from the beginnig of the number