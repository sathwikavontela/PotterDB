import { useEffect, useState } from 'react'
import Header from './Header'
import BookCard from './BookCard'
import { Link } from 'react-router-dom'
import { BookAPI } from '../utils/images'
const Books = () => {
  const [ListOfBooks, setListOfBooks] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(BookAPI)
    const json = await data.json()
    //console.log(json)
    setListOfBooks(json?.data)
    //console.log(json?.data)
  }
  return (
    <div className="container2">
      <Header />
      <h1 className="BookPageHeading">Books</h1>
      <div className="BooksContainer">
        {ListOfBooks.map((book) => (
          <Link
            key={book.id}
            to={'/books/' + book.id}
            style={{ textDecoration: 'none' }}
          >
            <BookCard bookData={book} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Books
