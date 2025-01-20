import VisualizarServico from './VisualizarServico';
import CadastroServico from './CadastroServico';
import EditarServico from './EditarServico';
import { useState } from 'react';
function Servicos() {

  const [option, setOption] = useState('visualizar');
  const [selectedId, setSelectedId] = useState(null);
  
  // Passa o id selecionado para o EditarServiço
  // A função é passada para os outros componentes
  const handleOption = (option, id = null) => {
    setOption(option);
    setSelectedId(id);

  }
  const renderSection = () => {
    switch (option) {
      case 'visualizar':
        // o onClick de visualizar serviço esta sendo passado como props aqui!
        return <VisualizarServico onOptionChange={handleOption} />;
      case 'Cadastrar':
        return <CadastroServico onOptionChange={handleOption} />
      case 'Editar':
        return <EditarServico onOptionChange={handleOption} id = {selectedId} />

      default:
        return <VisualizarServico />;
    }
  };


  return (
    <div>
      {renderSection('VisualizarServicos')}
  </div>
  )
}
export default Servicos