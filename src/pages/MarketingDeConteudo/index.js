import React from 'react'
import './style.css'
import PageDefault from '../../components/PageDefault';
import Button from '../../components/Button'
import Venus from '../../assets/imgs/venus.png'

function MarketingDeConteudo() {
  return (
    <PageDefault>
      <div className="wrapper-marketing-influencia">
        <div className="wrapper-content-conteudo">
          <img src={Venus} alt="Logo Venus em Branding" />
          <div className='text-marketing-conteudo'>
            <h1>Marketing de conteúdo</h1>
            <span>Vênus em Branding</span>
            <p>
            Somos uma agência de consultoria de marca que visa ajudar empreendedoras a alcançar sucesso em seus negócios com dicas de melhorias da marca no seu dia a dia.📢
          </p>
            <Button title='Confira nossos Conteúdos' />
          </div>
        </div>
        
      </div>
    </PageDefault>
  )
}
export default MarketingDeConteudo;