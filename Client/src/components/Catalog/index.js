import React from 'react';
import { Link  } from 'react-router-dom'
import brews from '../..db/tempdb'

const Brews = () => {
    return (
            <div>
                <ul>{brews.map(brew => {
                    return (
                        <li className='Icon'>
                            <Link to={`/instructions/${brew.name}`}><div>{brew.name}</div></Link>
                        </li>
                    )})}
                </ul>
            </div>
    )
}
export default Brews;