import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from './Header'
import { API } from '../utils/images'
const BookDescription = () => {
  const { bookId } = useParams()
  const [BookInfo, setBookInfo] = useState(null)
  useEffect(() => {
    fetchBook()
  }, [])

  const fetchBook = async () => {
    const data = await fetch(API + bookId)
    const json = await data.json()
    //console.log(json?.data)
    setBookInfo(json?.data)
  }
  // let { cover } = BookInfo?.attributes
  if (BookInfo === null) {
    return <h1>loading</h1>
  }
  return (
    <div>
      <Header />
      <div className="descriptionContainer">
        <div className="bookdescBox">
          <div>
            <img
              src={BookInfo.attributes.cover}
              alt="ParamsLogo"
              className="BookLogo"
            />
          </div>
          <table className="BookDescription">
            <tr>
              <td className="BookTitle">Title</td>
              <td className="TitleNameSpan">{BookInfo.attributes.slug}</td>
            </tr>
            <tr>
              <td className="BookTitle">Author</td>
              <td className="TitleNameSpan">{BookInfo.attributes.author}</td>
            </tr>
            <tr>
              <td className="BookTitle">Release_date </td>
              <td className="TitleNameSpan">
                {' '}
                {BookInfo.attributes.release_date}
              </td>
            </tr>
            <tr>
              <td className="BookTitle">Pages </td>
              <td className="TitleNameSpan">{BookInfo.attributes.pages}</td>
            </tr>
            <tr>
              <td className="BookTitle">Dedication</td>
              <td className="TitleNameSpan">
                {BookInfo.attributes.dedication}
              </td>
            </tr>
            <tr>
              <td className="BookTitle">Summary</td>
              <td className="TitleNameSpan">{BookInfo.attributes.summary}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default BookDescription
