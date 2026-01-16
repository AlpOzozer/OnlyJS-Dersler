import viteLogo from '/vite.svg';
import styles from "./vite-logo.module.css";

export function ViteLogo() {
    return (
        <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className={styles["vite-logo"]} alt="Vite logo" />
        </a>
    )
}