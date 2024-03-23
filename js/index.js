let resultado = document.getElementById('resultado');

function asignar(valor){
   //ShortHand
    resultado.value += valor; 
   

}
let calcular = () => {
    resultado.value = eval(resultado.value); 
}
let limpiar = () => {
    resultado.value = '';
}

let raíz = () => {
    resultado.value = Math.sqrt(parseFloat(resultado.value));
}
let potencia = () => {
    resultado.value = Math.pow(parseFloat(resultado.value),2);
}
let potenciaCubo = () => {
    resultado.value = Math.pow(parseFloat(resultado.value),3);
}
let PI = () => {
    resultado.value = Math.PI;
    }


