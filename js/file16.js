// how to iterate object
const person={name:"Ayush",
age:19,
 "person hobbies":["techie","geopolitcs knowledge","failure"]
}
// for loops
// for(let key in person ){
//     console.log(key);
// }

// for(let key in person ){
//     console.log(person[key]);
// }

// for(let key in person ){
//     console.log(`${key} : ${person[key]}`);
// }
//             //or
// for(let key in person ){
//     console.log(key,person[key]);
//  }          

/////******************** */

console.log(Object.keys(person))

///**************** */

for(let key of Object.keys(person)){
    console.log(person[key]);
}