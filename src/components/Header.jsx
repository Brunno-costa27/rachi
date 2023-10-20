import { useState } from 'react';
import style from './Header.module.css';
import LogoDark from '../assets/logo-dark.svg'
import Logolight from '../assets/logo-light.svg'


export function Header({ onChange , onChangeToggle, outro}) {

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        onChange(!isDarkTheme)
    };

    const toggle = () => {
      setIsOpen(!isOpen)
      onChangeToggle(!isOpen)
    };

    console.log(isDarkTheme);

    return (

    <div className={style.container + ` ${isDarkTheme ? style.dark : style.light}`}>

        <div className={style.header}>
            <img src={isDarkTheme ? LogoDark : Logolight} alt="Rachi logo" />
          {/* Aqui é um botão para responsividade */}

          {!isOpen ? (
              <>
                <button onClick={toggle}>
                  <svg 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24" strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className={isDarkTheme ? style.toggle : style.toggleDark} 
                      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </button>
              </>
          ):(
            <>
           <div className={style.menu}>
                   <ul className={isDarkTheme ? style.dark : style.light}>
                      <li>
                        <a href="Funcionalidades">Funcionalidades</a>
                      </li>
                      <li>
                        <a href="App">App</a>
                      </li>
                      <li>
                      <a href="Planos">Planos</a>
                      </li>
                      <li>
                        <a href="Contato">Contato</a>
                      </li>
                      <div className={isDarkTheme ? style.dark : style.light}>
                        <label className={style.themeToggle}>
                          <input
                            type="checkbox"
                            checked={isDarkTheme}
                            onChange={toggleTheme}
                          />
                          <span className={style.slider}></span>
                        </label>
                      </div>
                   </ul>

               </div>

               <button onClick={toggle}>
                  <svg 
                    stroke="currentColor"
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={isDarkTheme ? style.toggle : style.toggleDark} 
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
               </button>
              </>
          )}






            <ul>
              <li>
                <a href="Funcionalidades">Funcionalidades</a>
              </li>
              <li>
                <a href="App">App</a>
              </li>
              <li>
              <a href="Planos">Planos</a>
              </li>
              <li>
                <a href="Contato">Contato</a>
              </li>

              <div className={isDarkTheme ? style.dark : style.light}>
                <label className={style.themeToggle}>
                  <input
                    type="checkbox"
                    checked={isDarkTheme}
                    onChange={toggleTheme}
                  />
                  <span className={style.slider}></span>
                </label>
             </div>

            </ul>
      </div>

    </div>
    )
}


