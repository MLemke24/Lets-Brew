import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import  {ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth'

const SignUpForm = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const mutationResponse = await addUser({
        variables: {
          username: formState.username,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
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
                <h1>Sign Up</h1>
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input

                    id = "username"
                    placeholder="Enter your username" 
                    required
                    onChange={handleChange}
                    />
            </div>
            <div class="form-group">
                <label>Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    required 
                    onChange={handleChange}
                    />
            </div>
            <div>
                <input class="btn" type="submit" value="Sign Up" />
            </div>

</form>
    )
}

export default SignUpForm;