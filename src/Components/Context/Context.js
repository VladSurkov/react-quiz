import { createContext, useState, useEffect } from 'react';

//create a context, with createContext api
export const MyContextProvider = createContext();

const MyContext = (props) => {
    let [index, setIndex] = useState(0);
    const [sequence, setSequence] = useState('');

    // state for timer
    const [timeLeft, setTimeLeft] = useState(5);

    // this state will be shared with all components
    let [userCoins, setUserCoins] = useState(0);
    let [currentHeart, setCurrentHeart] = useState(3);
    const [isOpenLevel, setIsOpenLevel] = useState(false);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [modalType, setModalType] = useState(0);

    return (
        // this is the provider providing state
        <MyContextProvider.Provider value={{sequence, setSequence, 
            index, setIndex, 
            userCoins, setUserCoins, 
            currentHeart, setCurrentHeart, 
            isOpenLevel, setIsOpenLevel, 
            isModalOpened, setIsModalOpened, 
            modalType, setModalType,
            timeLeft, setTimeLeft}}
        >
            {props.children}
        </MyContextProvider.Provider>
    );
};

export default MyContext;