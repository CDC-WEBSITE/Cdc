import styles from './Modal.module.css'

const Modal = (props) => {

    const closeModal = () => {
        props.setOpen(false);
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.main_container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <button type='button' className={styles.close} onClick={closeModal}></button>
                </div>
                <div className={styles.contents}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Modal;