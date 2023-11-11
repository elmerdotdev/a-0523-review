import { useState } from "react"
import UserContext from "./UserContext"

const UserContextProvider = ({children}) => {
  const [fullname, setFullname] = useState({
    firstname: 'John',
    lastname: 'Doe'
  })
  const [hobbies, setHobbies] = useState(['Diving', 'Skiing', 'Swimming'])

  return (
    <UserContext.Provider value={{fullname, setFullname, hobbies, setHobbies}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider