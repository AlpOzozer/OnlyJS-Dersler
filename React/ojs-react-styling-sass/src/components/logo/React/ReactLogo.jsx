import reactLogo from '../../../assets/react.svg';
import styles from "./react-logo.module.scss";

export const ReactLogo = () => {
    return (
         <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={styles.logo} alt="React logo" />
        </a>
    );
};