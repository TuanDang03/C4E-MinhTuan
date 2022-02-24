//Bai 3:
let clickednut1 = false
let nut1 = document.querySelector("#nut1");
let nhap = document.querySelector("#nhap");  
let randomNumber = Math.floor(Math.random() * 10) + 1;
let announce = document.querySelector("#announce");
let text1 = ""          
let k = ""
let Ok = 0;
nut1.onclick = () =>{
    if(clickednut1 == false){
    let numb = them.childNodes.length;  
    if(numb <= 3){
        if(0 < nhap.value && nhap.value <= 10){
            let listgiatri = document.createElement("li")
            them.appendChild(listgiatri)
            if(nhap.value == randomNumber){
                announce.innerHTML = "Bạn đã trúng thưởng, kết quả là: " + randomNumber
                announce.sty
                clickednut1 = true
            }
            else{
                if(numb < 3){
                    announce.innerHTML = "Bạn vẫn còn cơ hội"
                }
                else{
                    announce.innerHTML = "Chúc bạn may mắn lần sau, kết quả là: " + randomNumber
                }
            }
        }
    }
}
}

