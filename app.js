//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let ListaAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo');

    if (nomeAmigo.value == '') {
        alert('É necessário adicionar um nome!');
    } else {
        ListaAmigos.push(nomeAmigo.value);
        adicionarLi();
        nomeAmigo.value = '';
        console.log(ListaAmigos);
        console.log(ListaAmigos.length);
        
    }
}

function adicionarLi() {
    let listaHTML = document.getElementById('listaAmigos');
    let nomeAmigo = ListaAmigos[ListaAmigos.length - 1];

    if (nomeAmigo) {
        let li = document.createElement('li');
        li.textContent = nomeAmigo;
        listaHTML.appendChild(li);
    }
}

function sortearAmigo() {
    if (ListaAmigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * ListaAmigos.length);
    let amigoSorteado = ListaAmigos[indiceSorteado];
    let campoResultado = document.getElementById('resultado');

    let mensagem = `O amigo sorteado foi: ${amigoSorteado}`;

    let li = document.createElement('li');
    li.textContent = mensagem;
    campoResultado.appendChild(li);
}