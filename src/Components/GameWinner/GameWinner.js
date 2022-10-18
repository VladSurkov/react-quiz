import styles from "./GameWinner.module.css";
import Crown from "../../Assets/Crown.png";

import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MyContextProvider } from "../Context/Context";

const GameWinner = () => {
    let { currentHeart, setCurrentHeart, userCoins, setUserCoins, setIndex } = useContext(MyContextProvider);
    const navigate = useNavigate();

    const clickBackToMenuHandler = () => {
        navigate('/');
        setCurrentHeart(3);
    }

    const clickPlayAgainHandler = () => {
        navigate(-1);
        setIndex(0);
        setCurrentHeart(3);
    };

    useEffect(() => {
        setUserCoins(userCoins);
    }, [userCoins]);

    return (
        <section className={styles.gameWinner}>
            <div className={styles.container}>
                <div className={styles.gameWinner__content}>
                    <img src={Crown} alt="Crown"/>
                    <h3>Вы прошли этот уровень!</h3>
                    <p>У вас осталось {currentHeart} жизней</p>
                    <p>У вас теперь {userCoins} монет</p>
                    <div className={styles.gameWinner__content__buttons}>
                        <button className={styles.button} onClick={clickBackToMenuHandler}>Вернуться в меню</button>
                        <button className={styles.button} onClick={clickPlayAgainHandler}>Пройти еще раз</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GameWinner;