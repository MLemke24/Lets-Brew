import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import  {ADD_USER } from '../utils/mutations';
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

      const token =  DataResponse.data.user.token

      Auth.login(token);

      
      // try {
      //   const { data } = await addUser({
        
      //     variables: { ...formState }
      //   });
      //   console.log(data)
      //   Auth.login(data.addUser.token);
      // } catch (e) {
      //   console.error(e);
      // }
    };
  


    return (
      <>
        <form onSubmit={handleFormSubmit}>
            <div>
                <h1>Sign Up</h1>
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input
                    className="form-input"
                    id = "username"
                    name="username"
                    type="username"
                    placeholder="Enter your username" 
                    value={formState.username}
                    onChange={handleChange}
                    />
            </div>
            <div class="form-group">
                <label for="email">email</label>
                <input
                    className="form-input"
                    id = "email"
                    name="email"
                    type="email"
                    placeholder="Enter your email" 
                    value={formState.email}
                    onChange={handleChange}
                    />
            </div>
            <div class="form-group">
                <label>Password:</label>
                <input
                    className="form-input"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="**********"
                    value={formState.password}
                    onChange={handleChange}
                    />
            </div>
            <div>
                <input class="btn" type="submit" value="Sign Up" />
            </div>

        </form>
        {error && <div>Signup failed</div>}
      </>
    )
}

export default SignUpForm;