//promise chaining


let p1 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    
    setTimeout(() => {
        console.log("resolved after 3 sec");
        resolve(56)
        
    }, 3000);
})

p1.then((value)=>{
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
       setTimeout(() => {
        resolve("Promise 2")
       }, 3000);
    })
    return p2
}).then((value)=>{
    console.log("we are done");
    return 2
}).then((value)=>{
    console.log("now we are pakka done");
    
})