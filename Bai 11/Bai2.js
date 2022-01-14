function sum()
  {
      let nut1 = document.getElementById("nut1")
      let nut2 = document.getElementById("nut2")
      let nut3 = document.getElementById("nut3")
      let nut4 = document.getElementById("nut4")
      let so1 = document.myform.number1.value;
      let so2 = document.myform.number2.value;
      let ketqua1 = parseInt(so1) + parseInt(so2);
      let ketqua2 = parseInt(so1) - parseInt(so2);
      let ketqua3 = parseInt(so1) * parseInt(so2);
      let ketqua4 = parseInt(so1) / parseInt(so2);
    nut1.onclick = () =>{
      document.getElementById("add").value = ketqua1
    }
    nut2.onclick = () =>{
      document.getElementById("add").value = ketqua2
    }
    nut3.onclick = () =>{
      document.getElementById("add").value = ketqua3
    }
    nut4.onclick = () =>{
      document.getElementById("add").value = ketqua4
    }
    
    
  }