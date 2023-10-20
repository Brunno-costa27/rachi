import style from './Button.module.css'

export function Button({ text }) {
    return (
        <button className={style.button}>
            {text}
        </button>
    )
}