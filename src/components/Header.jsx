import { useState } from 'react';
import style from './Header.module.css';
import LogoDark from '../assets/logo-dark.svg'
import Logolight from '../assets/logo-light.svg'


export function Header({ onChange }) {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        onChange(!isDarkTheme)
    };

    return (

    <div className={style.container + ` ${isDarkTheme ? style.dark : style.light}`}>

        <div className={style.header}>
            <img src={isDarkTheme ? LogoDark : Logolight} alt="Rachi logo" />
          {/* Aqui é um botão para responsividade */}
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


