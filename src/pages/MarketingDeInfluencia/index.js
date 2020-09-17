import React from 'react'
import './style.css'
import PageDefault from '../../Components/PageDefault';
import Button from '../../Components/Button'
import Livro from '../../assets/imgs/livro.jpeg'
function MarketingDeInfluencia() {
  return (
    <PageDefault>
      <div className="wrapper-marketing-influencia">
        <div className="wrapper-content">
          <div className='text-marketing'>
            <h1>Marketing de Influência</h1>
            <span>Expananda sua rede de contatos</span>
            <p>
              Seja qual for o seu objetivo, posso ajudar você a chegar lá.
              Com anos de experiência, aprendi a importância do(a) Estratégia digital.
              Por isso, oriento todos os meus clientes ao longo desse processo essencial.
          </p>
            <Button title='Contato' />
          </div>
          <img src={Livro} alt="Livro" />
        </div>
        
      </div>
    </PageDefault>
  )
}
export default MarketingDeInfluencia;