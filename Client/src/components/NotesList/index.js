import React from 'react'

// here is a prop for the notes . we can pass the data to it later :
const NotesList = (note) => {
//ideally this will map trough every single note in db. cant figure out how yet
    return (

            <div key={note._id}>
                <div>
                    <h4>{note.title}</h4>
                </div>
                <div>
                    <p>{note.text}</p>
                </div>
                <br />
                <div>
                    <p>left by {note.username} at {note.createdAt}</p>
                </div>
            </div>
                
    )
}

export default NotesList