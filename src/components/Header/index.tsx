import styles from './styles.module.scss'

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Logo Podcaster" />
            <p>O melhor para você ouvir, sempre.</p>
            <span>Quinta, 8 de Abril</span>
        </header>
    )
}