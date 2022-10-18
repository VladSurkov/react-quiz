import styles from "./ArrowButton.module.css";
import leftArrow from "../../../Assets/Levels Photo/Arrow_test2.png";

const ArrowButton = (props) => {
    return (
        <img className={styles.arrowImg} src={leftArrow} onClick={props.onClick} alt="" />
    );
}

export default ArrowButton;