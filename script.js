
function modoEscuro() {
    const btModoEscuro = document.querySelector(".btModoEscuro");
    const body = document.querySelector("body");
    
    body.classList.toggle("pg-modoEscuro");
    btModoEscuro.classList.toggle("bt-modoEscuro");
}
