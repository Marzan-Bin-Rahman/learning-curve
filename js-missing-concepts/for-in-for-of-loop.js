let ages = [12,34,546,67,1,4]

// for(let age of ages){
//      console.log(age);
// }

// for of is used to iterate an array

// console.log(ages.sort(
//      function(a,b){
//           return a-b
//      }
// ));

let infos = {
     name: 'umu',
     age: 14,
     class: 3
}

for(let info in infos){
     console.log(infos[info]);
}