import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_REACTION } from '../../utils/mutations';

const ReactionForm = ({ postId }) => {
  const [formState, setFormState] = useState('');
  const [addReaction, { error }] = useMutation(ADD_REACTION);

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
    

    const formResponse = await addReaction({
        variables: { 
          postId,
          reactionBody: formState.reactionBody
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
          className="form-input postText"
          id= "reactionBody"
          name="reactionBody"
          placeholder="leave a comment!"
          value={formState.reactionBody}
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

export default ReactionForm;
