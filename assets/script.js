const tela = document.querySelector('#tela');

function insert(num){
    tela.innerHTML += num
}

function limpar(){
    tela.innerHTML = ''
}

function backspace(){
    var menosUm = document.querySelector('#tela').innerHTML
    document.querySelector('#tela').innerHTML = menosUm.substring(0, menosUm.length -1)
}

function calcular(){
    var resultadoFinal = tela.innerHTML
    if(resultadoFinal){
        tela.innerHTML = eval(resultadoFinal)
    }
}