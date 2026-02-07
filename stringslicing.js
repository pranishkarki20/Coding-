//const fullname = "Pranish Karki";
//let fristname = fullname.slice(0 ,7);
//let lastname = fullname.slice(8);
//let fristchar = fullname.slice(0 , 1);
//let lastchar = fullname.slice (-1);


// let fristname = fullname.slice(0 ,fullname.indexOf(" " ));
/*let lastname = fullname.slice(fullname.indexOf(" ") + 1 );
console.log(fristname);
console.log(lastname);
*/

/*const email = "pranishkarki@gmail.com";

let username = email.slice(0 , email.indexOf("@"));
let extenison = email.slice( email.indexOf("@"));
let user = username.toUpperCase();
console.log( 'Helloe '+ user);
console.log(extenison);
*/
const button = document.getElementById("button");

button.addEventListener("click", function () {
    const username = document.getElementById("details1").value;
    const password = document.getElementById("detail2").value;

    const result = password.startsWith(username);

    if (result) {
        document.getElementById("myh3").textContent =
            "Username and password cannot be the same";
    } else {
        document.getElementById("myh3").textContent =
            "Login successful";
    }
});
