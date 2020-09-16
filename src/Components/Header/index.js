import React from 'react';
import Logo from '../../assets/imgs/logo.png'
import Instagram from '../../assets/imgs/instagram.png'
import Linkedin from '../../assets/imgs/linkedin.png'
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to='/'>
            <img src={Logo} alt="Venus em Branding" />
            <h2>Vênus em Branding | Ellen Oliveira</h2>
          </Link>
        </div>

        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/servicos">Trampos</Link>
            <ul className='sub-menu'>
              <li>
                <Link to='/marketing-de-influencia'>
                Marketing de Influência
                </Link>
              </li>
              <li>
                <Link to='/marketing-de-conteudo'>
                Marketing de Conteúdo
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/ellen-oliveira-a77584150/">
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/venusembranding/">
              <img src={Instagram} alt="Instagram" />
            </a>
          </li>
        </ul>

      </nav>
    </header>
  )
}
export default Header;