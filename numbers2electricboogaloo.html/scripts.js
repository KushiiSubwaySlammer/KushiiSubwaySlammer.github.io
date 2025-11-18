const thenumberstring = document.getElementById('enum').value; 
  const thenumber = parseFloat(thenumberstring);
  
  function factorial(){
    const thenumberstring = document.getElementById('enum').value; 
    const thenumber = parseFloat(thenumberstring);

    let n = 2;
    let m = 1;
    while(n <= thenumber){
        m *= n;
        n++;
    }
    document.getElementById('x').textContent = (m);
    return m;
  }

  function sumofn(){
    let n = 1;
    let m = 0;
    const thenumberstring = document.getElementById('enum').value; 
    const thenumber = parseFloat(thenumberstring);
    do{
        m += n;
        n++;
    }while(!(n > thenumber));
    document.getElementById('x').textContent = (m);
  }

  function average(){
    const thenumberstring = document.getElementById('enum').value; 
    const thenumber = parseFloat(thenumberstring);
     let m = 0;
  for (let n = 1; n <= thenumber; n++) {
    m += n;
  }
  document.getElementById('x').textContent = (m / thenumber);
  }