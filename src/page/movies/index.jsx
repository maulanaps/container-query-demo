import './style.css'

function App({ title }) {
  document.title = title;

  return (
    <div className="page movies @container">
      <div className="layout">
        <div className='kontainer @container'>
          {movieList.map((movie, index) => <MoviesCard key={index} movie={movie} />)}
        </div>
        <div className='kontainer @container'>
          {movieList.map((movie, index) => <MoviesCard key={index} movie={movie} />)}
        </div>
      </div>
    </div>
  )
}

const MoviesCard = ({ movie }) => {
  const { imageUrl, title, subtitle, description } = movie;

  return (
    <div className='card'>
      <div className='poster'>
        <img src={imageUrl} alt={title} />
      </div>
      <div className='info'>
        <b className="title">{title}</b>
        <div className="subtitle">{subtitle}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  )
}

const movieList = [
  {
    "imageUrl": "https://cinemags.org/wp-content/uploads/2023/05/Oppenheimer-poster.jpg",
    "title": "Oppenheimer",
    "subtitle": "A biographical drama about J. Robert Oppenheimer.",
    "description": "Directed by Christopher Nolan, this film tells the story of American scientist J. Robert Oppenheimer. The movie explores the ethical dilemmas faced by Oppenheimer as he led the Manhattan Project. With a compelling storyline and unforgettable characters, it's a must-watch for history and science enthusiasts."
  },
  {
    "imageUrl": "https://assets-a1.kompasiana.com/items/album/2022/12/14/spider-man-across-the-spider-verse-524691364-large-63998f4c4addee4f3965b9f2.jpg?t=o&v=770",
    "title": "Spider-Man: Across the Spider-Verse",
    "subtitle": "An animated action-adventure film.",
    "description": "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. The film is a sequel to the critically acclaimed 'Spider-Man: Into the Spider-Verse'."
  },
  {
    "imageUrl": "https://posterspy.com/wp-content/uploads/2023/05/00_MI_7_FINAL_SEAL-min.jpg",
    "title": "Mission: Impossible - Dead Reckoning Part One",
    "subtitle": "An action-adventure thriller.",
    "description": "Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands. The film is the latest installment in the long-running 'Mission: Impossible' series. It features thrilling action sequences and complex plot twists that fans of the series have come to expect."
  },
  {
    "imageUrl": "https://m.media-amazon.com/images/I/71tIm0Xxr2L._AC_UF894,1000_QL80_.jpg",
    "title": "John Wick: Chapter 4",
    "subtitle": "An action crime thriller.",
    "description": "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe. The film is the fourth installment in the 'John Wick' series, known for its stylish action and intricate world-building."
  },
  {
    "imageUrl": "https://myhotposters.com/cdn/shop/products/mL6901_1024x1024.jpg?v=1697834050",
    "title": "Killers of the Flower Moon",
    "subtitle": "A crime drama based on historical events.",
    "description": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery. The film is based on the non-fiction book of the same name by David Grann. It explores a dark chapter in American history that has often been overlooked."
  }
]

export default App
