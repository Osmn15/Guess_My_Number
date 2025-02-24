'use strict';
let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secret_number);

document.querySelector('.check-btn').addEventListener('click', function() {
    let guess_number = Number(document.querySelector(".guess-input").value);

    if (!guess_number) {
        document.querySelector(".message").textContent = "⛔ No number!";
    } else if (guess_number === secret_number) {
        document.querySelector(".message").textContent = "🎉 Correct number!";
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".hscore").textContent = Math.max(highscore,score);
        score--;
    
        document.querySelector('.number').textContent=guess_number;
    }
    else if(guess_number>secret_number){
        document.querySelector(".message").textContent="📈 Too high";
        score--;
        highscore=0
        document.querySelector(".goal").textContent=score;
    }
    else if(guess_number<secret_number){
        document.querySelector(".message").textContent=" 📉Too low";
        score--;
        highscore=0
        document.querySelector(".goal").textContent=score;   
    }
    if(score<1){
        document.querySelector(".message").textContent="🛑 Game over!";
        document.querySelector(".goal").textContent=0;
        document.querySelector(".hscore").textContent=0;
    }
});
document.querySelector(".reset-btn").addEventListener('click',function(){
    document.querySelector(".message").textContent="Start guessing...";
    document.querySelector(".goal").textContent=20;
    document.querySelector(".hscore").textContent=0;
    document.querySelector("body").style.backgroundColor="#3f3939";
    document.querySelector('.guess-input').value = "";
    document.querySelector('.number').textContent="?";
    
})