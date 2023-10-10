import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import style from './Card.module.css'

export function Card({animate, backgroundColor, height, buttonLabel, title, price}) {

    let cardColor = '#293145'

    if(title === 'Prata'){
        cardColor = '#fff'
    }

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

    console.log(animate);
    console.log(isVisible);

    return (
            <div
                ref={elementoRefContainer}
                className={animate && isVisible ? style.card : style.content}
                style={{
                     backgroundColor: backgroundColor,
                     height: `${height}px`,
                }}
            >
                <header>
                    <h3 style={{ color: cardColor }}>{title}</h3>
                    <>
                        {cardColor === '#fff' ? (
                            <button className={style.button}>Preferido</button>
                        ): (
                            <></>
                        )} 
                    </>
                    <h4 style={{ color: cardColor }}>
                        <span>R$</span>
                           {price}
                        <span>/Mês</span>
                    </h4>
                </header>

                <p style={{ color: cardColor }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Donec lacinia mi quis euismod ultrices.
                </p>
                <Button
                    text={buttonLabel}
                />
            </div>

    )
}