
const textbox = document.getElementById("textbox");
const tofar = document.getElementById("tofar");
const tocl = document.getElementById("tocel");
const result = document.getElementById("result");
let temp ;
function convert(){
    if(tofar.checked){
       temp = textbox.value ;
       temp = Number(temp);
       temp = temp * 9 / 5 + 32 ;
       result.textContent = temp.toFixed(2) + "°F";
    }
    else if(tocl.checked){
        temp = textbox.value ;
       temp = Number(temp);
       temp = (temp -32) / (9/5);
       result.textContent = temp.toFixed(2) + "°C";
    }
    else{
        result.textContent = "Select a unit " ;
    }
}