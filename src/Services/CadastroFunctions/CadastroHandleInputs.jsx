export const handleInputChangeEmail = (e, setEmail) => {
    setEmail(e.target.value);
  };

export const handleInputChangeName = (e, setName) => {
    setName(formatName(e.target.value.replace(/\d/g, '')));
  };

export const handleInputChangeLastName = (e, setLastName) => {
    setLastName(formatLastName(e.target.value.replace(/\d/g, '')));
};

export const handleInputPassword = (e, setPassword) => {
    setPassword(e.target.value);
};

export const handleInputConfirmPassword = (e, setConfirmPassword) => {
    setConfirmPassword(e.target.value);
};

export const handleInputBirthDate = (e, setBirthDate) => {
    setBirthDate(e.target.value);
};

export const handleInputChangeCpf = (e, setCpf) => {
    const cpf = e.target.value.replace(/\D/g, '');
    setCpf(formatCpf(cpf));
};

// Utilitários

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
}
const formatName = (name) =>{
    return name.charAt(0).toUpperCase() + name.slice(1);
}
const formatLastName = (lastName) =>{
    return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}