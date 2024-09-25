var sexo = document.getElementsByTagName('sexo').value

var peso = document.querySelector('#peso')
var altura = document.querySelector('#altura')
var idade = document.querySelector('#idade')


var resultado = document.querySelector('span')

function calcular() {
    if(sexo == 1){
        //resultado.innerHTML = ((13.75 * parseInt(peso.value)) + (5 + parseInt(altura.value)) - (6.75 * parseInt(idade.value)) + (66.5))
        resultado.innerHTML = 1
    }
    else{
        //resultado.innerHTML = ((9.56 * parseInt(peso.value)) + (1.85 + parseInt(altura.value)) - (4.68 * parseInt(idade.value)) + (65.71))
        resultado.innerHTML = 0
    }
    

}
