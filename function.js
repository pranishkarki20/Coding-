/*
function happybirthday( username , age ) {
    console.log("happy Birthday to you");
    console.log(`Happy birth da ${username}`) ;
    console.log(`your ${age}`);
}

happybirthday("Pranish" , 25 ) ;
happybirthday("Ram" , 45 );
*/

//Method 1 

 /*function add(x , y){
    let result = x+y ; 
    return result ; 
}

let answer = add ( 2 , 3 ) ;
console.log(answer)
*/

// Method 2 
 /*
function add(x, y){
    return x + y ; 
}

console.log(add(2, 7));
*/

const mybut = document.getElementById("button") ;
mybut.addEventListener("click" , function(){
let  a = document.getElementById("a").value ;
a = Number(a)
let  b = document.getElementById("b").value;
b = Number(b)
function add (a , b) {
    let result = a + b ;
    return result;
}

let answeer = add ( a , b) ;
document.getElementById("output").textContent =  `The sum of the digits are ${answeer}`;
})