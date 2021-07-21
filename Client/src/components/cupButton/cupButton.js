import React, { useState } from 'react'
// import { AeroPress, BeeHouse, Chemex, FrenchPress, MokaPot, Siphon, V60, Wave } from '../../../../server/Models/index'
import  { AeroPress, BeeHouse, Chemex, FrenchPress, MokaPot, Siphon, V60, Wave } from '../../utils/queries';
import { useQuery } from '@apollo/client'
import { QUERY_AEROPRESS, QUERY_BEEHOUSE, QUERY_CHEMEX, QUERY_FRENCHPRESS, QUERY_MOKAPOT, QUERY_SIPHON, QUERY_V60, QUERY_WAVE } from '../../utils/queries';

const cupButton = (props) => {
  const {brew} = useQuery(QUERY_CHEMEX)
  const [brewData, setBrewData] = useState({cupSize: 1})

  return (
    <button type="submit">{brew.cupSize}</button>
  )
}

export default cupButton;