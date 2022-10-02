function encriptador() {
    var texto = document.querySelector("#textoNormal").value;
    var textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi,"imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    document.querySelector(".textoEncriptado").value = textoEncriptado;

    document.querySelector("#textoNormal").value;
}

var btnEncripta = document.querySelector(".btn-encripta");
btnEncripta.onclick = encriptador;

function desencriptador() {
    var texto = document.querySelector("#textoNormal").value;
    var textoEncriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".textoEncriptado").value = textoEncriptado;
    document.querySelector("#textoNormal").value;
}

var btnDesencripta = document.querySelector(".btn-desencripta");
btnDesencripta.onclick = desencriptador;