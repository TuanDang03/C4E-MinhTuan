let nut1 = document.querySelector("#nut1")
let nut2 = document.querySelector("#nut2")
let nut3 = document.querySelector("#nut3")
let nut4 = document.querySelector("#nut4")
let so1 = document.querySelector("#so1")
let so2 = document.querySelector("#so2")
let result = document.querySelector("#add")
nut1.onclick = () =>{
result.value = parseFloat(so1.value) + parseFloat(so2.value)
}
nut2.onclick = () =>{
result.value = parseFloat(so1.value) - parseFloat(so2.value)
}
nut3.onclick = () =>{
result.value = parseFloat(so1.value) * parseFloat(so2.value)
}
nut4.onclick = () =>{
result.value = parseFloat(so1.value) / parseFloat(so2.value)
}
