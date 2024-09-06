// Arquitetos.js
import React from 'react';
// Remova a linha abaixo se você não tiver o arquivo CSS específico
import '../components/Arquitetos.css';

const Arquitetos = () => {
  return (
    <div className="bg-gray-100 md:bg-black text-gray-800 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Benefícios para Arquitetos Parceiros</h1>
        <p className="text-lg text-center mb-4">
          Descubra as vantagens exclusivas ao se tornar parceiro arquiteto. Nossa parceria oferece uma série de benefícios que irão potencializar seu trabalho.
        </p>
        {/* Adicione aqui mais conteúdo sobre os benefícios */}
      </div>
    </div>
  );
};

export default Arquitetos;
