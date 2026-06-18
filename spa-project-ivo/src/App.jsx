import { useState } from 'react'
import Button from "./components/Button/Button";
import Login from './components/formularioLogin/FormularioLogin';




function App() {
    return (
        <>
            <Login />
            <Button texto={'Logar'} type={Text} alerta={'Testando botão logar'} />
            <Button texto={'Cadastrar'} type={Text} />
           


        </>
    )
}

export default App
