const min =  1 ;
const max  = 100 ; 

const answer = Math.floor(Math.random()*(max-min+1)) + min;

let attemps = 0 ; 

let guess ; 
let running = true ;

while(running){
    guess=window.prompt(`Enter the number between ${min} - ${max}`);
    guess = Number(guess)

    if (isNaN (guess)){
        window.alert("Please enter a valid number")
    }
    else if (guess < min || guess > max){
        window.alert("Please Enter a valid Number")
    }
    else {
        attemps++;
        if(guess < answer){
            window.alert("too low");
        }
        else if( guess > answer){
            window.alert("TO high ");
        }

        else {
            window.alert(`You are Correct! The answer was ${answer}.`);
            running = false;
        }
    }
}