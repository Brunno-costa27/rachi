import style from './ContentMain.module.css'
import HeroIlustration from '../assets/hero-illustration.svg';
import { Button } from './Button';


export function ContentMain({ text, isDarkTheme }) {

  

    return (
        <section className={style.section + ` ${isDarkTheme ? style.dark : style.light}`}>
            <div className={style.container}>
                <div>
                    <h1>
                        Rachi,
                        <br />
                         é tudo que você precisa em um só lugar.
                    </h1>
                    <Button
                        text='Cadastre-se'
                    />
                </div>

                <img src={HeroIlustration} alt="" />
            </div>
        </section>
    )
}



