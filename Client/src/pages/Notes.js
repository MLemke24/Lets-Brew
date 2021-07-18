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
                        <h1>commenting/reviewing : {brewId} </h1>
                        <NoteForm/>
                        <h3> see your past Notes!</h3>
                        <p>displaying {brewId} information</p>
                        <p>how was your brew? was it {filterBrew.strength}?</p>
                    </>
                )
            })}
        </div>
    )
}

export default Notes;