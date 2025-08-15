function calculaRaiz(numero) {
    var raiz = Math.sqrt(numero);
    alert("A raiz quadrada de " + numero + " é " + raiz);
}

function escreveNaDiv(texto) {
    document.getElementById("minhaDiv").innerHTML = texto;
}

function escreveTextoDinamico() {
    var texto = prompt("Digite um texto qualquer:");
    document.getElementById("minhaDiv2").innerHTML = texto;
}

function contaAteN() {
    var n = prompt("Digite um número para contar até ele:");
    var divResultado = document.getElementById("desafioDiv");
    divResultado.innerHTML = "";
    
    if (n && !isNaN(n)) {
        for (var i = 1; i <= n; i++) {
            divResultado.innerHTML += i + "<br>";
        }
    } else {
        alert("Por favor, digite um número válido.");
    }
}