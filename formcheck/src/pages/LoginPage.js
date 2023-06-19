import {useState} from 'react';
import Input from '../components/Input';
import './LoginPage.css'
import React from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordError, setPasswordError] = useState()
    const [checked, setChecked] = React.useState(false)

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }
    const onChangePassword = (event) =>{
        const passwordValue = event.target.value
        setPassword(passwordValue)
        if(passwordValue.lenght >=8){
            setPasswordError()
         }else {
            setPasswordError(" A senha deve conter 8 caracteres")
        }
    }

    const mostarSenha = (event) =>{
        
    }
    const onSubmit = () =>{

    }
    const handleChange = () =>{
        setChecked(!checked)
    }
    return (
        <div className='container'>
            <div className='formContainer'>
                <Input
                    label="E-mail"
                    name="emailInput"
                    value={email}
                    onChange={onChangeEmail}
                />
                <Input 
                     label="Senha"
                     type='password'
                     name="passwordInput"
                     value={password}
                     onChange={onChangePassword}
                     errorMessage={passwordError}
                />
                <Input
                    label="Mostrar"
                    type='checkbox'
                    checked={checked}
                    onChange={handleChange}
                
                />
                <button onClick={onSubmit}>Entar</button>
            </div>
        </div>
    );
}

export default LoginPage;