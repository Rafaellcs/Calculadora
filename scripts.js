function calculateTip(event) { 
   event.preventDefault();
   let bill = document.getElementById("bill").value; 
   let service = document.getElementById("service").value; 
   let pessoas = document.getElementById("pessoas").value; 
      if (bill == "" | service == '') {
         alert("Dados não preenchidos corretamente") 
         return;
      }
      if   ( pessoas < 0  ) { 
         alert("número de pessoas imposível. ")

      }
      if(service == "none"){
         alert("0insira como foi o serviço")

      }
      if (pessoas == "" | pessoas <= 1 ){
         pessoas = 1; 
         document.getElementById("each").style.display = "none"
      } else {
         document.getElementById("each").style.display = "block"

      }
      let total = (bill * service) / pessoas
      total = total.toFixed(2);
      document.getElementById("tip").innerHTML = total; 
      document.getElementById('totaltip').style.display = "block";


}

document.getElementById('totaltip').style.display = "none";
document.getElementById('each').style.display = "none";


document.getElementById('tipsform').addEventListener('submit', calculateTip);  

