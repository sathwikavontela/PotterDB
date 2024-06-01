import React, { useEffect, useState } from 'react'
import Header from './Header'
import PotionCards from './PotionCards'

const Potions = () => {
  const [ListofPotions, setListofPotions] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch('https://api.potterdb.com/v1/potions')
    const json = await data.json()
    setListofPotions(json?.data)
  }
  return (
    <div className="container">
      <Header />
      <h1 className="BookPageHeading">Potions</h1>
      <div className="PotionContainer">
        {ListofPotions.map((potion) => (
          <PotionCards key={potion.id} potionData={potion} />
        ))}
      </div>
    </div>
  )
}

export default Potions
