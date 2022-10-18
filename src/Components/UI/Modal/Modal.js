import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onHideModal}></div>
}

const ModalWindow = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onHideModal={props.onHideModal}/>, portalElement)}
            {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
            <ModalWindow>{props.children}</ModalWindow>
        </Fragment>
    );
}

export default Modal;