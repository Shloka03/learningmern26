import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';
import { MapDemo1 } from './components/MapDemo1';
import { MapDemo2 } from './components/MapDemo2';

function App() {
  

  return (
    <>
      <div>
        <HeaderComponent></HeaderComponent>
        <MapDemo2></MapDemo2>
        <FooterComponent></FooterComponent>
        
      </div>
    </>
  );
}

export default App;
