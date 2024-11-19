// let arr = [1,2,3,4,5]
//array map method
// let a = arr.map((value,index, array)=>{   //map is used when we want to make a new array from existing array
//  console.log(value,index,array);
//  return value + index
// })
// console.log(a);

//array filter method

// let arr2 = [2,3,4,5,6,7,8]
// let a2 = arr2.filter((a)=>{
//     return a<7
// })

// console.log(a2);

// the above two does not modify the original array

// array reduce method

let arr3 = [1,3,4,5,6,7,8]
let b = arr3.reduce((a,a2)=>{   //reduce return the sum of array
 return a+a2
})
 
console.log(b);
