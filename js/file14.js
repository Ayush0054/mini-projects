//*******array destructuring */


//***to assign array values method 1 */
// const array =["value1","value2"];
// let myvar1 =array[0];
// let myvar2 =array[1];
// console.log("value of myvar1 ",myvar1);
// console.log("value of myvar2 ",myvar2);


//***to assign array values method 2 */
const array =["value1","value2","value3"];
// let[myvar1,myvar2] =array;

// //to change value of my var1
// myvar1 ="value changed";

// let[myvar1, ,myvar2] =array;       //now myvar2--> value3

// to print left array
let[myvar1,myvar2,...newarray] =array;

console.log("value of myvar1 ",myvar1);
console.log("value of myvar2 ",myvar2);
console.log(newarray);