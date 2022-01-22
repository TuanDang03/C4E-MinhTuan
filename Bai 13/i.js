let button = document.querySelector('.button')
let body =  document.querySelector('.body')

button.addEventListener("click", function(e){
  let buttonclick = localStorage.getItem("button")
  if(buttonclick == "dark"){
    e.target.innerHTML = "Dark Mode"
    body.classList.remove("dark")
    localStorage.setItem("button","light")
  }
  else{
    e.target.innerHTML = "Light Mode"
    body.classList.add("dark")
    localStorage.setItem("button","dark")
  }
})
