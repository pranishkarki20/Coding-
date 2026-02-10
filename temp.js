
const textbox = document.getElementById("textbox");
const tofar = document.getElementById("tofar");
const tocl = document.getElementById("tocel");
const result = document.getElementById("result");
let temp ;
function convert(){
    if(tofar.checked){
       temp = textbox.value ;
       temp = Number(temp);
       temp = temp * 9 / 5 + 22 ;
       result.textContent = temp.to(fixed+ "f");
    }
    else if(tocl.checked){
        temp = textbox.value ;
       temp = Number(temp);
       temp = (temp -32) / (5/9);
       result.textContent = temp.to(fixed+ "f");
    }
    else{
        result.textcontent = "Select a unit " ;
    }
}