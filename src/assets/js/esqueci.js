export function validarEmail() {
    let email = document.getElementById("skibidi").value;
    if (email == ""){
        window.alert("Digite um endereço de email válido!");
        return false;
    }
}