const myform = document.getElementById("myform")
const welcome = document.getElementById("welcome")
const username = localStorage.getItem("hello")
console.log(username)

localStorage.setItem("hello",JSON.stringify({hello:"world"}))
console.log(JSON.parse(localStorage.getItem("hello")));


if (username){
    welcome.innerHTML = `Hello, ${username}`
    myform.style.display = "none"
}
else{
    myform.style.display = "none"
}
myform.addEventListener("submit", function(event){
    event.preventDefault();
    const username = document.getElementById("username").value  
    console.log(username)
    welcome.innerHTML = `Hello, ${username}`
    welcome.style.display = "none"
    myform.style.display = "none"

    sessionStorage.setItem("username", username)
})

welcome.addEventListener("click", function(){
    welcome.style.display = "none"
    myform.style.display = "block"
    sessionStorage.removeItem("username")
})