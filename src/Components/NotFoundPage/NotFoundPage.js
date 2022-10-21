import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    return (
        <section>
            <div className={styles['error-block']}>
                <h3>404</h3>
                <p>Page not found</p>
            </div>
        </section>
    );
}

export default NotFoundPage;