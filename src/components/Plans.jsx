import { Card } from './Card';
import style from './Plans.module.css';

export function Plans() {
    return (
        <section className={style.section}>
            <div className={style.container}>
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
                        backgroundColor='#EFF8FF'
                        height={540}
                        buttonLabel='Assinar'
                        title='Bronze'
                        price='28'
                    />
                    <Card
                        backgroundColor='#32394B'
                        height={564}
                        buttonLabel='Assinar'
                        title='Prata'
                        price='57'
                    />
                    <Card
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