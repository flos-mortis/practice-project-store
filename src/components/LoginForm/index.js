import styles from "./LoginForm.module.scss"

function LoginForm() {
    return (
        <div className={styles.loginForm}>
            <img className={styles.closeModal} alt="" src="img/close.svg"></img>
            <div className={styles.content}>
                <h1>Войдите или зарегистрируйтесь</h1>
                <div className={styles.loginBtns}>
                    <button className="greenBtn">Войти</button>
                    <button className="orangeBtn">Через номер телефона</button>
                    <button className="whiteBtn">Регистрация через email</button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm