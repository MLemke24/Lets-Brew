import React from 'react';
import { useParams } from 'react-router-dom';
import NoteForm from '../components/NoteForm';
import NotesList from '../components/NotesList';
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
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h3>See what others are saying!</h3>
                        <NotesList 
                                username= {"chokobo"}
                                text = {"mildly strong, very bold brew!"}
                                title= {"excellent!"}
                                createdAt= {"6:30 am"}
                                />
                    </>
                )
            })}
        </div>
    )
}

export default Notes;