
let btnEncriptar = document.querySelector('#btnEncriptar');
let btnDesencriptar = document.querySelector('#btnDesencriptar');
let resultado = document.querySelector('#resultado');
let btnCopiar = document.querySelector('#btnCopiar');
let texto = document.querySelector('#texto');

// Validar que solo se pueda ingresar minusculas y letas sin tilde
texto.addEventListener('keyup', () => { 
    texto.value = validarTexto(texto);
});

// Encriptar
btnEncriptar.addEventListener('click', (e) => {
    e.preventDefault();

    let texto = document.querySelector('#texto').value;
    
    resultado.innerHTML = encriptar(texto);
})

// Desencriptar
btnDesencriptar.addEventListener('click', (e) => {
    e.preventDefault();
   
    let texto = document.querySelector('#texto').value;          
    resultado.innerHTML = desencriptar(texto);

})

// Copiar al portapapeles
btnCopiar.addEventListener('click', (e) => {
    e.preventDefault();

    navigator.clipboard.writeText(resultado.innerHTML);
   
    texto.value = '';

    let msg = document.querySelector('.msg');

    msg.classList.add('show');

    setTimeout(() => {
        msg.classList.remove('show');
    } , 1000);

})

const validarTexto = (texto) => {
  return  texto.value.toLowerCase().replace(/[áàâã]/g, 'a').replace(/[éèê]/g, 'e').replace(/[íìî]/g, 'i').replace(/[óòôõ]/g, 'o').replace(/[úùû]/g, 'u');
}

const encriptar = (texto) => {
    let encriptado = '';
    for (let i = 0; i < texto.length; i++) {
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

const desencriptar = (texto) => {
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');

    return texto;
}

