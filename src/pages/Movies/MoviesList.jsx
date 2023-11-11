import { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import MoviesListItem from './MoviesListItem'

const MoviesList = () => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      const data = await res.json()
      setMovies(data.results)
    }

    fetchMovies()
  }, [API_KEY])

  return (
    <>
      <Row>
        <Col>
          <h2>List of Movies</h2>
        </Col>
      </Row>
      <Row md={3}>
        {movies.map(movie => (
          <MoviesListItem key={movie.id} movie={movie} />
        ))}
      </Row>
    </>
  )
}

export default MoviesList