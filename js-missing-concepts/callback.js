const square = (num) => {
     console.log(`the square of ${num} is ${num * num}`)
}

square(12)

const higherOrderFunction = (num, callback) => {
     callback(num)
}

higherOrderFunction(12, square)

// callback functions are those functions which are passed as a parameter or as an argument in another function. and the functions where a function is passed as an argument is called a higherOrderFunction

