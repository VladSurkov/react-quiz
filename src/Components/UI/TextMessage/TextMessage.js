import styles from "./TextMessage.module.css";

const TextMessage = (props) => {
    let className = 'block';
    if (props.textMessageIsVisible === true) {
        className = 'block-active';
    }

    return (
        <div className={styles[`${className}`]} id="textMessage">
            <p className={styles.title}>Не хватает монет &#128532;</p>
        </div>
    );
}

export default TextMessage;