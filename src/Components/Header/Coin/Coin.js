import styles from "./Coin.module.css";
import coin from "../../../Assets/Coin2.png";
import plus from "../../../Assets/Plus.png";

import React, { useContext } from "react";
import {MyContextProvider} from "../../Context/Context";

const Coin = (props) => {
    let { userCoins } = useContext(MyContextProvider);

    return (
        <div className={styles.money}>
            <img src={coin} alt="" className={styles.coin}/>
            <p>{userCoins}</p>
            <img src={plus} alt="" className={styles.plus} onClick={props.onShowModal}/>
        </div>
    );
}

export default Coin;