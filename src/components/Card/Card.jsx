import { useEffect, useRef, useState } from "react";
import { Button } from "../Button/Button";
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


    const cardStylePrata = {
        backgroundColor: hovered ? backgroundColor : '#222736',
        height: `${height}px`,
        transition: 'background-color 0.3s ease'
      };

    const cardStyleNormalDark = {
    backgroundColor: '#32394b',
    color: '#293145',
    height: `${height}px`,
    };  

    const cardStyleNormal = {
        backgroundColor: '#EFF8FF',
        color: '#293145',
        height: `${height}px`,
        };  
 

    const darColor = {
        color: '#fff'
    }

    const lightColor = {
        color: '#293145'
    }

    return (
            <div
                style={!animate ? cardStylePrata : (isDarkTheme ? cardStyleNormalDark : cardStyleNormal)} // Aqui é o único card preto
                onMouseEnter={() => setHovered(false)}
                onMouseLeave={() => setHovered(true)}
                ref={elementoRefContainer}
                className={animate && isVisible ? style.card : style.content}
            >
                <header>
                    <h3 style={isDarkTheme || !animate ?  darColor : lightColor }>{title}</h3>
                    <>
                        {cardColor === '#fff' ? (
                            <Button 
                                text="Preferido"
                            />
                        ): (
                            <></>
                        )} 
                    </>
                    <h4 style={isDarkTheme || !animate ?  darColor : lightColor }>
                        <span>R$</span>
                           {price}
                        <span>/Mês</span>
                    </h4>
                </header>

                <p style={isDarkTheme || !animate ?  darColor : lightColor }>
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Donec lacinia mi quis euismod ultrices.
                </p>
                <Button
                    text={buttonLabel}
                />
            </div>

    )
}