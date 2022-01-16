function verify(){
  var username = document.getElementById("username").value
  var atposition = username.indexOf("@")
  var dotposition = username.lastIndexOf(".")
  var matkhau = document.getElementById("matkhau").value
  if (atposition < 1 || dotposition < atposition+2 || username.length <= dotposition+2){
  document.getElementById("error").innerHTML = "Bạn phải nhập Email"
  document.getElementById("error").style.color = "red";
  return false
  }
  else{
    if(matkhau ==""){
    document.getElementById("error").innerHTML = "Bạn chưa nhập mật khẩu"
    document.getElementById("error").style.color = "red";
    return false
  }
    if(matkhau.length<8){
    document.getElementById("error").innerHTML = "Mật khẩu sai"
    document.getElementById("error").style.color = "red";
    return false
  }
    else{
    document.getElementById("error").innerHTML = "Mật khẩu đúng"
    document.getElementById("error").style.color = "DodgerBlue";
  }
  }
  }
  