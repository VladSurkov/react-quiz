import styles from "./ModalLink.module.css";

const ModalLink = (props) => {
    return(
        <div>
            <header className={styles.header}>
                <p className={styles.title}>Для открытия уровня, нужно 25 монет, открыть уровень?</p>
                <span className={styles.closeBtn} onClick={props.onHideModal}>&#10007;</span>
            </header>
            <div className={styles.buttonsBlock}>
                <button onClick={props.onOpenLevel}>Открыть уровень</button>
                <button onClick={props.onHideModal}>Закрыть</button>
            </div>
        </div>
    );
}

export default ModalLink;