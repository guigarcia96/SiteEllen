import React from 'react';
import './style.css'
import Linkedin from '../../assets/imgs/linkedin.png'
import Instagram from '../../assets/imgs/instagram.png'

function LetsTalk() {
  return (
    <div className="conversar">
      <section className="conteudo">
        <h1>Vamos Conversar?</h1>
        <span>São Paulo - Pirituba</span>
        <a href="mailto:ellencaetano2@gmail.com?subject=Contato" title="">ellencaetano2@gmail.com</a>
        <span>(11) 95324-0413</span>
        <div className="images">
          <a target="_blank" href="https://www.linkedin.com/in/ellen-oliveira-a77584150/">
          <img src={Linkedin} alt="Linkedin" />
          </a>
          <a target="_blank" href="https://www.instagram.com/venusembranding/">
          <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </section>
    </div>
  )
}
export default LetsTalk