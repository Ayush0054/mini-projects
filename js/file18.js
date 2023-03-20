//spread operator in arrays
// const array1 = [1,2,3];
// const array2 = [5,6,7];

// const newaraay = [...array1, ...array2];
// console.log(newaraay);


// const arr = [..."abc"];
// console.log(arr);
// *****************************************************************//
          //spread operator in objects

const obj1 ={
    key1: "value1",
    key2: "value2"
};
const obj2 ={
    key1: "new key",
    key3: "value3",
    key4: "value4"
};

const newobj = {...obj1 , ...obj2};
console.log(newobj);

// some more vaariation
const obj ={..."abc"};
console.log(obj);

//variation 2
const object ={...["item1","item2"]};
console.log(object);