import { Button } from './Button'
import style from './Contato.module.css'

export function Contato({text}) {
    return (
       <section className={style.section}>
         <div className={style.container}>
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