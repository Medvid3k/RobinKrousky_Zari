let counter = document.getElementById("counter")
let click = document.getElementById("click")
let doubleclick = document.getElementById("doubleclick")
let autoclick = document.getElementById("autoclicker")
let upgrade = document.getElementById("upgrade")
let autoclickInterval
let score=1490;
let double=0;

const game = () => {
    score=score+double;
    score++
    counter.innerText="Score:  " +score;
}
 click.onclick=game;

const buyautoclick = () => {
    if(score>=500){
        score=score-500
        autoclick.style.display="none";
        autoclickInterval = setInterval(() =>{
            score++;
            counter.innerText="Score:" +score;
            }, 500)
    }
}
autoclick.onclick=buyautoclick;

const buyupgrade = () => {
    if(score>=1000){
        score=score-1000
        upgrade.style.display="none";
        autoclickInterval = setInterval(() =>{
            score++;
            counter.innerText="Score:" +score;
        }, 100)
    }
}
upgrade.onclick=buyupgrade;


const doubleclicker = () => {
  if (score>=100){
      score=score-100;
      double=double+1;
      doubleclick.style.display="none";

  }
}
doubleclick.onclick=doubleclicker;