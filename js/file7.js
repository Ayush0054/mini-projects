//if else condition

// let age =18;

// if(age>18){
//     console.log("usert can play gta");
// }
// else{
//     console.log("usert can not play gta");
// }


//ternary operator

// let age =15;
// let drink;
// if(age>=5){
//     drink ="cofee";
// }
// else{
//     drink ="milk";
// }
// console.log(drink);

//**********conditional or ternary operator */
// let age =8;
// let drink = age >= 5 ? "cofee" : "milk";
// console.log(drink);

//**nested if else ******************/
// let winno =19;
// let guess = prompt("guess a no");
// if(guess === winno){
//     console.log("your guess is right");
// }
// else{
//    if(guess < winno){
//        console.log("too low");
//    }
//    else{
//        console.log("too high");
//    }
// }

//***********if else if */

// let temp=15;
// if(temp < 0){
//     console.log("extreme cold");
// }
// else if(temp <16){
//     console.log("cold");
// }
// else if(temp <25){
//     console.log("okay weather");
// }
// else if(temp < 35){
//     console.log("lets swim");
// }
// else if(temp < 45){
//     console.log("turn on ac")
// }
// else{
//     console.log("too hot");
// }

// console.log("hehe");


//*************switch statement */
let day =-10;

switch(day){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("out of earth day");
}
