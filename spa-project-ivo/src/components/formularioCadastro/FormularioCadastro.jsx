import styles from "./FormularioLogin.module.css"

function Login() {
    function CliqueCadastro(){
        
    }
    return (
        <>
        <div>
            <form>
                <p> Nome:</p>
                <input id="nome" name="nome" type="text" placeholder="Digite seu nome..." />

                <p> E-mail:</p>
                <input id="usuario" name="usuario" type="text" placeholder="Digite seu e-mail..." />

                <p>Senha:</p>
                <input id="senha" name="senha" type="password" placeholder="Digite sua senha..." /><br />

    
            
            </form>
        </div>
        </>
    );
}

export default Login;