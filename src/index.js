// let del = prompt("Are you sure you want to delete?");
// if (del ==yes){
  deletion successful  
// }
// if (del == no){
    // deletion unsuccessful
// }
let booking = prompt("let us know if you would like to cancel, confirm or reschedule");
if (booking =="confirm"){
    alert("see you soon")
}else if (booking =="cancel"){
    alert("booking cancelled")
}else if (booking =="reschedule"){
    alert("when would you like to reschedule")
}
let reschedule = prompt("when would you like to reschedule?")
alert("Your appointment has been rescheduled to" + reschedule)

// let num1 = 3;
// let num2 = 5;
// let result = num1 + num2;
// console.log(result);
// alert(result);


// let num3 = 10;
// let num4 = 




function sayHello(){
    let user =prompt("What is your name");
    alert(`Hello ${user}`);
}
sayHello();

function cookRice(salt, water, rice){
    alert(`I cooked ${rice} cups of rice with ${salt} a pinch of salt with ${water} cups of water.`)
}
cookRice{"half", "500mls", 10};


function checkAge(){
    let age = promot("What's your age?");
    if (age && age < 6){
        alert(`you are ${age} years old and you are too young.`);
    } else if (age && age>= 6 && age <= 17){
        alert(`you are ${age} years old and you have limited access`);
    }else if (age && age >=18){
        alert(`You are ${age} years old and you have limited access`);
    }else {
        alert(`Enter your name`);
    }
}
checkAge();  //calling out the function
//The "age" that appears in all the "else ifs" makes sure the user enters an age
