import React from 'react';
import { useParams } from 'react-router-dom';
import NoteForm from '../components/NoteForm';
import Data from '../db/tempdb'
// here users should be able to take notes and share them with other people

// imagine " works better with dakr roast" or "try rubbing a piece of charcoal on it ..."


//pass the data from instructions
const Notes = () => {
    const {brewId} = useParams()

    return (<div>
        
            {Data.filter(brew=> brew.name=== brewId).map(filterBrew =>{
                return (
                    <>
                        <h1>make a comments/review</h1>
                        <NoteForm/>
                        <h3> see your past Notes!</h3>
                        <p>displaying {brewId} information</p>
                        <p>how was your brew? was it {filterBrew.strenght}?</p>
                    </>
                )
            })}
        </div>
    )
}

export default Notes;