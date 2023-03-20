//to clone the array
//method 1
//slice

// let arr1 =["item1","item2"];
// // let arr2=["item1","item2"];
// let arr2 = arr1.slice(0);
// arr1.push("item3");
// // console.log(arr1===arr2);
// // console.log("arr1",arr1);
// console.log("arr2",arr2);

//method 2*********
//concat

// let arr1 =["item1","item2"];

// let arr2 = [].concat(arr1);
// // arr1.push("item3");
// // console.log(arr1===arr2);
// // console.log("arr1",arr1);
// console.log("arr2",arr2);

//method3*************

//spread operator

// let arr1 =["item1","item2"];

// let arr2 =[...arr1];
// arr1.push("item3");
// console.log(arr1===arr2);
// console.log("arr1",arr1);
// console.log("arr2",arr2);

//question

// let arr1 =["item1","item2"];
// let arr2 = arr1.slice(0).concat(["item3","item4"]);
 //or
// let arr2 =[...arr1,"item3","item4"];
//or
// let onemorearray=["item3","item4"];
// let arr2 =[...arr1,...onemorearray];

// console.log(arr1===arr2);
// console.log("arr1",arr1);
// console.log("arr2",arr2);