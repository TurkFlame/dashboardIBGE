import React from 'react';
import '../index.css';

const SobreNos: React.FC = () => {
  return (
    <div className="main-content mt-5">
      <div className="sobre-nos-container">
        <h3>Sobre Nós</h3>
        <hr className='mt-1' />
        <p className='mb-3'>
          Projeto feito pelos alunos do 5° Periodo de engenharia de software,
          utilizando a API gratuita do IBGE e trazendo dados em formas de gráficos e
          tabelas para demonstração dessas pesquisas.
        </p>
      </div>

      <div className="sobre-nos-container">
        <section>
          <h3>Nossa História</h3>
          <hr className='mt-1' />
          <p className='mb-3'>
            Juntando os alunos aos poucos, foi-se criando uma equipe incrivel e que se completa em todas
            as areas, fazendo possivel entregar esse projeto incrivel que estamos vendo.
          </p>
        </section>
      </div>

      <div className="sobre-nos-container">
        <section>
          <h3>Nossos Valores</h3>
          <hr className='mt-1' />
          <ul className='mb-3'>
            <li>Inovação</li>
            <li>Qualidade</li>
            <li>Sustentabilidade</li>
            <li>Integridade</li>
            <li>Responsabilidade Social</li>
          </ul>
        </section>
      </div>

      <div className="sobre-nos-container">
        <section>
          <h3>Conheça Nossa Equipe</h3>
          <hr className='mt-1' />
          <p className='mb-3'>
            Nossa equipe é composta por alunos do Centro universitário Campo Real e
            apaixonados pelo que fazem. Ao todo trabalhamos em 5 para a entrega deste projeto para 
            entregar o melhor para nossos projetos.
          </p>

          <ul className='mb-3'>
            <li>Bryan Mernick</li>
            <li>Gabriel Vinicius Amtunes</li>
            <li>Luisão</li>
            <li>Ives Eduardo de Lara kracoki</li>
            <li>Weslley césar zampier</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SobreNos;
