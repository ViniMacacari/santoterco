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

const tercoTitulo = document.getElementById("tercoTitulo");
const passagem1 = document.getElementById("passagem1");
const passagem2 = document.getElementById("passagem2");
const passagem3 = document.getElementById("passagem3");
const passagem4 = document.getElementById("passagem4");
const passagem5 = document.getElementById("passagem5");
const titulo1 = document.getElementById("titulo1");
const titulo2 = document.getElementById("titulo2");
const titulo3 = document.getElementById("titulo3");
const titulo4 = document.getElementById("titulo4");
const titulo5 = document.getElementById("titulo5");

// Receber e definir variáveis 

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const data = Object.fromEntries(params.entries());
    return data;
}

const queryParams = getQueryParams()

misterio = queryParams.misterio
id = queryParams.id

// Gozosos = 1 / Dolorosos = 2 / Luminosos = 3 / Gloriosos = 4

if (id == 1) {
    tercoTitulo.textContent = "Como rezar o Terço (Mistério Gozoso)";

    titulo1.textContent = "No primeiro Mistério contemplamos a Anunciação do Anjo a Nossa Senhora.";
    passagem1.innerHTML = "No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galiléia chamada Nazaré. Foi a uma virgem, prometida em casamento a um homem chamado José, que era descendente de Davi. E o nome da virgem era Maria. <br> (Lc 1: 26-27)";

    titulo2.textContent = "No segundo Mistério contemplamos a Visitação de Nossa Senhora a sua prima Santa Isabel.";
    passagem2.innerHTML = "Naqueles dias, Maria partiu para a região montanhosa, dirigindo-se às pressas, a uma cidade da Judéia. Entrou na casa de Zacarias, e saudou Isabel. Quando Isabel ouviu a saudação de Maria, a criança se agitou no seu ventre, e Isabel ficou cheia do Espírito Santo. Com um grande grito exclamou: 'Você é bendita entre as mulheres, e é bendito o fruto do seu ventre!'. <br> (Lc 1: 39-42)";

    titulo3.textContent = "No Terceiro Mistério contemplamos o nascimento de Nosso Senhor Jesus Cristo em Belém.";
    passagem3.innerHTML = "Naqueles dias, o imperador Augusto publicou um decreto, ordenando o recenseamento em todo o império. Esse primeiro recenseamento foi feito quando Quirino era governador da Síria. Todos iam registrar-se, cada um na sua cidade natal. José era da família e descendência de Davi, chamada Belém, na Judéia, para registrar-se com Maria, sua esposa, que estava grávida. Enquanto estavam em Belém, se completaram os dias para o parto, e Maria deu à luz o seu filho primogênito. Ela o enfaixou e o colocou na manjedoura, pois não havia lugar para eles dentro da casa. <br> (Lc 2: 1-7)";

    titulo4.textContent = "No Quarto Mistério contemplamos a apresentação do Menino Jesus no Templo e a Purificação de Nossa Senhora.";
    passagem4.innerHTML = "Quando se completaram os oito dias para a circuncisão do menino, deram-lhe o nome de Jesus, como fora chamado pelo anjo, antes de ser concebido. Terminados os dias da purificação deles, conforme a Lei de Moisés, levaram o menino para Jerusalém, a fim de apresentá-lo ao Senhor, conforme está escrito na Lei do Senhor: 'Todo primogênito de sexo masculino será consagrado ao Senhor'. Foram também para oferecer em sacrifício um par de rolas ou dois pombinhos, conforme ordena a Lei do Senhor. <br> (Lc 2: 21-24)";

    titulo5.textContent = "No Quinto Mistério contemplamos a perda e o encontro do Menino Jesus";
    passagem5.innerHTML = "Os pais de Jesus iam todos os anos a Jerusalém, para a festa da Páscoa. Quando o menino completou doze anos, subiram para a festa, como de costume. Passados os dias da Páscoa, voltaram, mas o menino Jesus ficou em Jerusalém, sem que seus pais o notassem. Pensando que o menino estivesse na caravana, caminharam um dia inteiro. Depois começaram a procurá-lo entre parentes e conhecidos. Não o tendo encontrado, voltaram a Jerusalém à procura dele. Três dias depois, encontraram o menino no Templo. Estava sentado no meio dos doutores, escutando e fazendo perguntas. Todos os que ouviam o menino estavam maravilhados com a inteligência de suas respostas. <br> (Lc 2: 41-47)";
} else if (id == 2) {
    tercoTitulo.textContent = "Como rezar o Terço (Mistério Doloroso)";

    titulo1.textContent = "No Primeiro Mistério contemplamos a oração e agonia no Horto das Oliveiras.";
    passagem1.innerHTML = "Então Jesus foi com eles a um lugar chamado Getsêmani. E disse aos discípulos: 'Sentem-se aqui, enquanto eu vou até ali para rezar'. Jesus levou consigo Pedro e os dois filhos de Zebedeu, e começou a ficar triste e angustiado. Então disse a eles: 'Minha alma está numa tristeza de morte. Fiquem aqui e vigiem comigo'. Jesus foi um pouco mais adiante, prostrou-se com o rosto por terra e rezou: 'Meu Pai, se é possível, afaste-se de mim este cálice. Contudo, não seja feito como eu quero, e sim como tu queres'. <br> (Mt 26: 36-39)";

    titulo2.textContent = "No Segundo Mistério contemplamos A Flagelação de Nosso Senhor Jesus Cristo.";
    passagem2.innerHTML = "Então Pilatos soltou Barrabás, mandou flagelar Jesus, e o entregou para ser crucificado. <br> (Mt 27: 26)";

    titulo3.textContent = "No Terceiro Mistério contemplamos A coroação de espinhos de Nosso Senhor Jesus Cristo.";
    passagem3.innerHTML = "Em seguida, os soldados de Pilatos levaram Jesus ao palácio do governador, e reuniaram toda a tropa em volta de Jesus. Tiraram a roupa dele e o vestiram com um manto vermelho; depois teceram uma coroa de espinhos, puseram a coroa em sua cabeça, e uma vara em sua mão direita. Então se ajoelharam diante de Jesus e zombaram, dele, dizendo: 'Salve, rei dos judeus!'. (Mt 27: 26-29)";

    titulo4.textContent = "No Quarto Mistério contemplamos Nosso Senhor carregando a Cruz às costas.";
    passagem4.innerHTML = "Passava por aí um homem, chamado Simão Cireneu, pai de Alexandre e Rufo. Ele voltava do campo para a cidade. Então os soldados obrigaram Simão a carregar a cruz de Jesus. Levaram Jesus para o lugar chamado Gólgota, que quer dizer 'lugar da Caveira'. <br> (Mc 15: 21-22)";

    titulo5.textContent = "No Quinto Mistério contemplamos A Crucifixão e morte de Nosso Senhor Jesus Cristo.";
    passagem5.innerHTML = "Quando chegaram ao chamado 'lugar da Caveira', aí crucificaram Jesus e os criminosos, um à sua direita e outro à sua esquerda. E Jesus dizia: 'Pai, perdoa-lhes! Eles não sabem o que estão fazendo!'. Depois repartiram a roupa de Jesus, fazendo sorteio. [...] Já era mais ou menos meio-dia, e uma escuridão cobriu toda a região até às três horas da terde, pois o sol parou de brilhar. A cortina do santuário rasgou-se pelo meio. Então Jesus deu um forte grito: 'Pai, em tuas mãos entrego o meu espírito'. Dizendo isso, expirou. <br> (Lc 23: 33-34 e 44-46)";
} else if (id == 3) {
    tercoTitulo.textContent = "Como rezar o Terço (Mistério Luminoso)";

    titulo1.textContent = "No Primeiro Mistério contemplamos Batismo de Nosso Senhor Jesus Cristo no rio Jordão.";
    passagem1.innerHTML = "Depois de ser batizado, Jesus logo saiu da água. Então o céu se abriu, e Jesus viu o Espírito de Deus, descendo como pomba e pousando sobre ele. E do céu veio uma voz dizendo: 'Este é o meu Filho amado, que muito me agrada'. <br> (Mt 3: 16-17)";

    titulo2.textContent = "No Segundo Mistério contemplamos o Primeiro milagre de Jesus transformando a água em vinho nas bodas de Caaná.";
    passagem2.innerHTML = "Três dias depois, houve uma festa de casamento em Caaná da Galiléia, e a mãe de Jesus estava alí. Jesus também tinha sido convidado para essa festa de casamento, junto com seus discípulos. Faltou vinho, e a mãe de Jesus lhe disse: 'Eles não têm mais vinho!' Jesus respondeu: 'Mulher, que existe entre nós? Minha hora ainda não chegou'. A mãe de Jesus disse aos que estavam servindo: 'Façam o que ele mandar'. <br> (Jo 2: 1-5)";

    titulo3.textContent = "No Terceiro Mistério contemplamos a Anunciação do Reino de Deus e o convite à conversão.";
    passagem3.innerHTML = "O tempo já se cumpriu e o Reino de Deus está próximo. Convertam-se e acreditem na Boa Notícia. <br> (Mc 1: 15)";

    titulo4.textContent = "No Quarto Mistério contemplamos a transfiguração de Nosso Senhor no Monte Thabor.";
    passagem4.innerHTML = "Seis dias depois, Jesus tomou consigo Pedro, os irmãos Tiago e João, e os levou a um lugar à parte, sobre uma alta montanha. E se transfigurou diante deles: o seu rosto brilhou como o sol, e as suas roupas ficaram brancas como a luz. <br> (Mt 17: 1-2)";

    titulo5.textContent = "No Quinto Mistério contemplamos  a Instituição da Eucaristia na Última Ceia";
    passagem5.innerHTML = "Enquanto comiam, Jesus tomou um pão e, tendo pronunciado a bênção, o partiu, distribuiu aos discípulos e disse: 'Tomem e comam, isto é o meu corpo'. <br> (Mt 26: 26)";
} else if (id == 4) {
    tercoTitulo.textContent = "Como rezar o Terço (Mistério Glorioso)";

    titulo1.textContent = "No Primeiro Mistério  contemplamos A Ressurreição de Nosso Senhor Jesus Cristo.";
    passagem1.innerHTML = "No primeiro dia da semana, bem de madrugada, as mulheres foram ao túmulo de Jesus, levando os perfumes que haviam preparado. Encontraram a pedra do túmulo removida. Mas ao entrar, não encontraram o corpo do Senhor Jesus, e ficaram sem saber o que estava acontecendo. Nisso, dois homens, com roupas brilhantes pararam perto delas. Cheias de medo, elas olhavam para o chão. No entanto, os dois homens disseram: 'Por que vocês estão procurando entre os mortos aquele que está vivo? Ele não está aqui! Ressuscitou!' [...] <br> (Lc 24, 1-6)";

    titulo2.textContent = "No Segundo Mistério contemplamos  A Ascensão de Nosso Senhor Jesus Cristo.";
    passagem2.innerHTML = "Depois de falar com os discípulos, o Senhor Jesus foi levado ao céu e sentou-se à direita de Deus. <br> (Mc 16: 19)";

    titulo3.textContent = "No Terceiro Mistério contemplamos A descida do Espírito Santo.";
    passagem3.innerHTML = "Quando chegou o dia de Pentecostes, todos eles estavam reunidos no mesmo lugar. De repente, veio do céu um barulho como o sopro de um forte vendaval, e encheu a casa onde eles se encontravam. Apareceram então umas como línguas de fogo, que se espalharam e foram pousar sobre cada um deles. Todos ficaram repletos do Espírito Santo e começaram a falar em outras línguas, conforme o Espírito lhes concedia que falassem. <br> (At 2: 1-4)";

    titulo4.textContent = "No Quarto Mistério contemplamos A Assunção de Nossa Senhora aos Céus de corpo e alma.";
    passagem4.innerHTML = "Porque olhou para a humilhação de sua serva. Doravante todas as gerações me felicitarão, porque o Todo-poderoso realizou grandes obras em meu favor: seu nome é santo. <br> (Lc 1: 48-49)";

    titulo5.textContent = "No Quinto Mistério contemplamos A Coroação de Nossa Senhora como Rainha do Céu  e da Terra dos Anjos e dos Homens.";
    passagem5.innerHTML = "Apareceu no céu um grande sinal: uma Mulher vestida com o sol, tendo a lua debaixo dos pés, e sobre a cabeça uma coroa de doze estrelas. <br> (Ap 12: 1)";
} else {
    window.location.href = "../../../pages/home/home.html";
}