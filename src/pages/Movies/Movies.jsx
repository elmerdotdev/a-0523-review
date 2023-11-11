import { Outlet } from "react-router-dom"

const Movies = () => {
  return (
    <>
      <h1>All Movies</h1>
      <Outlet />
    </>
  )
}

export default Movies