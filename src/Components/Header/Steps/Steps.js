import styles from "./Steps.module.css";
import ArrowButton from "../../UI/Arrow-Button/ArrowButton";
import { Link } from "react-router-dom";

const Steps = (props) => {
    return (
        <div className={styles.step}>
            <Link to="/" className={styles.arrow} ><ArrowButton /></Link>
            <span>{props.currentStep} / {props.startData.length}</span>
        </div>

    );
}

export default Steps;