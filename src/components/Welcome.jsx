import { useEffect, useState } from "react"
import styles from './Welcome.module.css'
import styled from "styled-components"

const Welcome = (props) => {
  const [newHobby, setNewHobby] = useState('')
  const [lastname, setLastname] = useState(props.fullname.lastname)

  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateHobbies([...props.hobbies, newHobby])
  }

  const Button = styled.button`
    background-color: black;
    color: white;
    font-style: italic;
    transition: all .3s ease-in-out;
    &:hover {
      background-color: white;
      color: black;
    }
  `

  const BlueButton = styled(Button)`
    background-color: blue;
    &:hover {
      color: blue;
    }
  `

  useEffect(() => {
    console.log('state updated')
  }, [newHobby, lastname])

  return (
    <div className={styles.container}>
      <h1>Welcome {props.fullname.firstname} {lastname}</h1>
      <button onClick={() => props.updateFullname({...props.fullname, firstname: 'Joe'})}>Update first name</button>
      <button onClick={() => setLastname('Smith')}>Update last name</button>
      <ul>
      {props.hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" value={newHobby} onChange={(event) => setNewHobby(event.target.value)} />
        <button type="submit">Add to hobbies</button>
      </form>

      <hr />

      <Button>Click me</Button>
      <BlueButton>Click me</BlueButton>
    </div>
  )
}

export default Welcome