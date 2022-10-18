import styles from "./CustomLink.module.css";

const CustomLink = (props) => {
    return (
        <a href={props.href} onClick={props.onClick} className={styles.levelLink} id={props.id}>{props.children}</a>
    );
}

export default CustomLink;