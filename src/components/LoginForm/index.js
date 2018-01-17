import React from 'react';
import Input from '../Input'

const loginHandler = (event) => {
    event.preventDefault();
    console.log("Login: " + event.target.login.value);
    console.log("Password: " + event.target.password.value);
}

const loginForm = (props) => {
    return (
        <form onSubmit={loginHandler}>
            <h2>Login Form</h2>
            <Input
                name="login"
                type="text"
                label="Login: "
                placeholder="Login" />
            <Input
                name="password"
                type="password"
                label="Password:"
                placeholder="Password" />
            <button>Log in</button>
        </form>
    )
}

export default loginForm;