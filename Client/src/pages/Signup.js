import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import  { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth'

const SignUpForm = () => {
    const [formState, setFormState] = useState({ email: '', username: '', password: '' });
    const [addUser, {error}] = useMutation(ADD_USER);
   
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
        
      const DataResponse = await addUser({
        variables: {
          email: formState.email,
          username: formState.username,
          password: formState.password
        }
      })

      console.log(DataResponse)
      const token =  DataResponse.data.addUser.token
      Auth.login(token);      
    };
  


    return (
      <>
        <form className="signupform" onSubmit={handleFormSubmit}>
            <div>
                <h1>Sign Up</h1>
            </div>
            <div className="form-group">
                <label for="username">Username</label>
                <input
                    className="form-input"
                    id = "username"
                    name="username"
                    
                    placeholder="Enter your username" 
                    value={formState.username}
                    onChange={handleChange}
                    />
            </div>
            <div className="form-group">
                <label for="email">email</label>
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
                    placeholder="**********"
                    value={formState.password}
                    onChange={handleChange}
                    />
            </div>
            <div>
                <input className="btn" type="submit" value="Sign Up" />
            </div>

        </form>
        {error && <div>Signup failed</div>}
      </>
    )
}

export default SignUpForm;