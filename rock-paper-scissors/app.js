const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const result = document.getElementById('result');
const btns = document.querySelectorAll('button');

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    // computerChoice.textContent = btns[Math.floor(Math.random() * btns.length)].textContent;
    // userChoice.textContent = btn.textContent;
    setChoice(e);
    let uc = e.target.id;
    let cc = computerChoice.textContent;
    if(uc === 'rock' && cc === 'scissors' || uc === 'paper' && cc === 'rock' || uc === 'scissors' && cc === 'paper'){
      result.textContent = "Ha ganado el usuario";
    } else if( uc === cc ){
      result.textContent = "Empate";
    } else {
      result.textContent = "Ha ganado el computador";
    }
  })
})

function setChoice(element){
  computerChoice.textContent = btns[Math.floor(Math.random() * btns.length)].id;
  userChoice.textContent = element.target.id;
}


