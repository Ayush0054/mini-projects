//********intro to objects *****************************************/
//arrays are good but not sufficient
//for real world data
//objects store key value pairs
//object don't have index
//objects refrence type

                   //how to create objects
// const person={name:"Ayush",age:19};
// console.log(person);
// console.log(person.name);
// console.log(person.age);

                 //how to create objects another method
                 
// const person={name:"Ayush",
// age:19,
//  hobbies:["techie","geopolitcs knowledge","failure"]
// }
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);
//       //or
// console.log(person["name"]);


// //how to add key value pair to objects

// person.gender="male";
// //or 
// person["gender"]="male";

// console.log(person.gender);

             //difference between dot and bracket notation

// const person={name:"Ayush",
// age:19,
//  "person hobbies":["techie","geopolitcs knowledge","failure"]
// }
// console.log(person["person hobbies"]);

                  //2nd diff
const key ="email";
const person={name:"Ayush",
age:19,
 "person hobbies":["techie","geopolitcs knowledge","failure"]
}
person[key]="ayush5april@gmail.com"
console.log(person)