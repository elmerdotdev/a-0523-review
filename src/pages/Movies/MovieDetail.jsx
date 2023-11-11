import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const [movie, setMovie] = useState({})
  const { movieId } = useParams()
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      const data = await res.json()
      console.log(data)
      setMovie(data)
    }

    fetchMovie()
  }, [movieId, API_KEY])

  return (
    <Row md={2}>
      <Col>
        <Card>
          <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{movie.release_data}</Card.Subtitle>
            <Card.Text as="div">
              <p>{movie.overview}</p>
              <strong>Genres:</strong>
              <ul>
                {movie?.genres?.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default MovieDetail