let nut2 = document.querySelector("#nut2");
let nut1 = document.querySelector("#nut1");
let nhap = document.querySelector("#nhap");
let them = document.querySelector("#them");                           

nut1.onclick = () =>{
   let listgiatri = document.createElement("li")
   listgiatri.innerHTML = nhap.value
   them.appendChild(listgiatri)
}
nut2.onclick = () =>{
   let them = document.querySelector("#them");                           
   them.removeChild(them.lastElementChild)
}