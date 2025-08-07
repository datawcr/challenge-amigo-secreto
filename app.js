//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [] ;

function limparNome (){
    amigo = document.querySelector('input');
    amigo.value = ''
}

function limparLista (){
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""
}

limparLista();

function exibirTextoNaTela(tag, texto){
let campo = document.getElementById(tag);
campo.innerHTML = texto;
}

function listarAmigosLista(listaAmigos){
    const  lista = document.getElementById("listaAmigos");

     listaAmigos.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });
}

function adicionarAmigo(){     
    let amigo = document.getElementById('amigo').value;
    if (amigo == null || amigo == '') {
    alert("Por favor, insira um nome.");
    } else {
    listaAmigos.push(amigo);
    limparLista();
    listarAmigosLista(listaAmigos);
    limparNome();
    }
}



function sortearAmigo() {
    //Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
    let tamanho = listaAmigos.length ;
    console.log('tamanho' + tamanho);
    if (tamanho <= 0 ){
        alert('Não existe amigos para serem sorteados!');
        return;
    }
    //Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório
    //  do array.
     
     let indiceAleatorio    =  parseInt(Math.random() * tamanho );
     console.log('indiceAleatorio:'+ indiceAleatorio);

    //Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
    nomeSorteado = listaAmigos[indiceAleatorio];

    //Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e
    //  innerHTML para exibir o amigo sorteado.
    
     const  resultado = document.getElementById("resultado");
     resultado.innerHTML = nomeSorteado;
}