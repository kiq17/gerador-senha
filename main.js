const tamanho = document.querySelector('.display-pw-size span')
const btnGerador = document.querySelector('.gerador')
const inputResultado = document.querySelector('#pw-text')
const copiar = document.querySelector('i')
const sessaoInput = document.querySelector('.senha')


const maiusculo = document.getElementById('upper')
const minusculo = document.getElementById('lower')
const numero = document.getElementById('number')
const simbulo = document.getElementById('symbol')


const letraMaior = 'QAZWSXEDCRFVTGBYHNUJMIKOLPÇ'
const letraMenor = 'qazwsxedcrfvtgbyhnujmikolpç'
const num = '0123456789'
const sym = '/*-,<>.!@#$&*()=+^`[]{};'

let senhaCompleta = ''

eventos();
function eventos() {
    btnGerador.addEventListener('click', gerarSenha)
    copiar.addEventListener('click', textoCopiado)
}

function textoCopiado(){
    const senha = inputResultado.textContent

     if(senha){
        const texteArea = document.createElement('textarea')
        texteArea.value = senha
        document.body.appendChild(texteArea)
        texteArea.select()
        document.execCommand('copy')
        texteArea.remove();
        sessaoInput.classList.add('ativado')

        setTimeout(()=>{
            sessaoInput.classList.remove('ativado')
        }, 500)
    } 
}



function gerarSenha() {
    senhaCompleta = ''
    if (maiusculo.checked) senhaCompleta += todasMaiores()
    if (minusculo.checked) senhaCompleta += todasMenores()
    if (simbulo.checked) senhaCompleta += todasSimb()
    if (numero.checked) senhaCompleta += todasNum()

    if(maiusculo.checked || minusculo.checked || numero.checked || simbulo.checked ){

        completarSenha();
    } else{
        alert('Selecione algum parâmetro para que sua senha seja criada')
    }
}



function completarSenha() {
    while (senhaCompleta.length < parseInt(tamanho.textContent)) {
        const numAleatorio = getRandom()
        if (maiusculo.checked && numAleatorio === 0) senhaCompleta += todasMaiores()
        if (minusculo.checked && numAleatorio === 1) senhaCompleta += todasMenores()
        if (numero.checked && numAleatorio === 2) senhaCompleta += todasNum()
        if (simbulo.checked && numAleatorio === 3) senhaCompleta += todasSimb()
    }

    inputResultado.innerHTML = senhaCompleta
}

function aleatorio(max) {
    return Math.floor(Math.random() * max)
}

function getRandom(){
    return Math.floor(Math.random() * 4)
}

function todasMaiores() {
    return letraMaior[aleatorio(letraMaior.length)]
}

function todasMenores() {
    return letraMenor[aleatorio(letraMenor.length)]
}

function todasSimb() {
    return sym[aleatorio(sym.length)]
}

function todasNum() {
    return num[aleatorio(num.length)]
}

function mostrarVal(e) {
    tamanho.textContent = e
}
