import React from 'react'

import Data from '../db/tempdb'

const ShopPage = () => {
    return (
        <body>
            <div>
                <h1>Get equiped!</h1>
                <p>Click on each item to see buying options online !</p>
            </div>
            <ul> {Data.map(item => {
                return (<li>
                    <a href={`https://www.amazon.com/s?k=${(item.name).replace(" ", "+")}&ref=nb_sb_noss_2`}>
                        <div>
                            <h3>{item.name}</h3>
                        </div>
                        <div>
                            <img src={item.image} alt={item.name} />
                        </div>
                    </a>
                </li>)
            })}
            </ul>
        </body>
    )
}

export default ShopPage