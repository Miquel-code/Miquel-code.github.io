const button = document.querySelector(".btn-copiar");

const input = document.querySelector(".textoEncriptado");

const message = document.querySelector("#message");

button.addEventListener("click" ,function(){
    input.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
})