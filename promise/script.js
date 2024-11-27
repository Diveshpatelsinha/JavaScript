let p = new Promise((resolve, reject) => {
    console.log('promise is pending');
    
    setTimeout(() => {
    //    console.log("promise is fullfilled");
       resolve(true)
        //   reject( new Error("i am an error"));
    
    }, 5000);
})

let p2 = new Promise((resolve, reject) => {
    console.log('promise is pending');
    
    setTimeout(() => {
    //    console.log("promise is rejected");
    //    resolve(true)
          reject( new Error("i am an error"));
    
    }, 5000);
})

p.then((value)=> {
    console.log(value);
    
})

p2.catch((error)=>{
    console.log("some problem occured in p2");
    
})


