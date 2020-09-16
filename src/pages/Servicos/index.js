import React from 'react';
import './style.css'
import Card from '../../Components/Card'
import Livro from '../../assets/imgs/livro.jpeg'
import PilesOfBooks from '../../assets/imgs/piles-of-books.jpeg'
import ManWithBook from '../../assets/imgs/man-with-book.jpg'
import PageDefault from '../../Components/PageDefault'

function Servicos() {
  return (
    <PageDefault>
      <div className="wrapper-servicos">
        <section className="conteudo-servicos">
          
          <h1>Meus Serviços</h1>
          <p>Soluções Criativas</p>
         
          <div className="cards">
            <Card title='Estratégia Digital' urlImage={Livro} />
            <Card title='Marketing de Conteúdo' urlImage={ManWithBook} />
            <Card title='Geração de Leeds' urlImage={PilesOfBooks} />
          </div>
        </section>
      </div>
    </PageDefault>

  )
}
export default Servicos