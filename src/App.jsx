import style from './App.module.css'
import { useState, useEffect } from 'react';
import { ContentMain } from './components/ContantMain/ContentMain'
import { Header } from './components/Header/Header'
import './global.css'
import { Funcionality } from './components/Funcionality/Functionality';
import { Aplication } from './components/Aplication/Aplication';
import { Plans } from './components/Plans/Plans';
import { Contato } from './components/Contato/Contato';
import BarLoader from "react-spinners/BarLoader";
import {RxChevronUp} from 'react-icons/rx'

export function App() {

  const [appState, setAppState] = useState('');
  const [loading, setLoading] = useState(true);

  function handleHeaderChange(newValue) {
    // Atualize o estado do componente App com o valor do Header
    setAppState(newValue);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Isso permite a rolagem suave
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  return (

    <>
      {loading ? (
        <div 
            style=
            {{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center', height: '100vh'
            }}
        >
            <BarLoader color={"#0f9afe"} size={50} />
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

            <button onClick={scrollToTop} className={style.scrollToTopButton}>
                <RxChevronUp size={30}/>
            </button>
          </main>
        </>
      )}
    </>
    
  )
}

