window.onscroll = function() {showScrollButton()};

export function abrirNav(){
    document.getElementById('menuOculto').style.marginLeft = '0'
    document.getElementById('menuOculto').style.transition = "0.5s"
    
}

export function fecharNav(){
    document.getElementById('menuOculto').style.marginLeft = '-100vh'
}

export function showScrollButton(){
    document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 
    ? document.getElementById("botaoScroll").style.display = "block"
    : document.getElementById("botaoScroll").style.display = "none"
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