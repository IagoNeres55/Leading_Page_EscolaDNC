
var leonardo = window.document.getElementById("Leonardo")
var samantha = window.document.getElementById("Samantha")
var bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var setaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {

    leonardo.style = "display: none;"
    bruna.style = "display: flex;"
    setaDireita.style = "display: none;"
    setaEsquerda.style = "display: flex; margin-top:55px"

}

function RolarParaEsquerda() {
    leonardo.style = "display: flex"
    bruna.style = "display: none"
    setaDireita.style = "display: flex: margin-top:55px"
    setaEsquerda.style = "display: none"

}

