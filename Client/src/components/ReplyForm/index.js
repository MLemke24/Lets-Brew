import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_POST } from '../../utils/mutations';

const ReactionForm = ({ postId }) => {
  const [replyBody, setBody] = useState('');
  const [addPost, { error }] = useMutation(ADD_POST);

  // update state based on form input changes
  const handleChange = event => {
      setBody(event.target.value);
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      await addPost({
        variables: { replyBody, postId }
      });

      // clear form value
      setBody('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="leave a comment!"
          value={replyBody}
          className=""
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
