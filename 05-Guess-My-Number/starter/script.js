'use strict';
let helo=Math.trunc(Math.random()*20+1);
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess){
        document.querySelector('.message').textContent='Noo Number'
    }else if(guess>helo){
        document.querySelector('.message').textContent='Too high Jatta'
    }else if(guess<helo){
        document.querySelector('.message').textContent='Too low Tatta'
    }
    else if(guess===helo){
        document.querySelector('.message').textContent='Hurraaaaaaaayyyyyyy'
document.querySelector('.number').textContent=helo;
document.querySelector('body').style.backgroundColor='#60b347'
document.querySelector('.number').style.width='30rem'

    }
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    helo=Math.trunc(Math.random()*20+1);
    document.querySelector('.message').textContent='Start guessing...'
})