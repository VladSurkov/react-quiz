import styles from "./HeaderForModal.module.css";

const HeaderForModal = (props) => {
    return (
        <header className={styles.header}>{props.children}</header>
    )
}

export default HeaderForModal