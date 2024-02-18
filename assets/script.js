let textarea = document.querySelector("textarea");
let botaoCripto = document.getElementById("botaoCripto")
let botaoDescripto = document.getElementById("botaoDescripto")

textarea.addEventListener("keypress", (e) => {
    if(!checkChar(e)) {
        e.preventDefault();
    }
});

function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);
    const pattern = "[a-zA-Z0-9]";

    if(char.match(pattern)) {
        return true;
    } else {
        console.log("Caracter especial digitado " + char);
    }
/*faltou fechar o parenteses */
}

    textarea.addEventListener("keypress", () => {
        if(textarea.value === "" && textarea.value === null) {
            botaoCripto.classList.remove("criptografar");
            botaoCripto.classList.add("desabilitado")

            botaoDescripto.classList.remove("descriptografar");
            botaoDescripto.classList.add("desabilitado")
        }

        botaoCripto.disabled = false;
        botaoCripto.classList.remove("desabilitado")
        botaoCripto.classList.add("criptografar")

        botaoDescripto.disabled = false;
        botaoDescripto.classList.remove("desabilitado")
        botaoCripto.classList.add("descriptografar")

    })

    textarea.addEventListener("paste", () => {
        if(textarea.value === "" && textarea.value === null) {
            botaoCripto.classList.remove("criptografar");
            botaoCripto.classList.add("desabilitado")

            botaoDescripto.classList.remove("descriptografar");
            botaoDescripto.classList.add("desabilitado")

    }

    botaoCripto.disabled = false;
    botaoCripto.classList.remove("desabilitado")
    botaoCripto.classList.add("criptografar")

    console.log("Entrou aqui")

    botaoDescripto.disabled = false;
    botaoDescripto.classList.remove("desabilitado")
    botaoCripto.classList.add("descriptografar")

});

function carregaPagina() {
    let textarea = document.querySelector("textarea")
    let resultado = document.getElementById("resultado")
    let imagem = document.querySelector("aside img")
    let asideP = document.querySelector("aside p")
    let asideH2 = document.querySelector("aside h2")
    let botaoCopiar = document.querySelector("#copiar")

    resultado.style.display = "none";
    botaoCopiar.style.display = "none";

    imagem.style.display="block";
    asideP.style.display="block";
    asideH2.style.display="block";
    textarea.focus();
}

function criptografar() {
    let textarea = document.querySelector("textarea")
    let resultado = document.getElementById("resultado")
    let imagem = document.querySelector("aside img")
    let asideP = document.querySelector("aside p")
    let asideH2 = document.querySelector("aside h2")
    let botaoCopiar = document.querySelector("#copiar")

    resultado.style.display = "block";
    botaoCopiar.style.display = "block";

    imagem.style.display="none";
    asideP.style.display="none";
    asideH2.style.display="none";

    let texto = textarea.value
    /*to lower case */
        .toLowerCase()
        .normalize("NFD")
        /*correcao do 0 na frente do 3 */
        .replace(/[\u0300-\u036f]/g, "")

    console.log(texto)

    cripto = texto 
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")

    resultado.innerText = cripto;

    resultado.style.color = "#0A3871"

    textarea.value = "";

    botaoCripto.classList.remove("criptografar");
    botaoCripto.classList.add("desabilitado")

    botaoDescripto.classList.remove("descriptografar");
    botaoDescripto.classList.add("desabilitado")

    textarea.focus();

}

function descriptografar() {
    let textarea = document.querySelector("textarea")
    let resultado = document.getElementById("resultado")
    let imagem = document.querySelector("aside img")
    let asideP = document.querySelector("aside p")
    let asideH2 = document.querySelector("aside h2")
    let botaoCopiar = document.querySelector("#copiar")

    resultado.style.display="block"
    
    resultado.style.color = "#0A3871"

    botaoCopiar.style.display="block"

    imagem.style.display="none";
    asideP.style.display="none";
    asideH2.style.display="none";

    let texto = textarea.value;

    descripto = texto 
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")

    resultado.innerText = descripto;

    textarea.value=""

    botaoCripto.classList.remove("criptografar");
    botaoCripto.classList.add("desabilitado")

    botaoDescripto.classList.remove("descriptografar");
    botaoDescripto.classList.add("desabilitado")

    textarea.focus();
}

function copiar() {
    /*getElementById */
    let resultado = document.getElementById("resultado")

    /*innexText */
    navigator.clipboard.writeText(resultado.innerText)
        .then(() => {
            exibirAlerta("Texto copiado!")
        })
        .catch((err) => {
            console.error("Erro ao copiar texto: ", err)
        })
}

function exibirAlerta(mensagem) {
    const modal = document.createElement("div");

    //position = "fixed"
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.backgroundColor = "#fff";
    modal.style.padding = "20px";
    modal.style.border = "1px solid #ccc";
    modal.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
    modal.style.zIndex = "9999";
    modal.textContent = mensagem;

    document.body.appendChild(modal);

    setTimeout(() => {
        document.body.removeChild(modal);
    }, 3000)
}

carregaPagina();

