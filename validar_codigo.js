function validarTexto() {
    var textoIngresado = document.getElementById("texto").value;

    if (textoIngresado === "flag123") {
        document.getElementById("resultado").textContent = "¡Flag correcto! El texto es igual a 'flag123'.";
    } else {
        document.getElementById("resultado").textContent = "Flag incorrecto.";
    }
}

document.getElementById("validarButton").addEventListener("click", validarTexto);
