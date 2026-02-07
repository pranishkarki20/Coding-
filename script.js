//console.log(`Hello`);

//window.alert('This is an alert');

//document.getElementById("myH1").textContent = "Hello";
//document.getElementById("myP").textContent="I  like a java"


//let usrname = window.prompt("What is your username");
///console.log(username)

//document.getElementById("myh1").style.color="red";
//document.getElementById("mysubmit").addEventListener("click" , () =>{
//let username ;
//let password ;
//document.getElementById("mysubmit").onclick=function(){
 //   document.getElementById("myh1").style.color="Blue";
 // //  username =document.getElementById("mytext").value;
 //   password = document.getElementById("Password").value//
 //   document.getElementById("myh1").textContent = `Hello ${username}`;
 //   document.getElementById("mysubmit").textContent ='Clicked';
  //  }
//});

const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const countlabel = document.getElementById("countlabel");

let count = 0;

increase.onclick = function() {
  count++;
  countlabel.textContent = count;
};
decrease.onclick = function(){
    count--;
    countlabel.textContent = count ;
}
reset.onclick = function(){
    count = 0 ;
    countlabel.textContent=count; 
}

