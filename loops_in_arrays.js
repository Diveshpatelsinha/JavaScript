let num = [1,2,3,4,5]
// for(i=0;i<num.length;i++){
//     console.log(num[i]);
    
// }

/*num.forEach((element) => {
   console.log(element*element);
   
})*/

//array.from

let name = "divesh"
let arr = Array.from(name)
console.log(arr);

// for...of

for(let a of num){
   console.log(a);
   
}

// for...in

for(let i in num){
   console.log(i);
   
}