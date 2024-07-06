let amigos = [];

function adicionar () {

let amigo = document.getElementById('nome-amigo');

if (amigo.value == '') {
    alert ('informe um nome');
    return
}

let amigoMaiusculo = amigo.value.toUpperCase();

if (amigos.includes (amigoMaiusculo)) {
    alert ('Nome já adicionado');
    return;
}

let listaAmigos = document.getElementById('lista-amigos');
amigos.push (amigoMaiusculo);

if (listaAmigos.textContent == '') {
    listaAmigos.textContent = amigo.value;
} else { 
    listaAmigos.textContent = listaAmigos.textContent +', ' + amigo.value;
}

amigo.value = '';
}

function sortear () { 
    
    if (amigos.length <= 2) {
        alert ('Números de amigos insuficientes');
        return
    }
    
    embaralha (amigos);

    listaSorteio = document.getElementById ('lista-sorteio');
    listaSorteio.innerHTML ='';

    for (i=0; i < amigos.length; i++) {
        
        let amigoAtual=amigos[i];
        let amigoProximo;
        
        if (i === amigos.length - 1) {

            amigoProximo = amigos [0];

        } else {
            amigoProximo = amigos [i+1]
        }
        listaSorteio.innerHTML = listaSorteio.innerHTML +`${amigoAtual}` +'-->'+ `${amigoProximo}` +'<br>';

    }
}

function embaralha(lista) {

    let indice = lista.length
    
    while(indice) {
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}

function reiniciar () {

    let listaAmigos = document.getElementById('lista-amigos');
    let listaSorteio = document.getElementById ('lista-sorteio');
    listaAmigos.innerHTML = '';
    listaSorteio.innerHTML = '';
    amigos = [];

}
