import React from 'react';
import './App.css';
import PageDefault from '../../Components/PageDefault';
import LandingHome from '../../Components/LandingHome';
import LetsTalk from '../../Components/LetsTalk';

function App() {
  return (

    <PageDefault>
      <LandingHome />
      <LetsTalk />
    </PageDefault>


  );
}

export default App;
