import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button/Button'
import style from './Contato.module.css'

export function Contato({text}) {

    const [isVisible, setIsVisible] = useState(false);

    // Crie uma referência para o elemento que você deseja acessar
    const elementoRefContainer = useRef(null);


    useEffect(() => {

    const handleScroll = () => {

      const element = elementoRefContainer.current // Substitua pela classe do seu componente


      const windowHeight = window.innerHeight
      const itemTop = element.getBoundingClientRect().top
      if (itemTop > windowHeight) {
        setIsVisible(false);
      }else if(itemTop < windowHeight){
        // Use uma função anônima com setTimeout
            setIsVisible(true);

      }
    };

    window.addEventListener('scroll', handleScroll);

    // Verifique a visibilidade inicial quando o componente for montado
    handleScroll();
    }, []);

    return (
       <section className={style.section}>
         <div ref={elementoRefContainer} className={` ${isVisible ? style.container : style.fade}`}>
            <header>
                <h2>Contato</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Donec lacinia mi quis euismod ultrices.
                </p>
            </header>

            <form className={style.form} action="" >
                <div className={style.fields}>
                    <input type="text" placeholder="Seu melhor e-mail"/>
                    <label form="email">

                    </label>
                    {/* No css colocar um ::after para dar um efeito ao clicar */}
                </div>
                <Button
                    text={text}
                />
            </form>
        </div>
       </section>
    )
}