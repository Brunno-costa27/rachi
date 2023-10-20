import style from './Aplication.module.css';
import appStore from '../../assets/app-store.svg'
import playStore from '../../assets/play-store.svg'
import appIlustration from '../../assets/app-illustration.svg'
import { useEffect, useRef, useState } from 'react';

export function Aplication({ isDarkTheme }) {

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
    } else if(itemTop < windowHeight){
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

                <div className={` ${isVisible ? style.content : style.fade}`}>

                    <h2 className={` ${isVisible}`}>Baixe nosso app para desfrutar mais!</h2>
                    <p>
                    Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae
                     et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.
                    </p>

                    <div className={` ${isVisible ? style.app : style.fade}`}>

                        <a href="#">
                            <img src={appStore} alt="" />
                        </a>

                        <a href="#">
                            <img src={playStore} alt="" />
                        </a>

                    </div>

                </div>

                <img className={` ${isVisible ? style.appIlustration : style.fade}`} src={appIlustration} alt="" />
            </div>

        </section>
    )
}