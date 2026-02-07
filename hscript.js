const Pi = 3.14 ;
let radius ;
let circumference ;

document.getElementById("button").onclick = function(){
    radius = document.getElementById("radius").value ; 
    radius = Number(radius);
    circumference = 2 * Pi * radius ; 
    document.getElementById("myh4").textContent = "The Circumferecne of the circle is " + circumference; 
}