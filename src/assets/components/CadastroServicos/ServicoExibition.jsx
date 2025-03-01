import VisualizarServico from './VisualizarServico';
import CadastroServico from './CadastrarServico';
import EditarServico from './EditarServico';
import { useState } from 'react';
function ServicosExibition() {

  const [section, setSection] = useState('visualizar');
  const [selectedId, setSelectedId] = useState(null);
  

  const handleOption = (section, id = null) => {
    setSection(section);
    setSelectedId(id);

  }
  const renderSection = () => {
    switch (section) {
      case 'visualizar':
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
export default ServicosExibition