import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Cadastro2() {

    // Autocompletar CNPJ
    const [cnpj, setCnpj] = useState("");

    const handleInputChange = (e) => {
      let value = e.target.value.replace(/\D/g, "");
    
      if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d)/, "$1.$2");
      }
      if (value.length > 5) {
        value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      }
      if (value.length > 8) {
        value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4");
      }
      if (value.length > 12) {
        value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, "$1.$2.$3/$4-$5");
      }
  
      setCnpj(value);
    };

   
    // Validar CEP
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [numero, setNumero] = useState('');
    const [select, setSelect] = useState('');
    const navigator = useNavigate();
   

    const handleSelectChangeSelect = (e) => {
        setSelect(e.target.value);
    }

    const validarFormulario = (event) => {
        event.preventDefault();

        if (select == 'provedor'){
            navigator('/Cadastro-Servico')
        }
        else{
            navigator('/UserPage')
        }

    }

    const handleCepChange = (e) => {
        setCep(e.target.value);
    };

    const handleNumeroChange = (e) => {
        setNumero(e.target.value);
    };

    const getCEP = () => {
        if (cep === "" || cep.length < 8) {
            alert("Você precisa digitar o cep corretamente!");
            return;
        }

        const url = `https://viacep.com.br/ws/${cep}/json`;

        fetch(url)
            .then(resposta => resposta.json())
            .then(data => {
                setRua(data.logradouro || '');
                setBairro(data.bairro || '');
                setCidade(data.localidade || '');
            })
            .catch(error => console.log(error));
    };

    
    

      
      

  return (
    <div className='cadastroContent'>


        <h4 className="mt-4">Quase lá</h4>
        
        <form onSubmit={validarFormulario}>
            <p>
            Preencha os campos abaixo com as informações essenciais sobre o seu negócio. Essas informações nos ajudarão a conectar você com clientes e outros serviços.</p>
                <div className="nameInput nome-cnpj mt-4 ">
                    <input type="text"  className="form-control" placeholder='Nome empresarial'/>
                    <input type="text" id="cnpj" placeholder="00.000.000/0000-00" maxLength="18" className='form-control' onChange={handleInputChange} value={cnpj} ></input>
                </div>
                <div className="form-floating mt-4 interesse">
                    <select onChange={handleSelectChangeSelect} value={select} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option defaultValue={'contratante'}>Sou Contratante</option>
                        <option value="provedor">Sou Provedor</option>
                    </select>
                    <label htmlFor="floatingSelect">Área de Interesse</label>
                </div>
                <div className="form-floating descricao mt-4">
                    <textarea className="form-control " placeholder="Descrição" id="floatingTextarea2"></textarea>
                    <label htmlFor="floatingTextarea2">Descrição</label>
                </div>
                <div className="cepInputs mt-4">
                    <div className="itens1 mb-4">
                    <div>
                        <input
                            type="text"
                            id="cep"
                            value={cep}
                            onChange={handleCepChange}
                            className="form-control"
                            placeholder="CEP"
                            
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="rua"
                            value={rua}
                            readOnly
                            maxLength={5}
                            className="form-control"
                            placeholder="Rua"
                        />
                    </div>
                    </div>
                
                <div className="itens2 mb-4">
                
                <div>

                    <input
                        type="text"
                        id="bairro"
                        value={bairro}
                        readOnly
                        className="form-control"
                        placeholder="Bairro"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="numero"
                        value={numero}
                        onChange={handleNumeroChange}
                        className="form-control"
                        placeholder="Número"
                        
                    />
                </div>
                </div>
                
                <div className="mb-4">
                    <input
                        type="text"
                        id="cidade"
                        value={cidade}
                        readOnly
                        className="form-control"
                        placeholder="Cidade"
                    />
                </div>
                <div className="">
                    <button type="button" className="btn btn-primary aplicar" onClick={getCEP}>Aplicar</button>
                </div>
                </div>
                <button role='submit' className="continuarCadastro1 btn btn-primary mt-4">Finalizar</button>
        </form>
       
            
    </div>
  )
}
export default Cadastro2

