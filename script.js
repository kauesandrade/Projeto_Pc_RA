
let botaoF1 = document.createElement('button');
botaoF1.className = "fechar";
botaoF1.innerText = "X";

let botaoF2 = document.createElement('button');
botaoF2.className = "fechar";
botaoF2.innerText = "X";

let botaoV1 = document.createElement('img');
botaoV1.className = "voltar";
botaoV1.setAttribute('src', 'https://cdn.glitch.global/0b9aebb9-96de-47b4-841a-2ecae68ff7b9/botao_Fechar%20(1).png?v=1689724271920');

let botaoV2 = document.createElement('img');
botaoV2.className = "voltar";
botaoV2.setAttribute('src', 'https://cdn.glitch.global/0b9aebb9-96de-47b4-841a-2ecae68ff7b9/botao_Fechar%20(1).png?v=1689724271920');

let botaoVoltar = document.querySelector('.fechar');

let titulo = document.createElement('h1');
let parg = document.createElement('p');
let imagem = document.getElementById('imagem');
let botoes1 = document.querySelector('#div1')
let botoes2 = document.querySelector('#div2')

let cardFrente = document.getElementById('cardFrente');
let cardBack = document.getElementById('cardAtras');
let inner = document.getElementById('telaPcInner');
let telaPc = document.getElementById("telaPc");

let tituloV;
let pargV;
let imgV;

let divBotaoFrente = document.createElement('div')
divBotaoFrente.className = 'divFrente'
let divBotaoAtras = document.createElement('div')
divBotaoAtras.className = 'divAtras'



botaoF1.addEventListener('click', function(){
    telaPc.style.display = 'none';
    virarCard(inner);
})

botaoF2.addEventListener('click', function(){
    document.getElementById("telaPc").style.display = 'none';
})

botaoV1.addEventListener('click', function(){
    abrirPc();
    virarCard(inner);
})

botaoV2.addEventListener('click', function(){
    abrirPc();
})

function aparecer(tituloE, pargE, imgE){
    cardBack.innerHTML = '';

    titulo.innerText = tituloE;
    parg.innerText = pargE;

    imagem.src = imgE;

    divBotaoAtras.appendChild(botaoV1)
    divBotaoAtras.appendChild(botaoF1)
    cardBack.appendChild(divBotaoAtras);
    cardBack.appendChild(titulo);
    cardBack.appendChild(parg);

    divBotaoFrente.appendChild(botaoV2)
    divBotaoFrente.appendChild(botaoF2);
    cardFrente.appendChild(divBotaoFrente);
    
    document.getElementById("telaPc").style.display = 'flex';
}

function aparecerSemBotao(tituloE, pargE, imgE){
    cardBack.innerHTML = '';

    titulo.innerText = tituloE;
    parg.innerText = pargE;

    imagem.src = imgE;

    divBotaoAtras.appendChild(botaoF1)
    cardBack.appendChild(divBotaoAtras);
    cardBack.appendChild(titulo);
    cardBack.appendChild(parg);

    divBotaoFrente.appendChild(botaoF2);
    cardFrente.appendChild(divBotaoFrente);
    
    document.getElementById("telaPc").style.display = 'flex';
}


let x = 0;

function virarCard(card) {
    
    if (x % 2 == 0) {
        card.style.transform = "rotateX(180deg)";
    } else {
        card.style.transform = "rotateX(0deg)";
    }
    x++;
}

document.getElementById("telaPc").addEventListener('click', () =>{
    virarCard(inner);
});

let qrCode = document.getElementById('qrcode');
qrCode.addEventListener('targetFound', event=>{
    tituloV = 'Computador'
    pargV = 'Um computador é um dispositivo eletrônico controlado por um programa (chamado sistema operacional) , usado para processar dados. Ele é constituído por componentes eletrônicos, especialmente circuitos integrados, miniaturizados e encaixados em pequeno pedaço de silício, usualmente chamado chip.'
    imgV = 'https://cdn.glitch.global/0b9aebb9-96de-47b4-841a-2ecae68ff7b9/pc-removebg-preview.png?v=1689719535819'
    imagem.style.width = '60%'
    botoes1.style.display = 'none';
    botoes2.style.display = 'none';
    botaoVoltar.style.display = 'none'
    aparecerSemBotao(tituloV, pargV, imgV)
})

function abrirPc(){
    tituloV = 'PC aberto'
    pargV = "Use as cores que estão nos botões e no computador para saber mais informações sobre os componentes, clique na tela para ver as cores correspondentes aos componentes do computador"
    imgV = "https://cdn.glitch.global/0b9aebb9-96de-47b4-841a-2ecae68ff7b9/pcCores.jpg?v=1689537516460"
    botoes1.style.display = 'flex'
    botoes2.style.display = 'flex'
    aparecerSemBotao(tituloV, pargV, imgV);
}

let pc = document.getElementById('pc')
pc.addEventListener('targetFound', event=>{
    abrirPc();
})

function abrirFonte(){
    tituloV = 'Fonte de Alimentação';
    pargV = 'O disco rígido é responsável pelo armazenamento permanente de dados no computador. Ele utiliza discos magnéticos para gravar e ler as informações. É nele que ficam armazenados o sistema operacional, os arquivos do usuário, aplicativos e outros dados.'
    imgV = "https://cdn.glitch.global/0b9aebb9-96de-47b4-841a-2ecae68ff7b9/fonte.jfif?v=1689718886792"
    botoes1.style.display = 'none';
    botoes2.style.display = 'none';
    aparecer(tituloV, pargV, imgV);
}

