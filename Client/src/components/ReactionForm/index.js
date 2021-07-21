import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_REACTION } from '../../utils/mutations';

const ReactionForm = ({ reactionId }) => {
  const [formState, setFormState] = useState('');
  const [addPost, { error }] = useMutation(ADD_REACTION);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value} = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    const formResponse = await addPost({
        variables: { 
          reactionBody: formState.reactionBody,
          reactionId
        } 
      });
    console.log(formResponse)

    
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
      >
        <textarea
          className="form-input"
          id= "reactionBody"
          name=" reactionBody"
          placeholder="leave a comment!"
          value={formState.reactionBody}
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

export default ReactionForm;
