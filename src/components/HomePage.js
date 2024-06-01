import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <div className="BodyContainer">
        <div className="ImageContainer">
          <img
            src="https://potterdb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhogwarts_express.64b977d5.jpg&w=1920&q=30"
            alt="About logo"
            className="AboutImage"
          />
          <h1 className="Heading">Potter DB</h1>
          <p className="description">
            A Harry Potter database for all your wizarding needs.
          </p>
        </div>
        <div className="ContentContainer">
          <div className="box1">
            <h1 className="Tagline">What is Potter DB?</h1>
            <p className="descriptioncontent">
              Potter DB is an unofficial database dedicated to the magical world
              of Harry Potter. Our platform offers a vast collection of
              information about the characters, spells, books, movies, potions,
              and more. With a seamless and user-friendly interface, combined
              with an extensive data repository, Potter DB stands as the
              quintessential haven for both dedicated Potterheads and curious
              developers. Join us on a spellbinding journey through the
              intricate t apestry of J.K. Rowling's timeless world.
            </p>
          </div>
          <div className="box1">
            <h1 className="Tagline">Potter DB: Website</h1>
            <p className="descriptioncontent">
              Our intuitive and robust Database Search empowers all users,
              whether curious Harry Potter fans or developers, to swiftly access
              information about their beloved books and chapters, characters, or
              any other specific elements within the enchanting realm of the
              Harry Potter Universe. With its user-friendly design and
              accessibility, our search feature ensures that everyone can
              effortlessly explore and uncover the magic woven within the
              entangled details of the Harry Potter Universe.
            </p>
          </div>
          <div className="box1">
            <h1 className="Tagline">Potter DB: API</h1>
            <p className="descriptioncontent">
              The Potter DB: API serves as a powerful tool for developers and
              fans alike to access our rich data from the Harry Potter Universe.
              Whether you prefer to use GraphQL or REST, our API provides
              seamless integration for retrieving detailed information about
              characters, movies, books, and more from the magical world. To
              learn more about the endless possibilities of integrating Potter
              DB's data into your own projects, applications, or websites, take
              a look at our API Docs to get started.
            </p>
          </div>
          <div className="box1">
            <h1 className="Tagline">Where does our data come from?</h1>
            <p className="descriptioncontent">
              We take pride in providing accurate and enriched information
              derived from various open-source repositories. Leveraging our own
              tool, Scrabby, we are able to collect and aggregate data from
              reputable sources, such as the Harry Potter Wiki. We then undergo
              a meticulous process of refining and enhancing the content. This
              ensures that our users have access to the most reliable and
              comprehensive repository of data about the Harry Potter Universe.
            </p>
          </div>
        </div>
        <div className="footer">
          <div className="footerContainer">
            <h1 className="Searchdb">Search our Database</h1>
            <div className="buttonsContainer">
              <Link to="/books/">
                <button className="button">7 Books</button>
              </Link>
              <Link to="/characters/">
                {' '}
                <button className="button">4675 characters</button>
              </Link>
              <Link to="/movies/">
                {' '}
                <button className="button">11 Movies</button>
              </Link>
              <Link to="/potions/">
                <button className="button">168 Potions</button>
              </Link>
              <Link to="/spells/">
                <button className="button">315 Spells</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
