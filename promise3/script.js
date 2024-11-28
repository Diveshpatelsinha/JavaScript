

//attaching multiple handlers

let p1 = new Promise((resolve, reject) => {
    alert("hey im not resolved")
    setTimeout(() => {
        resolve(1);
    }, 3000);
})

p1.then(()=>{
    console.log("congrats this problem is now resolved");
    
})

p1.then(()=>{
    console.log("hurray")
})