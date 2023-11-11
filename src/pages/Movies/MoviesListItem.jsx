import { useNavigate } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const MoviesListItem = (props) => {
  const navigate = useNavigate()

  return (
    <Col>
      <Card className="mb-3">
      <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />
      <Card.Body>
        <Card.Title>{props.movie.title ? props.movie.title : props.movie.name}</Card.Title>
        <Card.Text>
          {props.movie.overview}
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(`/movies/${props.movie.id}`)}>View Movie</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default MoviesListItem