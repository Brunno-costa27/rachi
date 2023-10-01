import { Button } from "./Button";
import style from './Card.module.css'

export function Card({backgroundColor, height, buttonLabel, title, price}) {

    let cardColor = '#293145'

    if(title === 'Prata'){
        console.log('oi');
        cardColor = '#fff'
    }

    return (
            <div 
                className={style.content}
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