import styles from "./ModalInfo.module.css";

import { useContext } from "react";
import { MyContextProvider } from "../../Context/Context";

const ModalInfo = (props) => {
    let { currentHeart } = useContext(MyContextProvider);

    return (
        <>
            <header className={styles.header}>
                <p className={styles.title}>Желаете приобрести новую жизнь?</p>
            </header>
            <main className={styles.content}>
                <p className={styles.text}>Ваше текущее количество жизней: <span>{currentHeart}</span></p>
                <p className={styles.text}>Стоимость одной жизни = 5 монет</p>
            </main>
            <div className={styles.buttons}>
                <button onClick={props.onBuyLive}>Купить одну жизнь</button>
                <button onClick={props.onHideModal}>Закрыть</button>
            </div>
        </>
    );
}

export default ModalInfo;