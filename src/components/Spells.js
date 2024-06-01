import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header'
import SpellCards from './SpellCards'
const Spells = () => {
  const [ListofSpells, setListofSpells] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch('https://api.potterdb.com/v1/spells')
    const json = await data.json()
    setListofSpells(json?.data)
  }
  return (
    <div className="container">
      <Header />
      <h1> Spells</h1>
      <div className="SpellContainer">
        {ListofSpells.map((spell) => (
          <SpellCards key={spell.id} spellData={spell} />
        ))}
      </div>
    </div>
  )
}

export default Spells
