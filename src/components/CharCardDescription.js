import React, { useEffect, useState } from 'react'
import { CharAPI } from '../utils/images'
import { useParams } from 'react-router-dom'
import Header from './Header'
const CharCardDescription = () => {
  const [CharInfo, setCharInfo] = useState(null)
  const { charId } = useParams()
  useEffect(() => {
    fetchChar()
  }, [])
  const fetchChar = async () => {
    const data = await fetch(CharAPI + charId)
    const json = await data.json()
    setCharInfo(json?.data)
  }
  if (CharInfo === null) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <Header />
      <div className="descriptionContainer">
        <div className="bookdescBox">
          <div>
            <img
              src={
                CharInfo.attributes.image === null
                  ? 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png'
                  : CharInfo.attributes.image
              }
              alt="CharLogo"
              className="charImage"
            />
          </div>
          <table className="characterDescription">
            <tr>
              <td className="BookTitle">Name </td>
              <td className="TitleNameSpan">{CharInfo.attributes.slug}</td>
            </tr>
            <tr>
              <td className="BookTitle">Name </td>
              <td className="TitleNameSpan">{CharInfo.attributes.slug}</td>
            </tr>
            <tr>
              <td className="BookTitle">Name </td>
              <td className="TitleNameSpan">{CharInfo.attributes.slug}</td>
            </tr>
            <tr>
              <td className="BookTitle">Name </td>
              <td className="TitleNameSpan">{CharInfo.attributes.slug}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CharCardDescription
