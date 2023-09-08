function cd() {
    const d = {};
  
    for (let i = 0; i < 26; i++) {
      d[i + 1] = String.fromCharCode(97 + i);
    }
  
    for (let i = 1; i <= 10; i++) {
      d[26 + i] = i.toString();
    }
    return d;
}

function cd6(arr) {
    let re = "";
    const dc = cd(); 
    
    for (let i = 0; i < arr.length; i++) {
      const c = arr[i];
      const d = Object.values(dc).indexOf(c);
      re += d.toString();
    }
  
    return re;
}
const cc = cH(["6","c","1","7"]);
function cH(arr) {
    const dc = cd();
    let re = "";
  
    for (let i = 0; i < arr.length; i++) {
      const d = parseInt(arr[i], 16);
      const l = dc[d];
      re += l;
    }
  
    return re;
}

function validarTexto() {
    var textoIngresado = document.getElementById("texto").value;
    if (textoIngresado === cc + cd6(["b","c","d"])) {
        document.getElementById("resultado").textContent = "¡Flag correcto!";
    } else {
        document.getElementById("resultado").textContent = "Flag incorrecto.";
    }
}

document.getElementById("validarButton").addEventListener("click", validarTexto);