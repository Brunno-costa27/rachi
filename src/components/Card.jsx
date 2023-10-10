import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import style from './Card.module.css'

export function Card({isDarkTheme, animate, backgroundColor, height, buttonLabel, title, price}) {

    let cardColor = '#293145'

    if(title === 'Prata'){
        cardColor = '#fff'
    }

    const [isVisible, setIsVisible] = useState(false);
    const [hovered, setHovered] = useState(true);

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


    const cardStylePrata = {
        backgroundColor: hovered ? backgroundColor : '#32394b',
        height: `${height}px`,
        transition: 'background-color 0.3s ease'
      };

    const cardBackground = {
        backgroundColor: '#32394b'
    }  

    const darColor = {
        color: '#fff'
    }

    const lightColor = {
        color: '#fff'
    }

    return (
            <div
                style={!animate ? cardStylePrata : (isDarkTheme ? cardBackground : lightColor)} // Aqui é o único card preto
                onMouseEnter={() => setHovered(false)}
                onMouseLeave={() => setHovered(true)}
                ref={elementoRefContainer}
                className={animate && isVisible ? style.card : style.content}
                // style={{
                //      backgroundColor: backgroundColor,
                //      height: `${height}px`,
                // }}
            >
                <header>
                    <h3 style={isDarkTheme ?  darColor : lightColor }>{title}</h3>
                    <>
                        {cardColor === '#fff' ? (
                            <button className={style.button}>Preferido</button>
                        ): (
                            <></>
                        )} 
                    </>
                    <h4 style={isDarkTheme ?  darColor : lightColor }>
                        <span>R$</span>
                           {price}
                        <span>/Mês</span>
                    </h4>
                </header>

                <p  style={isDarkTheme ?  darColor : lightColor }>
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Donec lacinia mi quis euismod ultrices.
                </p>
                <Button
                    text={buttonLabel}
                />
            </div>

    )
}