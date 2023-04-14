// object prototype is like idhar ka mal udhar. here a property or method from an object is transferred to another object

// limitation-
// 1. prototype can not be set in a cicle
// 2. only object an null can be the value of prototype and others are ignored

let kolijaWalaKhan = {
     canCaptain: true,
     canGuide: true,
     jerseyNumber: 28,
     battingHand: 'left',
     lobbing: 'yes',
     bowling: 'never',
     problem(){ // we can use even if else inside this block
          console.log('fear')
     }
}

let sakibbai ={
     __proto__: kolijaWalaKhan
}

console.log(sakibbai.jerseyNumber) // 28

sakibbai.jerseyNumber = 75

console.log(sakibbai.jerseyNumber) // 75



// tasking task

let hamster = {
   
     eat(food) {
       this.stomach.push(food);
     }
   };
   
   let speedy = {
     stomach: [],
     __proto__: hamster
   };
   
   let lazy = {
     stomach: [],
     __proto__: hamster
   };
   
   // This one found the food
   speedy.eat("apple");
   console.log( speedy.stomach ); // apple
   
   // This one also has it, why? fix please.
   console.log( lazy.stomach ); // apple