import React from 'react'

const PotionCards = (props) => {
  const { potionData } = props
  const { slug, characteristics, difficulty, effect, image } =
    potionData.attributes
  return (
    <div className="potionCards">
      <div className="imageContainerBook">
        <img
          src={
            image === null
              ? 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png'
              : image
          }
          alt="potionLogo"
          className="MovieImage"
        />
      </div>
      <h1 className="BookTitle">{slug}</h1>
      <p>{characteristics}</p>
      <p>{difficulty}</p>
      <p>{effect}</p>
    </div>
  )
}

export default PotionCards
