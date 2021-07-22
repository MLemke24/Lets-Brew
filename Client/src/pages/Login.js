import React, { useState } from "react";
import {useMutation} from '@apollo/client';
import  {LOGIN } from '../utils/mutations';
import Auth from '../utils/auth'

const LoginForm = () => {
    const [formState, setFormState] = useState({email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        const DataResponse = await login({
            variables: {
              email: formState.email,
              password: formState.password
            }
        })

        console.log(DataResponse)
        const token =  DataResponse.data.login.token
         Auth.login(token);
        
 
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
            <div className="form-group">
                <label>Email: </label>
                <input
                    className="form-input"
                    id = "email"
                    name="email"
                    placeholder="Enter your email"
                    value={formState.email}
                    onChange={handleChange}
                    
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                    className="form-input"
                    id="password"
                    name="password"
                    placeholder="***********"
                    value={formState.password}
                    onChange={handleChange}
                    
                />
            </div>
            {error ? (
                <div>
                    <p className="error-text">The provided credentials are incorrect</p>
                </div>
            ) : null}
            <div>
                <input className="btn" type="submit" value="Login" />
            </div>
        </form>
    )
}

export default LoginForm;