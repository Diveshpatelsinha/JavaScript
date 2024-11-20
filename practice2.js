//practice question 1

// let age = prompt("enter your age: ")
// age = Number.parseInt(age)

// const canDrive =(age)=>{
//    return age>18?true:false
// }

// if(canDrive(age)){
//     alert('yes you can Drive')
// }
// else{
//     alert("you cannot Drive")
// }

//practice question 2

// let age;
// let canDrive = (age)=>{
//   return age>18?true:false
// };

// do {
//     age = prompt("Enter your age: ")
//     age = Number.parseInt(age)

//     if(canDrive(age)){
//         alert("Yes you can Drive")
//     }
//     else{"you cannot Drive"}
// } while (confirm('do you want to enter your age again'));

//practice question 3

// let age;
// const canDrive = (age)=>{
//   return age>18?true:false
// };



// do {
//     age = prompt("Enter your age: ")
//     age = Number.parseInt(age)

//     if(isNaN(age)|| age<0){
//         alert("Please enter a valid positive number")
//     }
//     else{

//     if(canDrive(age)){
//         alert("Yes you can Drive")
//     }
//     else{"you cannot Drive"}
// }
// } while (confirm('do you want to enter your age again'));


//practice question 4

// const userInput = prompt("Enter a number:")
// let number = parseInt(userInput)

// if(isNaN(number)){
//     alert("please enter a valid number")
// }else if(number>4){
//     alert("Redirecting to google.....")
//     window.location.href = "http://www.google.com";
// }else{
//     alert("your entered number is not greater than 4.Therefore no redirecting..")
// }

//practice question 5

const color = prompt("Enter a color name of your choice: ").toLowerCase()

if (color) {
    document.body.style.backgroundColor = color;
    alert(`the background color has been changed to ${color}`)
} else {
    alert("no color entered the background will not change!")
}
