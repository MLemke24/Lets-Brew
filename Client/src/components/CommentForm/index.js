import React, { useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_ME_BASIC } from '../../utils/queries';


//this expects a title
const ThoughtForm = () => {
  const [formState, setFormState] = useState({ postText: '', postTitle: ''});
  const [addPost, { error }] = useMutation(ADD_POST) 
  const { data } = useQuery( QUERY_ME_BASIC );

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value} = event.target;


    setFormState({
      ...formState,
      [name]: value,
    });
  };
  console.log({data})


  // submit form
  const handleFormSubmit = async (event) => {
    
    const mutationResponse = await addPost({
      variables: {
        postText: formState.postText, 
        postTitle: formState.postTitle, 
        username: data.me.username
      }
    });
    console.log(formState.postText, formState.postTitle)
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
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default ThoughtForm;
