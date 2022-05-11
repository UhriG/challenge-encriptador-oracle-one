
let btnEncriptar = document.querySelector('#btnEncriptar');
let btnDesencriptar = document.querySelector('#btnDesencriptar');
let resultado = document.querySelector('#resultado');
let btnCopiar = document.querySelector('#btnCopiar');
let texto = document.querySelector('#texto');

texto.addEventListener('keyup', function(){
 
    texto.value = validarTexto(texto);
});

// Encriptar
btnEncriptar.addEventListener('click', function(e) {
    e.preventDefault();

    let texto = document.querySelector('#texto').value;
    
    resultado.innerHTML = encriptar(texto);
})

// Desencriptar
btnDesencriptar.addEventListener('click', function(e) {
    e.preventDefault();
   
    let texto = document.querySelector('#texto').value;          
    resultado.innerHTML = desencriptar(texto);

})

// Copiar al portapapeles
btnCopiar.addEventListener('click', function(e) {
    e.preventDefault();
    navigator.clipboard.writeText(resultado.innerHTML);
})

function validarTexto(texto){
  return  texto.value.toLowerCase().replace(/[áàâã]/g, 'a').replace(/[éèê]/g, 'e').replace(/[íìî]/g, 'i').replace(/[óòôõ]/g, 'o').replace(/[úùû]/g, 'u');
}

function encriptar(texto){
    var encriptado = '';
    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'e':
                encriptado += 'enter';
                break;
            case 'i':
                encriptado += 'imes';
                break;
            case 'a':
                encriptado += 'ai';
                break;
            case 'o':
                encriptado += 'ober';
                break;
            case 'u':
                encriptado += 'ufat';
                break;
            default:
                encriptado += texto[i];
                break;
        }
    }

    return encriptado;
}

function desencriptar(texto){
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');

    return texto;
}

