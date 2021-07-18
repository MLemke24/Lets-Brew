import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import {ADD_REVIEW} from "../../utils/mutations";
// import {QUERY_REVIEW} from "../../utils/queries";


const ReviewForm = () => {

    /// remember to set useState('') to  ('') once we have database setup
    const [reviewText, setText] = useState()
    const [reviewTitle, setTitle] = useState()

    // const addReview = useMutation(ADD_REVIEW, {
    //     update ( cache, {data: {addReview}}){
    //     try {
    //         const {review} = cache.readQuery({query: QUERY_REVIEW})
    //         cache.writeQuery({
    //             query: QUERY_REVIEW,
    //             data: {review: [ addReview, ...review]}
    //         });
    //         }
    //     catch (e){console.error(e)};
    //     }
    // });
    
    

    
    const handleFormChange = event => {
        if  ( event.target.value.lenght <= 999){
            setText(event.target.value);
            setTitle(event.target.value)
        }
    }

    const handleFormSubmit = async event => {
        event.preventDefault();

        // try {
        //     await addReview({
        //         variables : {reviewText, reviewTitle}
        //     })
        //     setText('');
        //     setTitle('');
        // } catch (e){console.error(e)}
    }
    return (
        <form onSubmit = {handleFormSubmit}>
            <input
                id= "title"
                placeholder = "Title"
                value = {reviewTitle}
                onChange = {handleFormChange}
                required
                />
            <textarea
                id= "text"
                placeholder = "Tell us what you think"
                value = {reviewText}
                onChange= {handleFormChange}
                required
                />
            <button>Submit</button>
        </form>
    )
}

export default ReviewForm