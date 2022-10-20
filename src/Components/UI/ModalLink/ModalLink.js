import styles from "./ModalLink.module.css";

const ModalLink = (props) => {
    return(
        <div>
            <header className={styles.header}>
                <p className={styles.title}>Открыть уровень?</p>
            </header>
            <div className={styles.text}>
                <p>Для открытия уровня нужно 25 монет</p>
            </div>
            <div className={styles.buttonsBlock}>
                <button onClick={props.onOpenLevel}>Открыть уровень</button>
                <button onClick={props.onHideModal}>Закрыть</button>
            </div>
        </div>
    );
}

export default ModalLink;