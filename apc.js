alert("enter the value of a")
let a = prompt("enter here")
a = Number.parseInt(a)
alert("you entered a of type" + (typeof a))
let write = confirm("do you really want to write to the page")
if (write) {
    document.write(a)
}else{
    document.write("please allow me to write")
}