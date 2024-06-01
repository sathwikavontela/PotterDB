import React from 'react'

const CharacterCard = (props) => {
  const { charData } = props
  const { slug, image } = charData.attributes
  return (
    <div className="CharCard">
      <img
        src={
          image === null
            ? 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png'
            : image
        }
        alt="CharLogo"
        className="charImage"
      />
      <h1 className="BookTitle">{slug}</h1>
    </div>
  )
}

export default CharacterCard
