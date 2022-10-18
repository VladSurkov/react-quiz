import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <button className={styles.btn} id={props.id} onClick={props.onClick}>{props.children}</button>
    );
}

export default Button;