import reactLogo from '../../../assets/react.svg';
import styles from "./react-logo.module.css";

export function ReactLogo() {
    return (
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={styles["react-logo"]} alt="React logo" />
        </a>
    )
}