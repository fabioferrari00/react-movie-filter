import { useState, useEffect } from "react"

const initialFilms = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]
function App() {
  const [films, setFilms] = useState(initialFilms)
  const [genre, setGenre] = useState("");
  const [filteredFilms, setFilteredFilms] = useState(initialFilms)

  useEffect(() => {
    console.log(`Trigger`);
    const array = films.filter((film) => {
      return film.genre.toLowerCase().includes(genre.toLowerCase())
    });
    setFilteredFilms(array);
  }, [genre])

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <form className="mb-2">
              <select value={genre} onChange={(e) => setGenre(e.target.value)} >
                <option value="">Seleziona il genere</option>
                <option value="thriller">Thriller</option>
                <option value="romantico">Romantico</option>
                <option value="azione">Azione</option>
                <option value="fantascienza">Fantascienza</option>
              </select>
            </form>
            <ul className="list-unstayled list-group">
              {filteredFilms.map((film) => {
                return (
                  <li className="list-group-item">
                    <h2>
                      {film.title}
                    </h2>
                    <p>Genere: {film.genre}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
