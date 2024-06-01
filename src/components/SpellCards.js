import React from 'react'

const SpellCards = (props) => {
  const { spellData } = props
  const { name, slug, category, image } = spellData.attributes
  return (
    <div className="SpellCards">
      <div className="imageContainerBook">
        <img
          src={
            image === null
              ? 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png'
              : image
          }
          alt="spellLogo"
          className="MovieImage"
        />
      </div>
      <h1>{slug}</h1>
      <p>{category}</p>
      <p>{name}</p>
    </div>
  )
}

export default SpellCards
