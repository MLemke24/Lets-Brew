import React, { useState } from 'react';

const ReviewForm = () => {
    const [reviewText, setText] = useState('')

    
    
    const handleFormChange = event => {
        if  ( event.target.value.lenght <= 999){
            setText(event.target.value);
        }
    }

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addReview({
                variables : {reviewText}
            })
            setText('');
        } catch (e){console.error(e)}
    }
    return (
        <form onSubmit = {handleFormSubmit}>
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