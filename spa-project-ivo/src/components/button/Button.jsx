import styles from "./Button.module.css"


function Button({ type='button', onClick, children}) {

    return (
        <>
        <button type={type} className={styles.customButton} onClick={onClick}>{texto} {children}</button>
        </>
    )
}

export default Button