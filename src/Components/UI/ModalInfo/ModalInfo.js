import styles from "./ModalInfo.module.css";

import { useContext } from "react";
import { MyContextProvider } from "../../Context/Context";

const ModalInfo = (props) => {
    let { currentHeart } = useContext(MyContextProvider);

    return (
        <>
            <header className={styles.header}>
                <p className={styles.title}>Желаете приобрести новую жизнь?</p>
                <span className={styles.closeBtn} onClick={props.onHideModal}>&#10007;</span>
            </header>
            <main className={styles.content}>
                <p className={styles.text}>Ваше текущее количество жизней: <span>{currentHeart}</span></p>
                <p className={styles.text}>Стоимость одной жизни = 5 монет</p>
                <button onClick={props.onBuyLive} className={styles.buyBtn}>Купить одну жизнь</button>
            </main>
        </>
    );
}

export default ModalInfo;