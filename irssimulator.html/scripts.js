 function incomechecking(){
   const incomeinvoice = document.getElementById('income').value; 
   const incomeregistry = parseFloat(incomeinvoice);
  if(incomeregistry >= 8000000){
    let maxcut = (incomeregistry - 8000000);
    let maxrate = (maxcut * 0.35);
    document.getElementById('x').textContent = (maxrate + 2410000);

  } else if(incomeregistry > 2000000 && incomeregistry < 8000000) {
    let highmidcut = (incomeregistry - 2000000);
    let highmidrate = (highmidcut * 0.32);
    document.getElementById('x').textContent = (highmidrate + 490000);

  } else if(incomeregistry > 800000 && incomeregistry < 2000000) {
    let midcut = (incomeregistry - 800000);
    let midrate = (midcut * 0.30);
    document.getElementById('x').textContent = (midrate + 130000);

  } else if (incomeregistry > 400000 && incomeregistry < 800000){
    let lowmidcut = (incomeregistry - 400000);
    let lowmidrate = (lowmidcut * 0.25); 
    document.getElementById('x').textContent = (lowmidrate + 30000);

  } else if (incomeregistry > 250000 && incomeregistry < 400000){
    let mincut = (incomeregistry - 250000);
    let minrate = (mincut * 0.20); 
    document.getElementById('x').textContent = (minrate);

  } else if (incomeregistry <= 250000 && incomeregistry >= 1){
    document.getElementById('x').textContent = ("No taxes for you...");
    
  } else if (incomeregistry < 0){
    document.getElementById('x').textContent = ("DAMN YOU'RE BROKE");
  }
 }
