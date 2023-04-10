const printNums = (x, y, ...z) => {
     console.log(`x=${x}, y=${y}, z=${z}`);
}

printNums(12,134,5465,67,343,56)

// rest parameter will except all the values which shouldn't be given as a value