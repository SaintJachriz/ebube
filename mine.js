const Header = document.getElementById("Header");
const Header2 = document.getElementById("Header2");
const alert = document.getElementById("Alert");

setTimeout(function(){
Header2.style.color = "red";
}, 2000)

setTimeout(function(){
Header2.style.color = "blue";
}, 4000)

setTimeout(function(){
Header2.style.color = "yellow";
}, 6000)

setTimeout(function(){
Header2.style.color = "chocolate";
}, 8000)


setTimeout(function(){
Header.style.color = "red";
}, 2000)

setTimeout(function(){
Header.style.color = "blue";
}, 4000)

setTimeout(function(){
Header.style.color = "yellow";
}, 6000)

setTimeout(function(){
Header.style.color = "chocolate";
}, 8000)

let user = window.prompt("Enter your username")
setTimeout(function(){
if(prompt === null){
alert.style.display = "none"
} else{
 alert.textContent = `Welcome ${user}`
  alert.style.display = "block"
}
}, 1000)

setTimeout(function(){
alert.style.display = "none"
}, 6000)

const Btn = document.getElementById("Btn")

Btn.addEventListener("click", function(e) {
e.target.textContent = "Hello"
})

function Click() {
    let display = "Click"

    document.getElementById("mrP").textContent = display
}

let names = ["Jachima", "Kene", "Chinonso", "Ekene"]

for (let i = 0; i <names.length; i++) {
    console.log(`This are the names of the millioniars ${names[i]}`)
}

var person = [{
    name: "James",
    age: 21,
    isEmployed: true,
    Location: {
        Street: "Maza Maza",
        No: 27,
        Localgovernment: "Amuwo Odofin"
    }
}]

console.log(person.Location.Street.toString)



