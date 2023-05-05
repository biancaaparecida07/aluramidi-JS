function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio); //Acesso ao ID se usa com #   

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    } else{
        console.log('Elemento não encontrado ou seletor inválido!');
    }
}        
    

const listaDeTeclas=document.querySelectorAll('.tecla');

//para
for (let contador=0;contador<listaDeTeclas.length; contador++){
    const tecla=listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento){
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}

//Comentários Lembretes
    //Template string: '#som_{instrumento}'
    //const idAudio = `#som_${instrumento}`; //string dinâmica utilizando crase ao inves de aspas simples. Tudo que é variável dentro da string fica envolvido entre chaves com cifrão antes.
    //Função anonima para chamar função existente, pois se usar somente a existente, o navegador bloqueia ao carregar a página por ainda não ter tido interação com o usuário.
    //tecla.onclick = function(){

//Para ter acesso ao clique do botão, acessamos o botão por meio da sua classe, acessamos a propriedade do clic e atribuímos a ela o evento a ser realizado
//document.querySelector('.tecla_pom').onclick = tocaSomPom; //Acesso à classe se usa .
//document.querySelector('.tecla_clap').onclick = tocaSomClap; //Sem os parênteses de entrada faz com que só execute no momento após o click e nõa quando a página é carregada
