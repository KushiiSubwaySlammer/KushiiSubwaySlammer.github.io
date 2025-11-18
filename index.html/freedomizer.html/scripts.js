
 function ftc(){
    const freedomstring = document.getElementById('fnum').value; 
  const freedomnumber = parseFloat(freedomstring);
  
    document.getElementById('x').textContent = (freedomnumber - 32) * 5/9;
 }
 function ctf(){
    const freedomstring = document.getElementById('fnum').value; 
  const freedomnumber = parseFloat(freedomstring);
   document.getElementById('x').textContent = (freedomnumber * 9/5) + 32;
 }

 function mtf(){
 const freedomstring = document.getElementById('fnum').value; 
  const freedomnumber = parseFloat(freedomstring);
   document.getElementById('x').textContent = (freedomnumber * 3.28084);
 }
 
 function ftm(){
   const freedomstring = document.getElementById('fnum').value; 
  const freedomnumber = parseFloat(freedomstring);
   document.getElementById('x').textContent = (freedomnumber * 0.3048);
 
 }