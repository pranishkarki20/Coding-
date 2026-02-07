
//let username = window.prompt("What is your name");
//console.log(username);

const button = document.getElementById("button");

/* button.addEventListener("click" , function(){
  let username = document.getElementById("Username").value
    console.log(username)
    document.getElementById("myh1").style.color = "Blue";
}) */

/*
button.addEventListener("click" , function(){
    let length = document.getElementById("length").value ; 
    let breadth = document.getElementById("breadth").value;

    let area = length * breadth ;
    let perimeter = (2*(length+breadth)); 
    document.getElementById("print").textContent = area;
    document.getElementById("print").textContent = perimeter;
})
*/

/*button.addEventListener("click" ,function(){
    let username = document.getElementById("username").value ;
    let Password = document.getElementById("password").value;
    username = username.toUpperCase();
    Password = Password.toLowerCase();
    document.getElementById("print").textContent = "Your user name is " + username;
    document.getElementById("print2").textContent = "Your password is" + Password;
}) */

button.addEventListener("click" , function(){
    let  Username = document.getElementById("username").value 
    let Password = document.getElementById("password").value
    let uresult =  Username.startsWith(" ");
    let presult = Password.startsWith(" ")
    let ppresult = Password.endsWith(" ");

    if(uresult){
        let reu = Username.trim();
        document.getElementById("print1").textContent = "The Space from the username was removed " + reu ;
    }
    else{
        document.getElementById("print1").textContent ="Good Person";
    }

    if(presult && ppresult){
        document.getElementById("print").textContent = "Do not write space on the begining and at the end" 
    }
    else if(presult){
        document.getElementById("print").textContent = "Do not write space on the begining "  
    }

    else if(ppresult){
        document.getElementById("print").textContent = "Do not write space at the end"
    }

    else {
        document.getElementById("print").textContent = "Good"
    };
})