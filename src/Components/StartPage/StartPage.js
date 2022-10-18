import styles from "./StartPage.module.css";
import Logo from "../../Assets/Logo.png";
import CheckMark from "../../Assets/checkMark.png";
import mainCoin from "../../Assets/main-coin.png";

import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal/Modal";
import ModalLink from "../UI/ModalLink/ModalLink";
import TextMessage from "../UI/TextMessage/TextMessage";
import { MyContextProvider } from "../Context/Context";

const generateRandomSequence = () => {
    const resArray = [];
    for(let i = 0; i < 10; i++) {
        resArray[i] = i;
    }
    return resArray.sort(() => Math.random() - 0.5);
};

const StartPage = () => {
    let { sequence, setSequence, setIndex, userCoins, setUserCoins, isOpenLevel, setIsOpenLevel } = useContext(MyContextProvider);

    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [textMessageIsVisible, setTextMessageIsVisible] = useState(false);

    const hideModalHandler = () => {
        setIsModalOpen(false);
    }

    const showModalHandler = () => {
        if (isOpenLevel === true) {
            navigate('/level?cooking');
        }
        setIsModalOpen(true);
    }

    const openLevelHandler = () => {
        if (isOpenLevel === false) {
            if (userCoins >= 25) {
                userCoins-=25;
                setUserCoins(userCoins);
                setIsOpenLevel(true);
                navigate('/level?cooking');
            } else {
                setIsModalOpen(false);
                setTextMessageIsVisible(true);
                setTimeout(() => {
                    setTextMessageIsVisible(false);
                }, 1500);
            }
        }
    }

    const randomArrayGenerationHandler = () => {
        sequence = generateRandomSequence();
        setSequence(sequence);
    }

    useEffect(() => {
        setIndex(0);
    }, []);

    useEffect(() => {
        setUserCoins(userCoins);
    }, [userCoins]);

    return (
        <>
            {/* {[0,1,2,3].map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <p>item</p>
                                <>
                                    <p>
                                        {item}
                                    </p>
                                    <p>
                                        {item}
                                    </p>
                                </>
                            </React.Fragment>
                        )
                    })} */}
            {isModalOpen && <Modal onHideModal={hideModalHandler}>
                <ModalLink 
                    onHideModal={hideModalHandler}
                    onOpenLevel={openLevelHandler}
                />
            </Modal>}
            <TextMessage textMessageIsVisible={textMessageIsVisible}/>
            <section className={styles.page}>
                <div className={styles['left-side']}>
                    <div className={styles['left-container']}>
                        <div className={styles['left-side__content']}>
                            <div className={styles['logo-block']}>
                                <img src={Logo} alt="Logo" className={styles.logo} />
                                <p>Queezy</p>
                                <div>v1.0</div>
                            </div>
                            <h1 className={styles['left-side__content__title']}>Quiz Time</h1>
                            <div className={styles['left-side__content__info']}>
                                <div className={styles['left-side__content__info__item']}><img src={CheckMark} alt="Check mark" className={styles.checkMark}/>Несколько уровней на разный вкус</div>
                                <div className={styles['left-side__content__info__item']}><img src={CheckMark} alt="Check mark" className={styles.checkMark}/>Заработок монет и открытие новых уровней</div>
                                <div className={styles['left-side__content__info__item']}><img src={CheckMark} alt="Check mark" className={styles.checkMark}/>Интересные и сложные вопросы</div>
                            </div>
                            <div className={styles['left-side__content__userInfo']}>
                                <div className={styles.mainCoin}><img src={mainCoin} className={styles.mainCoinIcon}/>{userCoins}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles['right-side']}>
                    <div className={styles['right-container']}>
                        <div className={styles['right-side__content']}>
                            <h1 className={styles['right-side__content__title']}>Выберете уровень</h1>
                            <div className={styles['levels-block']}>
                                <Link to={{
                                    pathname: "/Level",
                                    search: 'sport',
                                }} className={styles.link} onClick={randomArrayGenerationHandler}>Sport Quiz</Link> 
                                <Link to={{
                                    pathname: "/Level",
                                    search: 'it',
                                }} className={styles.link} onClick={randomArrayGenerationHandler}>IT Quiz</Link>
                                <div className={styles.blockLink}>
                                    <a href="#" className={isOpenLevel ? styles.link : styles.link + ' ' + styles.block} onClick={showModalHandler} id="coockingLink">Cooking Quiz</a> {/* onClick={clickBlockedLevelHandler} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default StartPage;