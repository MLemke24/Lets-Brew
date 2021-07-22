import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_POST } from '../../utils/mutations';

//this expects a title
const ThoughtForm = () => {
  const [formState, setFormState] = useState({ postText: '', postTitle: ''});
  const [addPost, { error }] = useMutation(ADD_POST) 

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value} = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    
      const mutationResponse = await addPost({
        variables: {
           postTitle: formState.postTitle, 
           postText: formState.postText 
          }
      });
      console.log(mutationResponse)

      // clear form value
      setFormState("")
    
  };

  return (
    <div>
      
      <form
        className=""
        onSubmit={handleFormSubmit}
      >
        <input
          placeholder="Make a title for your post"
          value= {formState.postTitle}
          className="postTitle"
          id= "postTitle"
          name= "postTitle"
          onChange={handleChange}
        ></input>
        <textarea
          placeholder="Get typing!"
          value= {formState.postText}
          className="postText"
          id= "postText"
          name="postText"
          onChange={handleChange}
        ></textarea>
        <button className="" type="submit">
          Submit
        </button>
      </form>
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default ThoughtForm;
