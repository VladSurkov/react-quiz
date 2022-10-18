import styles from "./HeartAndTime.module.css";
import plus from "../../../Assets/Plus.png";

import { MyContextProvider } from "../../Context/Context";
import React, { useContext, useEffect } from "react";
import { getTime } from "../../../Helpers/getTime";

const HeartAndTime = (props) => {
    let { currentHeart, timeLeft, setTimeLeft } = useContext(MyContextProvider);

    const minutes = getTime(Math.floor(timeLeft / 60));
    const seconds = getTime(timeLeft - minutes * 60); 

    console.log(timeLeft);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={styles.time}>
            <div className={styles.heart}>
                <span>{currentHeart}</span>
            </div>
            <span>{minutes} : {seconds}</span>
            <img src={plus} alt="" className={styles.plus} onClick={props.onShowModal}/>
        </div>
    );
}

export default HeartAndTime;