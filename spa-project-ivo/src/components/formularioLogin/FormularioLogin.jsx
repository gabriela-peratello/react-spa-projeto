import styles from "./FormularioLogin.module.css"
import Button from "../Button/Button";


function Login() {
    const handleSubmit =  (event) => {
        event.preventDefault();
        alert('teste')
    }
   
    return (
        <>
            <div>
                <form className={styles.formGroup} onSubmit={handleSubmit}>
                    <p> E-mail:</p>
                    <input id="usuario" name="usuario" type="email" placeholder="Digite seu e-mail..." />

                    <p>Senha:</p>
                    <input id="senha" name="senha" type="password" placeholder="Digite sua senha..." /><br />

                    <div className={styles.formActions}>
                        <button type="Submit">Entrar</button>
                        <button type="Reset">Limpar</button>
                    </div>



                </form>
            </div>
        </>
    );
}

export default Login;
