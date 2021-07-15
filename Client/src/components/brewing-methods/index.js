import React from 'react';
import {Link, useParams} from 'react-router-dom'
import Card from './'

const Brews = () => {
    const {method} = useParams()
    const methods = ["chemex", "french-press", "v60"];

    return (
        <div>
            <ul>{methods.map(props=>{
                return <Card
                        key={props.id}
                        name={props.name}
                        >{props.name}</Card> 
            }) 
            }
            </ul>
        </div>
    )


}

export default Brews;