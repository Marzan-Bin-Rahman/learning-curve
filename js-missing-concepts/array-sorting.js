const nums = [123, 35, 56, 4, 5]
console.log(nums.sort(
     function (a, b) {
          return a - b
     }
));

// it will set numbers in a and b. then it will substract it from a-b. if the value is positive it will place a infront of b and vice versa