let fonte = document.getElementById('fonte')
fonte.addEventListener('targetFound', event=>{
    abrirFonte();
});

function abrirHd(){
    tituloV = 'Disco Rígido (HD)';
    pargV = 'O disco rígido é responsável pelo armazenamento permanente de dados no computador. Ele utiliza discos magnéticos para gravar e ler as informações. É nele que ficam armazenados o sistema operacional, os arquivos do usuário, aplicativos e outros dados.'
    imgV = "https://cdn.glitch.global/0b9aebb9-96de-47b4-841a-2ecae68ff7b9/hd.jfif?v=1689718889879"
    botoes1.style.display = 'none';
    botoes2.style.display = 'none';
    aparecer(tituloV, pargV, imgV);
}

let hd = document.getElementById('hd');
hd.addEventListener('targetFound', event=>{
    abrirHd();
})

function abrirPlacaV(){
    tituloV = 'Placa de Video';
    pargV = 'A placa de vídeo é responsável pelo processamento e geração de imagens para serem exibidas no monitor. Ela possui sua própria memória e processador dedicado, permitindo que aplicativos gráficos e jogos sejam executados com desempenho e qualidade visual superiores.'
    imgV = 'https://cdn.glitch.global/0b9aebb9-96de-47b4-841a-2ecae68ff7b9/placaVideo.jfif?v=1689718896075'
    botoes1.style.display = 'none';
    botoes2.style.display = 'none';
    aparecer(tituloV, pargV, imgV);
}

let placaVideo = document.getElementById('placa-video');
placaVideo.addEventListener('targetFound', event=>{
    abrirPlacaV();
})

function abrirProcessador(){
    tituloV = 'Processador (CPU)';
    pargV = 'O processador é o cérebro do computador. Ele executa as instruções e realiza os cálculos necessários para o funcionamento do sistema operacional e dos programas. A velocidade e o desempenho do processador afetam diretamente a capacidade de processamento do computador.';
    imgV = 'https://cdn.glitch.global/0b9aebb9-96de-47b4-841a-2ecae68ff7b9/processadotr.jfif?v=1689718899110'
    botoes1.style.display = 'none';
    botoes2.style.display = 'none';
    aparecer(tituloV, pargV, imgV);
}

let processador = document.getElementById('processador')
processador.addEventListener('targetFound', event=>{
    abrirProcessador();
});

function abrirRam1(){
    tituloV = 'Memoria RAM';
    pargV = 'A memória RAM (Random Access Memory) é usada para armazenar temporariamente os dados e as instruções que estão sendo processados pelo computador. Quanto mais RAM um computador possui, maior é sua capacidade de executar várias tarefas simultaneamente e lidar com programas mais pesados.';
    imgV = 'https://cdn.glitch.global/0b9aebb9-96de-47b4-841a-2ecae68ff7b9/ram.jfif?v=1689718901904'
    botoes1.style.display = 'none';
    botoes2.style.display = 'none';
    aparecer(tituloV, pargV, imgV);
}

let ram1 = document.getElementById('ram1');
ram1.addEventListener('targetFound', event=>{
   abrirRam1();
})
let ram2 = document.getElementById('ram2');
ram2.addEventListener('targetFound', event=>{
   abrirRam1();
})

let ventoinha = document.getElementById('ventoinha');
ventoinha.addEventListener('targetFound', event=>{
    tituloV = 'Ventoinha';
    pargV = 'As ventoinhas e sistemas de resfriamento são responsáveis por manter a temperatura adequada dentro do computador. Eles dissipam o calor gerado pelos componentes, como o processador e a placa de vídeo, evitando o superaquecimento e garantindo o bom funcionamento e a vida útil dos dispositivos.';
    imgV = 'https://cdn.glitch.global/0b9aebb9-96de-47b4-841a-2ecae68ff7b9/ventoinha.jfif?v=1689718904714'
    aparecer(tituloV, pargV, imgV);
})

function abrirPlacaM(){
    tituloV = 'Placa Mãe';
    pargV = 'A placa-mãe é o principal circuito impresso do computador. Ela fornece as conexões físicas e elétricas entre todos os componentes, como processador, memória, disco rígido, placa de vídeo e outros periféricos. Também abriga o chipset, que controla a comunicação entre os componentes.';
    imgV = 'https://cdn.glitch.global/0b9aebb9-96de-47b4-841a-2ecae68ff7b9/placaMae.jfif?v=1689718894310'
    botoes1.style.display = 'none';
    botoes2.style.display = 'none';
    aparecer(tituloV, pargV, imgV);
}

let placaMae = document.getElementById('placa-mae');
placaMae.addEventListener('targetFound', event=>{
    abrirPlacaM();
})

let botaoHd = document.getElementById('hd1');
botaoHd.addEventListener('click', function(){
    abrirHd();
    virarCard(inner);
})

document.getElementById('fonte1').addEventListener('click', function(){
    abrirFonte();
    virarCard(inner);
})

document.getElementById('processador1').addEventListener('click', function(){
    abrirProcessador();
    virarCard(inner);
})

document.getElementById('placaM').addEventListener('click', function(){
    abrirPlacaM();
    virarCard(inner);
})

document.getElementById('ram').addEventListener('click', function(){
    abrirRam1();
    virarCard(inner);
})

document.getElementById('placaV').addEventListener('click', function(){
    abrirPlacaV();
    virarCard(inner);
})