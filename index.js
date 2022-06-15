// pegar valor do "option value"

// pegar valor do "score1"

// pegar valor do "score2"

// pegar botoes

// se cliar "plus1Player1" add 1pt no "score1"

// se cliar "plus1Player2" add 1pt no "score2"

// se "score1" ou "score2" chegar no "option value" mudar a cor do ganhador para verde e perdedor para vermelho e desabilitar botoes "plus1Player1" e "plus1Player2"

// se cliar "reset" zerar tudo e recomeçar

const btnPlus1Player1 = document.querySelector("#plus1Player1");

const btnPlus1Player2 = document.querySelector("#plus1Player2");

const btnReset = document.querySelector("#reset");

let score1 = document.querySelector("#score1");

let updatedScorePlayer1 = 0;

let score2 = document.querySelector("#score2");

let updatedScorePlayer2 = 0;

let selector = document.querySelector("#selector");

let selectorValue = parseInt(selector.value);

let isGameOver = false;

function reset () {
    score1.textContent = 0
    score2.textContent = 0
    updatedScorePlayer1 = 0
    updatedScorePlayer2 = 0
    isGameOver = false;
    score1.classList.remove('winner', 'loser');
    score2.classList.remove('winner', 'loser');
}

selector.addEventListener("change", function () {
  selectorValue = parseInt(selector.value);
  reset();
});

btnPlus1Player1.addEventListener("click", function () {
    if(!isGameOver) {
        updatedScorePlayer1++;
        score1.textContent = updatedScorePlayer1;
        if (updatedScorePlayer1 === selectorValue) {
            isGameOver = true;
            score1.classList.add('winner');
            score2.classList.add('loser');
        }
    }
});

btnPlus1Player2.addEventListener("click", function () {
    if(!isGameOver) {
        updatedScorePlayer2++;
        score2.textContent = updatedScorePlayer2;
        if (updatedScorePlayer2 === selectorValue) {
            isGameOver = true
            score2.classList.add('winner');
            score1.classList.add('loser');
        }
    }
});

btnReset.addEventListener('click', reset)





