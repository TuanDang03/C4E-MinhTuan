//Coercion: 
console.log("Problem 1: Coercion - Truthy & Falsy")

//2.3:
let a = 1;
let b = -1
if(a && b > -2){
console.log("Đúng")
}

//Chia cho 3: 
let i = prompt("Nhập số bất kì : "); 
  if(i%3==0){
    console.log(i +" Chia hết cho 3 và bằng", i/3)
  }
  else{
    console.log(i +" Không chia hết cho 3 và dư", i%3)
  }

//Viết chương trình tìm số nguyên tố: 

let u = parseFloat(prompt("Nhập một số dương bất kì : "))
if(u < 1){
  console.log(u + " Không phải số dương")
  console.log(u + " Không phải số nguyên tố")
}
else if(u == 1){
  console.log(u +" Không phải số nguyên tố")
}
else if(u == 2){
  console.log(i +" Là số nguyên tố")
}
else if(u == 3){
  console.log(u + " Là số nguyên tố")
}
else if(u == 5){
  console.log(u +" Là số nguyên tố")
}
else if(u == 7){
  console.log(u +" Là số nguyên tố")
}
else if(u % 2 == 0){
  console.log(u + " Không phải số nguyên tố")
}
else if(u % 3 == 0){
  console.log(u + " Không phải số nguyên tố")
}
else if(u % 5 == 0){
  console.log(u + " Không phải số nguyên tố")
}
else if(u % 7 == 0){
  console.log(u + " Không phải số nguyên tố")
}
else{
  console.log(u + " Không phải số nguyên tố")
}


//Tạo máy tính cơ bản với các chức năng: +, -, * và / :

//if-else:

let pheptoan = prompt(" Nhập phép tính ( +, -, *, /) : ")
let y = parseFloat(prompt(" Nhap số thứ nhất : "))
let z = parseFloat(prompt(" Nhap số thứ hai : "))
let ketqua;
if(pheptoan === "+"){
  ketqua = y + z
  console.log("Số thứ nhat + Số thứ hai = ", y+z)
  console.log(`${y} ${pheptoan} ${z} = ${ketqua}`)
}
else if(pheptoan === "-"){
  ketqua = y - z
  console.log("Số thứ nhat - Số thứ hai = ", y-z)
  console.log(`${y} ${pheptoan} ${z} = ${ketqua}`)
}
else if(pheptoan === "*"){
  ketqua = y * z
  console.log("Số thứ nhat x Số thứ hai = ", y*z)
  console.log(`${y} ${pheptoan} ${z} = ${ketqua}`)
}
else if(pheptoan === "x"){
  ketqua = y * z
  console.log("Số thứ nhat x Số thứ hai = ", y*z)
  console.log(`${y} ${pheptoan} ${z} = ${ketqua}`)
}
else if(pheptoan === "/"){
  ketqua = y / z
  console.log("Số thứ nhat : Số thứ hai = ", y/z)
  console.log(`${y} ${pheptoan} ${z} = ${ketqua}`)
}
else if(pheptoan === ":"){
  ketqua = y / z
  console.log("Số thứ nhat : Số thứ hai = ", y/z)
  console.log(`${y} ${pheptoan} ${z} = ${ketqua}`)
}
else{
  console.log("Bạn nhập sai phép tính")
}

//switch: 

let pheptinh = prompt(" Nhập phép tính ( +, -, *, /) : ")
let v = parseFloat(prompt("Nhập số thứ nhất : "))
let w = parseFloat(prompt("Nhập số thứ hai : "))
let result
switch(pheptinh){
  case "+":
    result = v + w
    console.log(" Số thứ nhất + Số thứ hai =", v + w)
    console.log(`${v} ${pheptinh} ${w} = ${result}`)
    break
  case "-":
    result = v - w
    console.log(" Số thứ nhất - Số thứ hai =", v - w)
    console.log(`${v} ${pheptinh} ${w} = ${result}`)
    break
  case "*":
    result = v * w
    console.log(" Số thứ nhất * Số thứ hai =", v * w)
    console.log(`${v} ${pheptinh} ${w} = ${result}`)
    break
  case "x":
    result = v * w
    console.log(" Số thứ nhất x Số thứ hai =", v * w)
    console.log(`${v} ${pheptinh} ${w} = ${ketqua}`)
    break
  case "/":
    result = v / w
    console.log(" Số thứ nhất / Số thứ hai =", v / w)
    console.log(`${v} ${pheptinh} ${w} = ${result}`)
    break
  case ":":
    result = v / w
    console.log(" Số thứ nhất : Số thứ hai =", v / w)
    console.log(`${v} ${pheptoan} ${w} = ${result}`)
    break
  default:
    console.log(" Bạn nhập chưa đúng ")
}

  