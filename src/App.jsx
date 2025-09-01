import { useState } from "react"

const initialFilms = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]
function App() {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <form className="mb-2">
              <select name="" id="" >
                <option value="">Seleziona il genere</option>
                <option value="thriller">Thriller</option>
                <option value="romance">Romantico</option>
                <option value="action">Azione</option>
                <option value="fantasy">Fantascienza</option>
              </select>
            </form>
            <ul className="list-unstayled list-group">
              {initialFilms.map((film) => {
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
