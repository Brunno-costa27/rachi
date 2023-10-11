import style from './App.module.css'
import { useState, useEffect } from 'react';
import { ContentMain } from './components/ContentMain'
import { Header } from './components/Header'
import './global.css'
import { Funcionality } from './components/Functionality';
import { Aplication } from './components/Aplication';
import { Plans } from './components/Plans';
import { Contato } from './components/Contato';
import BarLoader from "react-spinners/BarLoader";

export function App() {



  const [appState, setAppState] = useState('');
  const [loading, setLoading] = useState(true);

  function handleHeaderChange(newValue) {
    // Atualize o estado do componente App com o valor do Header
    setAppState(newValue);
  }


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (

    <>
      {loading ? (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
          <BarLoader color={"#6E7275"} size={50} />
        </div>
      ) : (
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

            <Contato
              text="Enviar"
            />

            <footer className={style.footer}>
                <span>Desenvolvido por </span>
                <a href="#">Brunno Costa</a>
            </footer>
          </main>
        </>
      )}
    </>
    
  )
}

