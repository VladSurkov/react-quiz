import styles from "./ModalForCoins.module.css";

import { MyContextProvider } from "../../Context/Context";
import { useContext } from "react";

const ModalForCoins = (props) => {
    let { userCoins, setUserCoins, setIsModalOpened } = useContext(MyContextProvider);

    const coinButtonClickHandler = (e) => {
        userCoins += Number(e.target.textContent);
        setUserCoins(userCoins);
        setIsModalOpened(false);
    };

    return (
        <>
            <header className={styles.header}>
                <p className={styles.title}>Какое количество монет вы хотите приобрести?</p>
                <span className={styles.closeBtn} onClick={props.onHideModal}>&#10007;</span>
            </header>
            <div className={styles.buttons}>
                <button className={styles.btn} onClick={coinButtonClickHandler}>15</button>
                <button className={styles.btn} onClick={coinButtonClickHandler}>20</button>
                <button className={styles.btn} onClick={coinButtonClickHandler}>30</button>
                <button className={styles.btn} onClick={coinButtonClickHandler}>40</button>
            </div>
        </>
    );
};

export default ModalForCoins;