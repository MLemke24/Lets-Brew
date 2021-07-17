import React from 'react';
import NoteForm from '../components/NoteForm';
// here users should be able to take notes and share them with other people

// imagine " works better with dakr roast" or "try rubbing a piece of charcoal on it ..."

const Notes = () => {
    return (
        <div>
            <h1>comments/review</h1>
            <NoteForm/>
            <h3> see past Notes!</h3>
        </div>
    )
}

export default Notes;