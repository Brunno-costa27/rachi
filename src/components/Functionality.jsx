import { useEffect, useRef, useState } from 'react';
import style from './Functionality.module.css';

export function Funcionality({ isDarkTheme }) {

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
        setIsVisible(true);

      }
    };

    window.addEventListener('scroll', handleScroll);

    // Verifique a visibilidade inicial quando o componente for montado
    handleScroll();
    }, []);

    return (
        <section className={style.section + ` ${isDarkTheme ? style.dark : style.light}`}>
            <h2 className={` ${isVisible ? style.title : style.fade}`}>Como funciona</h2>
            <div ref={elementoRefContainer } className={` ${isVisible ? style.container : style.fade}`}>
                <div>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M58.75 46.2501C58.75 49.5653 57.433 52.7448 55.0888 55.089C52.7446 57.4332 49.5652 58.7501 46.25 58.7501C42.9348 58.7501 39.7554 57.4332 37.4112 55.089C35.067 52.7448 33.75 49.5653 33.75 46.2501C33.75 42.9349 35.067 39.7555 37.4112 37.4113C39.7554 35.0671 42.9348 33.7501 46.25 33.7501C49.5652 33.7501 52.7446 35.0671 55.0888 37.4113C57.433 39.7555 58.75 42.9349 58.75 46.2501V46.2501Z" stroke="#0F9AFE" strokeWidth="3" strokeLinejoin="round"></path><path d="M52.5 46.2501H40M46.25 40.0001V52.5001V40.0001Z" stroke="#0F9AFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M34.9125 33.2063C32.975 32.5625 30.875 31.875 28.75 31.0625V24.8125C28.75 24.8125 32.5 23.2688 32.5 17.3125C34.4563 17.3125 34.4563 12.1375 32.5 12.1375C32.5 11.5625 34.5625 8.12501 33.75 4.81251C32.5625 0.0625126 18.6875 0.0625126 17.5 4.81876C11.5813 3.63126 15 11.525 15 12.3188C13.0438 12.3188 13.0438 17.3188 15 17.3188C15 23.275 18.75 24.8188 18.75 24.8188V31.0688C11.8063 33.7125 3.53125 35.4625 2.5 38.5688C1.3125 42.1438 1.25 48.75 1.25 48.75H27.5" stroke="#0F9AFE" strokeWidth="3" strokeLinejoin="round"></path></svg>
                    <h3>Crie Conexões</h3>
                    <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </div>

                <div>
                    <svg width="46" height="54" viewBox="0 0 46 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.25 28.1063L14.3937 23.25L11.75 25.8937L19.25 33.3937L34.25 18.3937L31.6063 15.75L19.25 28.1063Z" fill="#0F9AFE"></path><path d="M23 53.25L11.42 47.0756C8.11875 45.3193 5.35806 42.6972 3.43422 39.4907C1.51039 36.2842 0.496025 32.6144 0.499998 28.875V4.5C0.500991 3.50574 0.896398 2.55249 1.59944 1.84945C2.30249 1.1464 3.25574 0.750993 4.25 0.75H41.75C42.7443 0.750993 43.6975 1.1464 44.4005 1.84945C45.1036 2.55249 45.499 3.50574 45.5 4.5V28.875C45.504 32.6144 44.4896 36.2842 42.5658 39.4907C40.6419 42.6972 37.8812 45.3193 34.58 47.0756L23 53.25ZM4.25 4.5V28.875C4.24689 31.9346 5.07707 34.9373 6.65143 37.5608C8.22579 40.1843 10.4849 42.3296 13.1862 43.7663L23 48.9994L32.8137 43.7681C35.5154 42.3313 37.7747 40.1858 39.349 37.5619C40.9234 34.9381 41.7534 31.935 41.75 28.875V4.5H4.25Z" fill="#0F9AFE"></path></svg>
                    <h3>100% gratuito</h3>
                    <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </div>
                
                <div>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.07 32.07C30.1947 33.9447 27.6516 34.9979 25 34.9979C22.3484 34.9979 19.8053 33.9447 17.93 32.07H32.07ZM17.5 20H17.525H17.5ZM32.5 20H32.525H32.5ZM47.5 25C47.5 27.9547 46.918 30.8806 45.7873 33.6104C44.6566 36.3402 42.9992 38.8206 40.9099 40.9099C38.8206 42.9992 36.3402 44.6566 33.6104 45.7873C30.8806 46.918 27.9547 47.5 25 47.5C22.0453 47.5 19.1194 46.918 16.3896 45.7873C13.6598 44.6566 11.1794 42.9992 9.0901 40.9099C7.00078 38.8206 5.34344 36.3402 4.21271 33.6104C3.08198 30.8806 2.5 27.9547 2.5 25C2.5 19.0326 4.87053 13.3097 9.0901 9.0901C13.3097 4.87053 19.0326 2.5 25 2.5C30.9674 2.5 36.6903 4.87053 40.9099 9.0901C45.1295 13.3097 47.5 19.0326 47.5 25Z" stroke="#0F9AFE" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <h3>Compartilhamento</h3>
                    <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </div>
            </div>
        </section>
    )
}