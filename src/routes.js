import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/App';
import Servicos from './pages/Servicos'
import MarketingDeInfluencia from './pages/MarketingDeInfluencia'
import MarketingDeConteudo from './pages/MarketingDeConteudo'
function Routes() {
  return (
    <BrowserRouter>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/servicos' exact component={Servicos} />
        <Route path='/marketing-de-influencia' exact component={MarketingDeInfluencia} />
        <Route path='/marketing-de-conteudo' exact component={MarketingDeConteudo} />
        
      </Switch>

    </BrowserRouter>
  )
}
export default Routes;