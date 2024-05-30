import React from 'react';
import '../index.css';
  
  const SobreNos: React.FC = () => {
    return (
        <div className="main-content">
        <div className="sobre-nos-container">
          <h1>Sobre Nós</h1>
          <p>
            Projeto feito pelos alunos do 5° Periodo de engenharia de software,
            utilizando a API gratuita do IBGE e trazendo dados em formas de gráficos e
            tabelas para demonstração dessas pesquisas.
          </p>
          <section>
            <h2>Nossa História</h2>
            <p>
              Juntando os alunos aos poucos, foi-se criando uma equipe incrivel e que se completa em todas
              as areas, fazendo possivel entregar esse projeto incrivel que estamos vendo.
            </p>
          </section>
          <section>
            <h2>Nossos Valores</h2>
            <ul>
              <li>Inovação</li>
              <li>Qualidade</li>
              <li>Sustentabilidade</li>
              <li>Integridade</li>
              <li>Responsabilidade Social</li>
            </ul>
          </section>
          <section>
            <h2>Conheça Nossa Equipe</h2>
            <p>
              Nossa equipe é composta por profissionais altamente qualificados e
              apaixonados pelo que fazem. Juntos, trabalhamos para entregar o melhor
              para nossos projetos.
            </p>
          </section>
        </div>
      </div>
  );
};

export default SobreNos;