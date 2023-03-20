// function add(num1,num2){
//     return num1 + num2;
// }
// function multiply(num1,num2){
//     return num1 * num2;
// }
// function multiply(num1,num2){
//     return num1 / num2;
// }
// function multiply(num1,num2){
//     return num1 - num2;
// }

// function calculator(num1,num2,operator){
//     return operator(num1,num2);
// }

//******************objects */
   //***method1 */
// var manager = {
//     name:abhi,
//     age:19,
//     country:india
// }

//**mwthod2 */
function manager (name,age,country){
    this.name = name;
    this.age =age;
    this.country=country;
}

var manager1 = new manager("aman",29,["india","usa"])
var manager2 = new manager("amit",28,["india","uk"])

console.log(manager1.name);
console.log(manager1.age);
console.log(manager1.country);
console.log(manager2.name);
console.log(manager2.age);
console.log(manager2.country);