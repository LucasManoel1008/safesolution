export function validarCpf(){
    let numCpf = document.getElementById('cpf').value;
    let senha = document.getElementById('password').value;

    if (numCpf == ''){
        window.alert("Número de CPF obrigatório!");
        document.getElementById('cpf').focus();
        return false;
    }
    else if(isNaN(numCpf)){
        window.alert("Digite apenas números no CPF");
        document.getElementById('cpf').focus();
        document.getElementById('cpf').value = '';
        
        return false;
    }
    if (senha == ''){
        window.alert("Senha Obrigatória!");
        document.getElementById('password').focus();
        return false;
    }

}

