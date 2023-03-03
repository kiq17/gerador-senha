/* elementos HTML */
const inputRange = document.getElementById("range");
const spanSize = document.querySelector(".display-pw-size span");
const minusculo = document.getElementById("lower");
const maiusculo = document.getElementById("upper");
const simbolo = document.getElementById("symbol");
const numero = document.getElementById("number");
const btnSubmit = document.querySelector(".gerador");
const mostarSenha = document.getElementById("pw-text");
const copiar = document.querySelector(".senha");

/* variaveis e constantes */
let tamanhoSenha = "";
let senhaCompleta = "";
const letrasMaiusculas = "QWERTYUIOPASDFGHJKLÇZXCVBNM";
const letrasMinusculas = letrasMaiusculas.toLowerCase();
const simbolos = "!@#$&*()-+,.><{}[]=_|/";
const numeros = "1234567890";

/* eventos */
inputRange.addEventListener("change", (e) => {
    tamanhoSenha = e.target.value;
    spanSize.innerHTML = e.target.value;
});

btnSubmit.addEventListener("click", () => {
    escolherOpcao();
    mostarSenha.innerHTML = senhaCompleta;
});

copiar.addEventListener("click", copiarSenha);


/* inserir caracteres de acordo com o que foi seelcionado pelo usuário */
function escolherOpcao() {
    senhaCompleta = ""
    if (numero.checked) senhaCompleta += getNumero();
    if (simbolo.checked) senhaCompleta += getSimbolo();
    if (minusculo.checked) senhaCompleta += getLetraMinuscula();
    if (maiusculo.checked) senhaCompleta += getLetraMaiuscula();

    if (numero.checked || simbolo.checked || minusculo.checked || maiusculo.checked) {
        completarSenha();
    } else {
        alert("Selecione uma opção");
    }
}

/* completar a senha até o tamanho escolhido */
function completarSenha() {
    while (senhaCompleta.length < Number(tamanhoSenha)) {
        let random = Math.floor(Math.random() * 4);
        if (numero.checked && random == 0) senhaCompleta += getNumero();
        if (simbolo.checked && random == 1) senhaCompleta += getSimbolo();
        if (minusculo.checked && random == 2) senhaCompleta += getLetraMinuscula();
        if (maiusculo.checked && random == 3) senhaCompleta += getLetraMaiuscula();
    }
}


function copiarSenha() {
    if(senhaCompleta.length > 0){
        const textArea = document.createElement("textarea");
        textArea.value = senhaCompleta;
        document.body.append(textArea);
        textArea.select()
        document.execCommand('copy')
        textArea.remove();
        copiar.classList.add('ativado')

        setTimeout(()=>{
            copiar.classList.remove('ativado')
        }, 500)
    }
}

function getLetraMaiuscula() {
    return letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)];
}

function getLetraMinuscula() {
    return letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
}

function getSimbolo() {
    return simbolos[Math.floor(Math.random() * simbolos.length)];
}

function getNumero() {
    return numeros[Math.floor(Math.random() * numeros.length)];
}