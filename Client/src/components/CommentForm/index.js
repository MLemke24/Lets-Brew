import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POST, QUERY_ME } from '../../utils/queries';
//this expects a title
const ThoughtForm = () => {
  const [formState, setText] = useState({ postText: '', postTitle: ''});
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
  const handleChange = (event) => {
      const { name, value} = event.target;

      setText({
        ...formState,
        [name]:value});

      
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await addPost({
        variables: {
           postTitle: formState.postTitle, 
           postText: formState.postText 
          }
      });
      console.log(mutationResponse)

      // clear form value
      // setText('');
      
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
        <input
          placeholder="enter a Title for your post"
          value= {formState.postTitle}
          className=""
          name= "title"
          onChange={handleChange}
        ></input>
        <textarea
          placeholder="Here's a new post..."
          value= {formState.postText}
          className=""
          name="text"
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
