import { useEffect, useRef, useState } from 'react';
import { Card } from './Card';
import style from './Plans.module.css';

export function Plans({isDarkTheme}) {

    const [isVisible, setIsVisible] = useState(false);

    // Crie uma referência para o elemento que você deseja acessar
    const elementoRefContainer = useRef(null);


    useEffect(() => {

    const handleScroll = () => {

      const element = elementoRefContainer.current // Substitua pela classe do seu componente


      const windowHeight = window.innerHeight
      const itemTop = element.getBoundingClientRect().top
      if (itemTop > windowHeight) {
        console.log('não aparece');
        setIsVisible(false);
      }else if(itemTop < windowHeight){
        console.log(windowHeight);
        // Use uma função anônima com setTimeout
            setIsVisible(true);

      }
    };

    window.addEventListener('scroll', handleScroll);

    // Verifique a visibilidade inicial quando o componente for montado
    handleScroll();
    }, []);


    return (
        <section className={style.section +  ` ${isDarkTheme ? style.dark : style.light}`}>
            <div ref={elementoRefContainer} className={` ${isVisible ? style.container : style.fade}`}>
                <header className={style.header}>
                    <h2>Nossos planos</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Donec lacinia mi quis euismod ultrices.
                    </p>
                </header>

                {/* Aqui vai os cards */}
                <div className={style.grid}>
                    <Card
                        animate={true}
                        backgroundColor='#EFF8FF'
                        height={540}
                        buttonLabel='Assinar'
                        title='Bronze'
                        price='28'
                    />
                    <Card
                        animate={false}
                        backgroundColor='#32394B'
                        height={564}
                        buttonLabel='Assinar'
                        title='Prata'
                        price='57'
                    />
                    <Card
                        animate={true}
                        backgroundColor='#EFF8FF'
                        height={540}
                        buttonLabel='Assinar'
                        title='Ouro'
                        price='94'
                    />
                </div>
                
            </div>
        </section>
    )
}