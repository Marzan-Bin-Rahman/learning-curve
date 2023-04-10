// find will find the first element wheras findIndex will find the firstIndex based on the condition

let nums = [1, 2, 4, 5, 6, 7, 8]

console.log(nums.find((num)=>{
     return num%2==0
}));

// find

console.log(nums.findIndex((num)=> num%2!=0));