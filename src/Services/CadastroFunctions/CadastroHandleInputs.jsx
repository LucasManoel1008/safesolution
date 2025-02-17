    export const handleInputChangeEmail = (e, setEmail) => {
    const email = e.target.value;
    setEmail(email);
  };
  
    export const handleInputChangeName = (e, setName) => {
    const name = e.target.value;
    setName(formatName(name.replace(/\d/g, '')));
  };
  
  export const handleInputChangeLastName = (e, setLastName) => {
    const lastName = e.target.value;
    setLastName(formatLastName(lastName.replace(/\d/g, '')));
  };
  
  export const handleInputPassword = (e, setPassword) => {
    const password = e.target.value;
    setPassword(password);
  };
  
  export const handleInputConfirmPassword = (e, setConfirmPassword) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };
  
  export const handleInputBirthDate = (e, setBirthDate) => {
    let birthDate = e.target.value;
    if (birthDate.length > 2) {
      birthDate = birthDate.replace(/^(\d{2})(\d)/, '$1/$2');
    }
    if (birthDate.length > 5) {
      birthDate = birthDate.replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');
    }
    setBirthDate(birthDate);
  };
  
  export const handleInputChangeCpf = (e, setCpf) => {
    const cpf = e.target.value.replace(/\D/g, '');
    setCpf(formatCpf(cpf));
  };
  
  // Separação para funções da empresa
  export const handleInputChangeCompanyName = (e, setName) => {
    const name = e.target.value;
    setName(name);
  }
  export const handleInputChangeCnpj = (e, setCnpj) => {
    const cnpj = e.target.value.replace(/\D/g, '');
    setCnpj(formatCnpj(cnpj));
  };
  
  export const handleInputChangeDescricao = (e, setDescricao) => {
    const descricao = e.target.value;
    setDescricao(descricao);
  };
  
  export const handleInputChangeTelefone = (e, setTelefone) => {
    const telefone = e.target.value.replace(/\D/g, '');
    setTelefone(formatTelephone(telefone));
  };
  
  export const handleInputChangeCep = (e, setCep) => {
    const cep = e.target.value.replace(/\D/g, '');
    setCep(formatCep(cep));
  };
  
  export const handleInputChangeRua = (e, setRua) => {
    const rua = e.target.value;
    setRua(rua);
  };

  export const handleInputChangeBairro = (e, setBairro) => {
    const bairro = e.target.value;
    setBairro(bairro)
  }

  export const  handleInputChangeCidade = (e, setCidade) => {
    const cidade = e.target.value;
    setCidade(cidade)
  }
  
  export const handleInputChangeNumero = (e, setNumero) => {
    const numero = e.target.value;
    setNumero(numero);
  };
  
  // Utilitários do usuario
  
  const formatCpf = (cpf) => {
    if (cpf.length > 2) {
      cpf = cpf.replace(/^(\d{3})(\d)/, '$1.$2');
    }
    if (cpf.length > 5) {
      cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    }
    if (cpf.length > 8) {
      cpf = cpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    }
    return cpf;
  };
  
  const formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  
  const formatLastName = (lastName) => {
    return lastName.charAt(0).toUpperCase() + lastName.slice(1);
  };
  
  // Utilitarios da empresa
  
  const formatCnpj = (cnpj) => {
    if (cnpj.length > 2) cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2");
    if (cnpj.length > 5) cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    if (cnpj.length > 8) cnpj = cnpj.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4");
    if (cnpj.length > 12) cnpj = cnpj.replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, "$1.$2.$3/$4-$5");
    return cnpj;
  };

  const formatTelephone = (telefone) => {
    if (telefone.length > 2) {
      telefone = telefone.replace(/^(\d{2})(\d)/, "($1) $2");
    }
    if (telefone.length > 6) {
      telefone = telefone.replace(/ (\d{5})(\d)/, `$1-$2`);
    }
    return telefone;
  };
  
  const formatCep = (cep) => {
    if (cep.length > 5) {
      cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");
    }
    return cep;
  };