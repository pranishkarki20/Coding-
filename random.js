const mybutton = document.getElementById("mybutton");
const mylabel = document.getElementById("mylabel1");
const mylabe2 = document.getElementById("mylabel2");
const mylabe3 = document.getElementById("mylabel3");
const min = 1 ; 
const max = 6 ;
let randm; 

mybutton.onclick = function(){
    randm = Math.floor(Math.random() * max) + min ;
    let num = Math.floor(Math.random () * max) + min ; 
    let  num2 = Math.floor(Math.random() * max) + min ;
    mylabel.textContent = randm ; 
    mylabe2.textContent = num ;
    mylabe3.textContent = num2 ;
};
