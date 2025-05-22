import React from 'react';
import './termosresponsabilidade.css';

const TermosResponsabilidade = () => {
  return (
    <div className="termos-responsabilidade-container">
      <h1>Termos de Responsabilidade</h1>
      <p>
        Este documento descreve os termos de responsabilidade aplicáveis ao uso dos nossos serviços.
      </p>
      <p>
        Ao utilizar nossa plataforma, você concorda em cumprir com todas as diretrizes e normas descritas aqui.
      </p>
      <ul>
        <li>O usuário é responsável pelas informações fornecidas.</li>
        <li>O serviço não se responsabiliza por danos causados por uso indevido da plataforma.</li>
        <li>O descumprimento destes termos pode resultar em sanções ou exclusão da conta.</li>
      </ul>
    </div>
  );
};

export default TermosResponsabilidade;
