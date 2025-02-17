
export const handleInputCnpj = (e, setCnpj) => {
    const cnpj = e.target.value.replace(/\D/g, '');
    setCnpj(formatCnpj(cnpj))
}

export const handleInputPassword = (e, setPassword) => {
    setPassword(e.target.value)
}

const formatCnpj = (cnpj) => {
    if (cnpj.length > 2) {
        cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2");
      }
      if (cnpj.length > 5) {
        cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      }
      if (cnpj.length > 8) {
        cnpj = cnpj.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4");
      }
      if (cnpj.length > 12) {
        cnpj = cnpj.replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, "$1.$2.$3/$4-$5");
      }
      return cnpj
}

