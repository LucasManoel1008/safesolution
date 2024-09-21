import VisualizarServico from './VisualizarServico';
import CadastroServico from './CadastroServico';
import { useState } from 'react';
function Servicos() {

  const [option, setOption] = useState('visualizar');
  const renderSection = () => {
    switch (option) {
      case 'visualizar':
        return <VisualizarServico onClick={() => setOption('Cadastrar')} />;
      case 'Cadastrar':
        return <CadastroServico onClick={() => setOption('visualizar')} />
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