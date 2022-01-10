//BÀI 1:
//1.1:
function checkAge(age) {
  age > 18 ? true : confirm('Did parents allow you?')
}

//1.2:
function checkAge2(age2) {
  return age2 > 18 || confirm('Did parents allow you?')
}

//BÀI 3:
ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);

//BÀI 4:
//Cách 1:
let tendangnhap = prompt("Nhập tên đăng nhập :")
switch(tendangnhap){
  case "Admin":{
    let matkhau = prompt("Hãy nhập mật khẩu :")
    switch(matkhau){
      case "mindX":
        alert("Chào mừng")
        break
      case "":
        alert("Đã hủy")
        break
      case null:
        alert("Đã hủy")
        break
      default:
        alert("Mật khẩu sai")
        break
    }
  }
    break
  case "":
    alert("Canceled")
    break
  case null:
    alert("Canceled")
    break
  default:
   alert("Tôi không biết bạn")
    break
}

//Cách 2:
let taikhoan = ID =>{
  ID = prompt("Nhập tên đăng nhập :")
  ID == "" || ID == null ? alert("Canceled") : ID == "Admin" ? mkhau() : alert("Tôi không biết bạn")
}
let mkhau = PASS =>{
  PASS = prompt("Hãy nhập mật khẩu :")
  PASS == "" || PASS == null ? alert("Đã hủy") : PASS == "mindX"? alert("Chào mừng") : alert("Mật khẩu sai")
}
taikhoan()

//BÀI 2:
//Cách 1:
function sosanh(y,z){
  if (y>z){
    return z
}
else{
  return y
}
}
  console.log("Số nhỏ nhất là :", sosanh(3,4))

//Cách 2:
function sosanh2(s,t){
  return s > t? t : t > s? s :"Equal";
}
console.log("Số nhỏ nhất là :", sosanh2(3,4))

//BÀI 5:
// Tìm số lớn nhất, nhỏ nhất trong mảng:
let arr2 = [32,54,90, 234, 534]
let max = Math.max(...arr2)
console.log("Giá trị lớn nhất là :",max)
let min = Math.min(...arr2)
console.log("Giá trị nhỏ nhất là :",min)

// Tính trung bình cộng của mảng:
let arr4 = [30,31,32,33,34,35,36,37,38]
let sum = 0
for (let i = 0; i < arr4.length; i++) {
    sum += arr4[i];
}
console.log("Trung bình cộng :",sum/arr4.length);

// Tính tổng các số chẵn có trong mảng:
let sum2 = 0
for (let a = 0; a<arr4.length; a++){
    if (arr4[a]%2 == 0){
        sum2 += arr4[a]
    }
}
console.log("Tổng các số chẵn :",sum2)

// Tính tổng các số lẻ có trong mảng:
let sum3 = 0
for (let b = 0; b< arr4.length; b++){
    if (arr4[b]%2 == 1){
        sum3 += arr4[b]
    }
}
console.log("Tổng các số lẻ :",sum3)

// Đếm các số chia hết cho 3:
let chia3 = () =>{
  let chia3 = 0
  for( let c = 0; c<arr4.length; c++){
    arr4[c]%3 == 0 ? chia3 +=1 : chia3+=0
  }
  return chia3
}
console.log("Số phần tử chia hết cho 3:", chia3());



