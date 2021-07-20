import React, { useState } from "react";
import {useMutation} from '@apollo/react-hooks';
import  {LOGIN } from '../utils/mutations';

import Auth from '../utils/auth'

const LoginForm = () => {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { username: formState.username, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    return (

        <form onSubmit={handleFormSubmit}>
            <div>
                <h1>Login</h1>
            </div>
            <div class="form-group">
                <label>Username: </label>
                <input

                    id="username"
                    placeholder="Enter your username"
                    onChange={handleChange}
                    required
                />
            </div>
            <div class="form-group">
                <label>Password:</label>
                <input

                    id="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    required
                />
            </div>
            {error ? (
                <div>
                    <p className="error-text">The provided credentials are incorrect</p>
                </div>
            ) : null}
            <div>
                <input class="btn" type="submit" value="Login" />
            </div>
        </form>
    )
}

export default LoginForm;