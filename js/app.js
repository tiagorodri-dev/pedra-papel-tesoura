const result = document.querySelector(".result");
const minhaPontuacao = document.querySelector(".minha-pontuacao");
const pontuacaoMaquina = document.querySelector(".pontuacao-maquina");

let minhaPontuacaoNumber = 0;
let pontuacaoMaquinaNumber = 0;

// arrow function que captura o clique
const playHuman = (humanChoice) => {
    resultado(humanChoice, playMachine())
}

// arrow function que busca a escolha do computador
const playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

// arrow function que executa o resultado do jogo
const resultado = (human, machine) => {
    console.log('Humano: ' + human + 'Máquina:' + machine);

    if (human === machine) {
        result.innerHTML = 'Deu empate!';
    }

    else if (
        (human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')
    ) {
        minhaPontuacaoNumber++;
        minhaPontuacao.innerHTML = minhaPontuacaoNumber;
        result.innerHTML = 'Você ganhou!'
    }

    else {
        pontuacaoMaquinaNumber++;
        pontuacaoMaquina.innerHTML = pontuacaoMaquinaNumber;
        result.innerHTML = 'Computador ganhou!';
    }
}