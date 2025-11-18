
    function include(){

    const quoteonquoteemployee = {
    legalgovernmentname: "placeholder<3",
    winstreak: 1,
    comborate: 1,
    grossscore: 0,
    messedup: 1,
    totalscore: 0,

};



    let mafiaTable = document.getElementById("mafiaTable");
    
    let newRow = mafiaTable.insertRow(-1);

    quoteonquoteemployee.legalgovernmentname = document.getElementById("name").value;

    quoteonquoteemployee.winstreak = document.getElementById("days").value;

    quoteonquoteemployee.comborate = document.getElementById("rate").value;

    quoteonquoteemployee.grossscore = quoteonquoteemployee.winstreak * quoteonquoteemployee.comborate;

    quoteonquoteemployee.messedup = document.getElementById("deduction").value;

    quoteonquoteemployee.totalscore = quoteonquoteemployee.grossscore - quoteonquoteemployee.messedup;

    indexCell = newRow.insertCell(0);
    let i = 1;
    for (const[key, value] of Object.entries(quoteonquoteemployee)){
        indexCell = newRow.insertCell(i);
        
        if(i === 4){
            indexCell.innerHTML = quoteonquoteemployee.grossscore;
        }else if(i === 6){
            indexCell.innerHTML = quoteonquoteemployee.totalscore;
        } else{
            indexCell.innerHTML = value;
        }
        i++;
    };
    tabledindex++;
};
function fired(){
    const takecareofit = document.getElementById("kill").value;
    const toldhim = parseFloat(takecareofit);
         if(toldhim !== 0){
    mafiaTable.deleteRow(toldhim); 
         } else {};
};
