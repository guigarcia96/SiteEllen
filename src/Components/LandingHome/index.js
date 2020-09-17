import React from 'react'
import './style.css';
import Ellen from '../../assets/imgs/ellen.jpg'
import Button from '../../components/Button'

function LandingHome() {
  return (
    <div className="wrapper">
      <section>
        <img src={Ellen} alt="Ellen Caetano" />
        <div>
          <h1>Ellen Oliveira</h1>
          <span>Planejadora e Criadora de Conteúdo</span>
          <p>
            Sou formanda em publicidade e propaganda, meu maior objetivo é gerar vínculo entre marcas e usuários por meio de engajamento.

            Busco oportunidades para crescer e desenvolver experiências dentro do meu ambiente de trabalho, podendo gerar transformações pelas mídias sociais.
          </p>
          <p>
            Acredito no poder da internet em transformar marcas. Todas elas precisam conhecer seu público e saber como se comunicar com eles, além de clientes eles precisam ser fãs!
          </p>
          <p>
            Meus conhecimentos técnicos incluem as plataformas Postgrain, Stilingue, mLabs e Facebook Business. Atuo como Social Media nas áreas de Monitoramento e SAC 2.0, Redação para Redes Sociais e Revisão de Conteúdo
          </p>
          <Button title='Saiba Mais' />
        </div>
      </section>
    </div>
  )
}
export default LandingHome