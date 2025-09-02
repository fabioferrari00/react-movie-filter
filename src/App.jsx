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
  const [films, setFilms] = useState(initialFilms);
  const [genre, setGenre] = useState("");
  const [filteredFilms, setFilteredFilms] = useState(films);
  const [title, setTitle] = useState("");
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newMovieGenre, setNewMovieGenre] = useState("");

  useEffect(() => {
    console.log(`Trigger`);
    const array = films.filter((film) => {
      return film.genre.toLowerCase().includes(genre.toLowerCase())
    });
    setFilteredFilms(array);
  }, [genre, films]);

  const addMovie = (e) => {
    e.preventDefault();
    if (newMovieTitle !== '') {
      const copy = [...films, { title: newMovieTitle, genre: newMovieGenre }];
      setFilms(copy);
      setNewMovieGenre(newMovieGenre);
      setNewMovieTitle(newMovieTitle);
      setNewMovieGenre("");
      setNewMovieTitle("");
      setTitle("");
    }
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <h1>React Films</h1>
            <div className="col-6 my-5">
              <select className="form-select" value={genre} onChange={(e) => setGenre(e.target.value)} >
                <option value="">Seleziona il genere</option>
                <option value="thriller">Thriller</option>
                <option value="romantico">Romantico</option>
                <option value="azione">Azione</option>
                <option value="fantascienza">Fantascienza</option>
              </select>
            </div>
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
          <div className="col-12 mt-3">
            <form onSubmit={addMovie}>
              <div className="d-flex">
                <input type="text"
                  className="form-control me-3"
                  placeholder="Aggiungi Film"
                  value={newMovieTitle}
                  onChange={(e) => setNewMovieTitle(e.target.value)} />
                <input type="text"
                  className="form-control me-3"
                  placeholder="Aggiungi Film"
                  value={newMovieGenre}
                  onChange={(e) => setNewMovieGenre(e.target.value)} />
                <button className="btn btn-success">Aggiungi</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
