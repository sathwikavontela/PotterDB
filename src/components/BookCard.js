import React from 'react'

const BookCard = (props) => {
  const { bookData } = props
  const { attributes } = bookData
  return (
    <div>
      <div className="BookCards">
        <div className="imageContainerBook">
          <img src={attributes.cover} alt="bookslogos" className="BookImage" />
        </div>
        <h1 className="BookTitle">{attributes.title}</h1>
        <p className="Bookdescription ">{attributes.pages}</p>
        <p className="Bookdescription ">{attributes.release_date}</p>
        <p className="Bookdescription ">{attributes.author}</p>
        <button className="viewbutton">View Book</button>
      </div>
    </div>
  )
}

export default BookCard
