export const handleInputNome = (e, setNome) => {
    const nome = e.target.value.replace(/\d/g, '');
    setNome(String(nome).charAt(0).toUpperCase() + String(nome).slice(1));
  };

export  const handleInputSobrenome = (e, setSobrenome) => {
    const sobrenome = e.target.value.replace(/\d/g, '');
    setSobrenome(String(sobrenome).charAt(0).toUpperCase() + String(sobrenome).slice(1));
  };

export const handleInputEmail = (e, setEmail) => {
    setEmail(e.target.value);
  };
  
export  const handleInputTelefone = (e, setTelefone) => {
    const telefone = e.target.value.replace(/\D/g, '');
    setTelefone(formatPhoneNumber(telefone));
};

export const handleInputMensagem = (e, setMensagem) => {
    setMensagem(e.target.value);
};

export const handleInputCidade = (e, setCidade) => {
    const cidade = e.target.value.replace(/\d/g, '');
    setCidade(String(cidade).charAt(0).toUpperCase() + String(cidade).slice(1));
};

export const handleInputAssunto = (e, setAssunto) => {
    setAssunto(e.target.value);
}


// Funções auxiliares
const formatPhoneNumber = (telefone) => {
    if (telefone.length > 2) { // Verifica se há mais de dois caracteres
        telefone = telefone.replace(/^(\d{2})(\d)/, '($1) $2'); // Formata o DDD
    }
    if (telefone.length > 6) { // Verifica se há mais de 6 caracteres
        telefone = telefone.replace(/ (\d{5})(\d)/, '$1-$2'); // Formata para incluir o hífen
    }
    return telefone;
}