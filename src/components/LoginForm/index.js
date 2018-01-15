import React from 'react';
import Input from '../Input'

const loginForm = (props) => {

    let login;
    let password;

    return (
        <form>
            <h2>Login Form</h2>
            <Input
                type="text"
                label="Login: "
                placeholder="Login" />
            <Input
                type="password"
                label="Password:"
                placeholder="Password" />
            <button onClick={() => props.onSubmitLoginForm(login, password)}>Log in</button>
        </form>
    )
}

export default loginForm;