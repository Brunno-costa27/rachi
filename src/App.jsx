// import style from './App.module.css'
import { useState } from 'react';
import { ContentMain } from './components/ContentMain'
import { Header } from './components/Header'
import './global.css'
import { Funcionality } from './components/Functionality';
import { Aplication } from './components/Aplication';
import { Plans } from './components/Plans';

export function App() {



  const [appState, setAppState] = useState('');

  function handleHeaderChange(newValue) {
    // Atualize o estado do componente App com o valor do Header
    setAppState(newValue);
  }


  return (
    <>
      <Header
        onChange={handleHeaderChange}
      />  
    
      <main>
        <ContentMain
          text='Cadastre-se'
          isDarkTheme={appState}
        />

        <Funcionality
          isDarkTheme={appState}
        />

        <Aplication
          isDarkTheme={appState}
        />

        <Plans
          isDarkTheme={appState}
        />
      </main>
    </>
  )
}

