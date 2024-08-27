window.onscroll = function() {botaoScroll()};

function fixedheader(){
    var header = document.getElementById('header');
    
    if (document.body.scroll|Top > 400 || document.documentElement.scrollTop > 400 ){
        header.classList.add('fixedHeader');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loaded');
});


//Abrir e fechar o menu lateral
function abrirNav(){
    document.getElementById('menuOculto').style.marginLeft = "0";
    document.getElementById('menuOculto').style.transition = "0.5s";

}

function fecharNav(){
    document.getElementById('menuOculto').style.marginLeft = "-100vh";
}

//Botão de voltar ao topo
function botaoScroll(){
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("botaoScroll").style.display = "block";
        
      } else {
        document.getElementById("botaoScroll").style.display = "none";
        
      }
    }

function voltartopo(){
    var check = 'false'
    if(check){
    window.scrollTo({top:0, behavior: 'smooth'})
    check = 'true'
    }
    if(check = false){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

//Ajuste de tamanho automático na caixa de texto
function ajustarTexto(){
    document.getElementById('mensagem').style.height ='auto';
    document.getElementById('mensagem').style.height =mensagem.scrollHeight + 'px';
}


    
