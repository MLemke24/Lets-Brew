import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import {ADD_REVIEW} from "../../utils/mutations";
// import {QUERY_REVIEW} from "../../utils/queries";


const ReviewForm = () => {
    const [reviewText, setText] = useState('')
    const [reviewTitle, setTitle] = useState('')

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
                placeholder = "Title your note"
                value = {reviewTitle}
                onChange = {handleFormChange}
                ></input>
            <textarea
                placeholder = "tell us about your favorite way of making coffee"
                value = {reviewText}
                onChange= {handleFormChange}
                ></textarea>
            <button>Submit</button>
        </form>
    )
}

export default ReviewForm