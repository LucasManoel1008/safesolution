
window.onscroll = function() {botaoScroll()};




//Abrir e fechar o menu lateral
export function abrirNav(){
    document.getElementById('menuOculto').style.marginLeft = '0'
    document.getElementById('menuOculto').style.transition = "0.5s"
    
}

export function fecharNav(){
    document.getElementById('menuOculto').style.marginLeft = '-100vh'
}

//Botão de voltar ao topo
export function botaoScroll(){
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("botaoScroll").style.display = "block";
        
      } else {
        document.getElementById("botaoScroll").style.display = "none";
        
      }
    }

export function voltartopo(){
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
export function ajustarTexto(){
    document.getElementById('mensagem').style.height ='auto';
    document.getElementById('mensagem').style.height =mensagem.scrollHeight + 'px';
}



    
