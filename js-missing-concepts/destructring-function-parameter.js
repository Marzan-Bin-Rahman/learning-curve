
const destructure = ({name, age, cgpa}) => {
     // console.table(info);
     // console.log(info.age);
     console.log(name, age, cgpa);
}

let info = {
     name: 'umu',
     age: 42,
     class: 9,
     cgpa: 4.00
}

destructure(info)

//  you can not use class as a parameter lol :p