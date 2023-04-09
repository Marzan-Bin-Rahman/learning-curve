function Info(name, age, runs){
     this.name= name;
     this.age=age;
     this.runs=runs;
     this.show= function(){
          console.log(this.runs);
     }
}

let person1=new Info('karim', 21, 34)
let person2=new Info('karima', 21, 34)
let person3=new Info('karimaaaa', 21, 34)
let person4=new Info('karimaaaaaaaaaa', 21, 34)
console.log(person1, person2, person3, person4);