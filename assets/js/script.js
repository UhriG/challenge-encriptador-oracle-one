
var btnEncriptar = document.querySelector('#btnEncriptar');
var btnDesencriptar = document.querySelector('#btnDesencriptar');
var resultado = document.querySelector('#resultado');
var btnCopiar = document.querySelector('#btnCopiar');

// Encriptar
btnEncriptar.addEventListener('click', function(e) {
    e.preventDefault();

    var textoD = document.querySelector('#texto').value;
    var encriptado = '';
    for (var i = 0; i < textoD.length; i++) {
        switch (textoD[i]) {
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
                encriptado += textoD[i];
                break;
        }
    }
    resultado.innerHTML = encriptado;
})

// Desencriptar
btnDesencriptar.addEventListener('click', function(e) {
    e.preventDefault();
   
    var textoE = document.querySelector('#texto').value;    

    textoE = textoE.replace(/enter/g, 'e');
    textoE = textoE.replace(/imes/g, 'i');
    textoE = textoE.replace(/ai/g, 'a');
    textoE = textoE.replace(/ober/g, 'o');
    textoE = textoE.replace(/ufat/g, 'u');  

    resultado.innerHTML = textoE;

})

// Copiar al portapapeles
btnCopiar.addEventListener('click', function(e) {
    e.preventDefault();
    navigator.clipboard.writeText(resultado.innerHTML);
})