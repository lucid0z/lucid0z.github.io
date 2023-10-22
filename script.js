const hint = document.getElementById('guess-hint')
const btn = document.getElementById('button');
const text = document.getElementById('input-text')
let num = Math.floor(
    Math.random() * 100);
let hints = 5;
let tries = 1;


btn.onclick = function(){
    if(hints===0){
        startGuess();
        
    } else{
        
        numberGuess();
    }
}

function startGuess(){
num = Math.floor(Math.random() * 100);
    text.value = '';
    hints=5;
    hint.style.visibility = 'hidden';

btn.innerText = 'Guess';
}

function numberGuess(){
    

    if(text.value != ''){
        hint.style.visibility = 'visible';
        console.log('Guessed number: ' + text.value);
        if(text.value === num){
            hint.innerText = 'You guessed correctly! It was ' + num + ', guessed in ' + tries + ' guesses.';
            
        } else if (text.value < num){
            hints--;
            tries++;
            hint.innerText = 'You guessed lower! ' + hints + ' guesses left.';

        } else if (text.value > num){
            hints--;
            tries++;
            hint.innerText = 'You guessed higher! ' + hints + ' guesses left.'; 
        } 
        if(hints == 0){
            hint.innerText = 'You ran out of guesses! It was '+ num +'!';
            btn.innerText = 'Start Again';
        }
    }
    
}