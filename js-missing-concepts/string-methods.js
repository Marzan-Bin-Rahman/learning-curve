let text = "RCB is never going to win an ipl"

console.log(text.startsWith("RCB")); // true
console.log(text.startsWith("rcb")); // false

console.log(text.endsWith('ipl')); // true
console.log(text.endsWith('IPL')); // false

console.log(text.includes('to')); // true
console.log(text.includes('To')); // false

// these are case sensative and we can give another parameter, position,