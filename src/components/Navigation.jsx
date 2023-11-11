import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Navigation = () => {
  const {fullname} = useContext(UserContext)

  return (
    <Row className="justify-content-between">
      <Col>
        <Nav>
          <Nav.Item>
            <NavLink to="/">Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/movies">Movies</NavLink>
          </Nav.Item>
        </Nav>
      </Col>
      <Col>
        <span>Welcome, {fullname.firstname} {fullname.lastname}!</span>
      </Col>
    </Row>
  )
}

export default Navigation