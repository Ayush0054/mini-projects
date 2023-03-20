//******************for loop in array */

// let fruits = ["apple","mango","banana","grapes"];
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i].toUpperCase())
// } 

//********************************to push fruits element in fruits2
// let fruits = ["apple","mango","banana","grapes"];
// let fruits2=[];
// for(let i=0;i<fruits.length;i++){
//     fruits2.push(fruits[i].toUpperCase())
// } 
// console.log(fruits2);

//******************use const for creating array */
// const fruits =["apple","grapes"];
// fruits.push("mango");
// console.log(fruits);

//*********while loop in array */
// const fruits =["apple","grapes","mango"];
// let i =0;
// while(i<fruits.length){
//     console.log(fruits[i]);
// }

//*************for of loop */
// const fruits =["apple","grapes","mango"];
// for(let s of fruits){
//     console.log(s);                           // you can perform push pop on it also expale fruits2.pus(s);
// }
//***************for in loop */
// const fruits =["apple","grapes","mango"];                 // to print index
// for(let s in fruits){
//     console.log(s);                          
// }


const fruits =["apple","grapes","mango"];
for(let s in fruits){
    console.log(fruits[s]);                                        //to print fruits
}