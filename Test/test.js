//Bai 1:
function findOppositeNumber(n,inputNumber){
    let output = ""
    if(n%2==0 && 4<=n && n<=20){
        for(let i = 0; i <= n - 1; i++){
            if(inputNumber < 5){
                output =  n/2 + inputNumber
            }
            else{
                output =  n/2 + inputNumber - 10
            }
        }
    }else{
        output = "Yeu cau ban nhap lai"
    }
    return output;
}
console.log(findOppositeNumber(10,2))
console.log(findOppositeNumber(10,6))


//Bai 2:
function merge (string1, string2) {
    let text1 = string1.split("")
    let text2 = string2.split("")
    let mergedString = ""
    for(let i = 0; i < text1.length || i < text2.length; i++) {  
     if(i < text1.length)  
       mergedString +=  text1[i]
     if(i < text2.length)  
       mergedString +=  text2[i]
    }
    return mergedString;
}
console.log(merge("abc","123"))
console.log(merge("abc","0123"))
console.log(merge("abcd","123"))


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

