import styles from './styles.module.css'
import { Copyright } from 'lucide-react'

export function Footer(){
    return(
        <>
        <footer className={styles.footer}>
            <a href="">Entenda com funciona a técnica do pomodoro</a>
            <a href="">Cronometro Pomodoro<Copyright /> {new Date().getFullYear()} - Feito como 💚</a>
            </footer>
        </>
    )
}