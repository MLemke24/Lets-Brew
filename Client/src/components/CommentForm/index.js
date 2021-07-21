import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POST, QUERY_ME } from '../../utils/queries';

const ThoughtForm = () => {
  const [postText, setText] = useState('');

  const [addPost] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        // update thought array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { posts } = cache.readQuery({ query: QUERY_POST });
        cache.writeQuery({
          query: QUERY_POST,
          data: { posts: [...posts, addPost] }
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } }
      });
    }
  });

  // update state based on form input changes
  const handleChange = event => {
      setText(event.target.value);
      
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      await addPost({
        variables: { postText }
      });

      // clear form value
      setText('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      
      <form
        className=""
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Here's a new post..."
          value={postText}
          className=""
          onChange={handleChange}
        ></textarea>
        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ThoughtForm;
