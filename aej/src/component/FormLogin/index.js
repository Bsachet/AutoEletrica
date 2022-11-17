import './Form.css'
import TextField from "../TextField";
import Button from '../Button';
import Logo from '../Logo';
import { useState } from 'react';


const Form = (props) => {

const [name, setName] = useState('')
const [password, setPassword] = useState('')


const onSave = (event) => {
    event.preventDefault()
    props.onSavedUser({
        name,
        password
    })
}

    return (

        <section className='form'>
            <form onSubmit={onSave}>

                <Logo
                />

                <h2>Auto Elétrica Jair</h2>

                <TextField 
                required={true} 
                placeholder="Usuário"
                value={name}
                onChange={value => setName(value)}
                />

                <TextField 
                required={true} 
                placeholder="Senha" 
                value={password}
                onChange={value => setPassword(value)}
                />

                <Button >
                    Entrar
                </Button>

            </form>
        </section>


    )

}

export default Form