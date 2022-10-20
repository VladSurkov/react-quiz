import styles from "./Level.module.css";
import helpButton from "../../Assets/helpButton.png";

import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import data from "../../Data/data";
import ITdata from "../../Data/ITdata";
import CookingData from "../../Data/CookingData";

import { MyContextProvider } from "../Context/Context";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import ModalInfo from "../UI/ModalInfo/ModalInfo";
import ModalForCoins from "../UI/ModalForCoins/ModalForCoins";
import TextMessage from "../UI/TextMessage/TextMessage";

import Steps from "../Header/Steps/Steps";
import HeartAndTime from "../Header/HeartAndTime/HeartAndTime";
import Coin from "../Header/Coin/Coin";

const Level = () => {
    let { sequence, index, setIndex, userCoins, setUserCoins, currentHeart, setCurrentHeart, isModalOpened, modalType, setModalType, setIsModalOpened, timeLeft, setTimeLeft } = useContext(MyContextProvider);
    const location  = useLocation();
    const navigate = useNavigate();

    let startData = data;
    switch (location.search) {
        case '?sport':
            startData = data;
        break;
        case '?it':
            startData = ITdata;
        break;
        case '?cooking':
            startData = CookingData;
        break;
        default: 
            break;
    };

    let [answer, setAnswer] = useState('');
    let [currentStep, setCurrentStep] = useState(1);
    const [textMessageIsVisible, setTextMessageIsVisible] = useState(false);

    const showModalHandler = (modalType) => {
        setModalType(modalType);
        setIsModalOpened(true);
    }
    const hideModalHandler = () => {
        setIsModalOpened(false);
    }

    const [content, setContent] = useState(startData[index]);

    const clickHelpButtonHandler = () => {
        if (userCoins >= 4) {
            let correctAnswerIndex = content.correctAnswer;
            const correctButton = document.getElementById(`${correctAnswerIndex}`);
            correctButton.classList.add('active');
            if (correctButton.classList.contains('active')) {
                correctButton.style.backgroundColor = '#42f55d';
                setTimeout(function() {
                    correctButton.style.backgroundColor = '';
                }, 200);
            };
            userCoins-=4;
            setUserCoins(userCoins);
        } else {
            setTextMessageIsVisible(true);
            setTimeout(() => {
                setTextMessageIsVisible(false);
            }, 1500);
        }
    }

    const checkCorrectAnswerHandler = (e) => {
        if(e.target.id == content.correctAnswer) {
            answer = true;
            setAnswer(answer);
        } else {
            answer = false;
            setAnswer(answer);
        }
        index++;
        setIndex(index);
        setContent(startData[index]);
        
        currentStep++;
        setCurrentStep(currentStep);

        if (answer === true) {
            userCoins+=2;
            setUserCoins(userCoins);
        }

        if (answer === false) {
            currentHeart--;
            setCurrentHeart(currentHeart);
            if (currentHeart === 0) {
                navigate('/gameLose');
            }
        }

        if (currentStep === startData.length + 1) {
            userCoins+=10;
            setUserCoins(userCoins);
            navigate('/gameWinner');
        }
    };

    const buyLifeHandler = () => {
        if (userCoins >= 5) {
            userCoins-=5;
            setUserCoins(userCoins);
            currentHeart++;
            setCurrentHeart(currentHeart);
            setIsModalOpened(false);
        } else {
            setIsModalOpened(false);
            setTextMessageIsVisible(true);
            setTimeout(() => {
                setTextMessageIsVisible(false);
            }, 1500);
        }
    };

    if (timeLeft === 0) {
        navigate('/gameLose');
    }

    let currentPhoto;
    if (location.search === '?sport') {
        currentPhoto = process.env.PUBLIC_URL + `/photosForLevels/Sport/${index}.jpg`;
    } else if (location.search === '?it') {
        currentPhoto = process.env.PUBLIC_URL + `/photosForLevels/It/${index}.jpg`;
    } else if (location.search === '?cooking') {
        currentPhoto = process.env.PUBLIC_URL + `/photosForLevels/Cooking/${index}.jpg`;
    };

    useEffect(() => {
        setCurrentHeart(3);
    }, []);

    useEffect(() => {
        return () => {
            setCurrentStep(1);
            setUserCoins(userCoins);
            setContent(startData[0]);
            setTimeLeft(2 * 60);
        }
    }, [location]);

    if (startData[index]) {
        return (
            <>
                {isModalOpened && <Modal onHideModal={hideModalHandler}>
                    {modalType === 1 ? 
                        <ModalInfo onHideModal={hideModalHandler} onBuyLive={buyLifeHandler} /> : 
                        <ModalForCoins onHideModal={hideModalHandler} />
                    }
                </Modal>}
                <TextMessage textMessageIsVisible={textMessageIsVisible}/>
                <main className={styles.page}>
                    <header className={styles.header}>
                        <Steps currentStep={currentStep} startData={startData}/>
                        <HeartAndTime onShowModal={() => showModalHandler(1)}/>
                        <Coin onShowModal={() => showModalHandler(2)}/>
                    </header>
                    <section className={styles.level}>
                        <div className={styles.photo}>
                            <img 
                                src={currentPhoto}
                                className={styles.backgroundPhoto}
                            />
                            <p>{content.question}</p>
                        </div>
                        <img src={helpButton} className={styles.helpButton} onClick={clickHelpButtonHandler} alt="help button"/>
                        <div className={styles.answers}>
                            <Button id="1" onClick={checkCorrectAnswerHandler}>{content.options[0]}</Button>
                            <Button id="2" onClick={checkCorrectAnswerHandler}>{content.options[1]}</Button>
                            <Button id="3" onClick={checkCorrectAnswerHandler}>{content.options[2]}</Button>
                            <Button id="4" onClick={checkCorrectAnswerHandler}>{content.options[3]}</Button>
                        </div>
                    </section>
                </main>
            </>
        );
    };
}

export default Level;