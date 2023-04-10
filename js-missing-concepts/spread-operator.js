const sum = (x, y, z) => {
     return x + y + z
}

let nums = [1, 3, 5]

// console.log(sum(nums[0], nums[1], nums[2]))
// without using spread operator

console.log(sum(...nums))

// using spread operator

let num1 = [2, 4, 3]
let num2 = [3, 6, 7, ...num1]

console.log(num2);

// spread operator can be used in anywhere middle, end, start but rest parameter is only available to use as the last parameter

let num = [...num1, ...num2]

console.log(num);

// spread operators can be used to concatinate arrays





let p1={
     name: 'rahim',
     age: 12
}

let p2={
     class: 3,
     roll: 4
}

let p ={...p1, ...p2}

console.log(p);

// spread operators can be used to conacatinae an object too!! :)