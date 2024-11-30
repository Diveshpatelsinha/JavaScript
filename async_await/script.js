async function weather()
 {let AgraWeather = new Promise((resolve, reject) => {
    // console.log("showing Agra and Delhi current Weather...");
    
    setTimeout(() => {
        resolve("Agra Temperature is sweet 17 Degree")
    }, 3000);
})

let DelhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Delhi weather is 25 Degree")
    }, 6000);
})

// AgraWeather.then(alert)
// DelhiWeather.then(alert)
console.log("fetching Agra weather please wait...");
let AW = await AgraWeather
console.log(AW);


console.log("fetching Delhi weather please wait...");
let DW = await DelhiWeather
console.log(DW);

return[AW,DW]
}

console.log("showing Agra and Delhi current Weather...");
let a = weather()
a.then((value)=>{
    console.log(value);
    
})
