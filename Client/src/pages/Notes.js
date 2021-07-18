import React from 'react';
import { useParams } from 'react-router-dom';
import NoteForm from '../components/NoteForm';
import Data from '../db/tempdb'

const Notes = () => {
    const {brewId} = useParams()

    return (<div>
        
            {Data.filter(brew=> brew.name=== brewId).map(filterBrew =>{
                return (
                    <>
                        <h1>Reviewing : {brewId} </h1>
                        <h3>Was it {filterBrew.strength} ? Leave a comment!</h3>
                        <NoteForm/>
                    </>
                )
            })}
        </div>
    )
}

export default Notes;