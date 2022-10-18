import styles from "./GameLose.module.css";
import gameOver from "../../Assets/gameOver1.png";

import { useNavigate } from "react-router-dom";
import {MyContextProvider} from "../Context/Context";
import React, { useContext } from "react";

const GameLose = () => {
    const navigate = useNavigate();
    let { setIndex } = useContext(MyContextProvider);

    const clickBackToMenuHandler = () => {
        navigate('/');
    }

    const clickPlayAgainHandler = () => {
        navigate(-1);
        setIndex(0);
    }
    
    return (
        <section className={styles.page}>
            <img src={gameOver} className={styles.img}/>
            <div className={styles.page__buttons}>
                <button className={styles.button} onClick={clickBackToMenuHandler}>Вернуться в меню</button>
                <button className={styles.button} onClick={clickPlayAgainHandler}>Пройти еще раз</button>
            </div>
        </section>
    );
}

export default GameLose;