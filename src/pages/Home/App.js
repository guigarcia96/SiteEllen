import React from 'react';
import './App.css';
import PageDefault from '../../components/PageDefault';
import LandingHome from '../../components/LandingHome';
import LetsTalk from '../../components/LetsTalk';

function App() {
  return (

    <PageDefault>
      <LandingHome />
      <LetsTalk />
    </PageDefault>


  );
}

export default App;
