import React, { useEffect, useState } from 'react'
import Header from './Header'
import CharacterCard from './CharacterCard'
import { Link } from 'react-router-dom'
const Characters = () => {
  const [ListofCharacters, setListofCharacters] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch('https://api.potterdb.com/v1/characters')
    const json = await data.json()
    setListofCharacters(json?.data)
  }
  return (
    <div className="container2">
      <Header />
      <h1 className="BookPageHeading">Characters</h1>
      <div className="CharacterContainer">
        {ListofCharacters.map((character) => (
          <Link
            key={character.id}
            to={'/characters/' + character.id}
            style={{ textDecoration: 'none' }}
          >
            {' '}
            <CharacterCard charData={character} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Characters
