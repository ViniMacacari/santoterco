// Identificar se está no mobile

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    function detectMobileDevice() {
        if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true; // eh um dispositivo móvel
        } else {
            return false; // não eh um dispositivo móvel
        }
    }
    
    if (detectMobileDevice()) {
        var elemento = document.getElementById("section1");
        elemento.classList.add("mobile-device"); // classe adicionada
    }
    
  }

// Receber e definir variáveis

const tituloTerco = document.getElementById("tercoTitulo");
const oracao1 = document.getElementById("oracao1")
const oracao2 = document.getElementById("oracao2")
const oracao3 = document.getElementById("oracao3")
const contasGrandes = document.getElementById("contasGrandes")
const contasPequenas = document.getElementById("contasPequenas")
const finalDezena = document.getElementById("finalDezena")
const oracaoFinal = document.getElementById("oracaoFinal")


// Receber e definir variáveis 

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const data = Object.fromEntries(params.entries());
    return data;
}

const queryParams = getQueryParams()

terco = queryParams.terco
id = queryParams.id

if (id == 1) {
    tituloTerco.textContent = "Como rezar o Terço da Misericórdia";
    oracao1.textContent = "Reze um: Pai Nosso";
    oracao2.textContent = "Reze um: Ave-Maria";
    oracao3.textContent = "Reze um: Credo";

    contasGrandes.textContent = "Reze: Eterno Pai, eu Vos ofereço o Corpo e o Sangue, a Alma e a Divindade de Nosso Senhor Jesus Cristo, em expiação dos nossos pecados e dos pecados do Mundo inteiro.";
    contasPequenas.textContent = "Reze: Pela Sua dolorosa paixão, tende Misericórdia de nós e do Mundo inteiro.";

    finalDezena.textContent = "Ó Sangue e Água que jorrastes do Coração de Jesus como fonte de misericórdia para nós: eu confio em Vós!";

    oracaoFinal.textContent = "Deus Santo, Deus Forte, Deus imortal, tende piedade de nós e do Mundo inteiro";
    console.log(id)
} else if (id == 2) {
        tituloTerco.textContent = "Como rezar o Terço do Amor";
        oracao1.textContent = "Reze um: Pai Nosso";
        oracao2.textContent = "Reze um: Ave-Maria";
        oracao3.textContent = "Reze um: Credo";

        contasGrandes.textContent = "Reze: Doce coração de Jesus, sede meu amor! Doce coração de Maria, sede minha salvação!";
        contasPequenas.textContent = "Reze: Jesus, Maria, eu Vos amo! Salvai as almas!";

        finalDezena.textContent = "Reze: Glória ao Pai, e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.";

        oracaoFinal.textContent = "Reze: Sagrado Coração de Jesus, fazei que eu Vos ame cada vez mais";
        console.log(id)
    } else {
        window.location.href = "../../../pages/home/home.html";
    }