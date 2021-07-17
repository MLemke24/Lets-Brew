import React from 'react';
import NoteForm from '../components/NoteForm';
// here users should be able to take notes and share them with other people

// imagine " works better with dakr roast" or "try rubbing a piece of charcoal on it ..."


//pass the data from instructions
const Notes = () => {
    return (
        <div>
            <h1>make a comments/review</h1>
            <NoteForm/>
            <h3> see your past Notes!</h3>
            <p>display the previous brew?</p>
        </div>
    )
}

export default Notes;