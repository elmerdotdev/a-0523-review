import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"

import Navigation from "./components/Navigation"
import Welcome from "./components/Welcome"
import Home from "./pages/Home/Home"
import MoviesList from "./pages/Movies/MoviesList"
import MovieDetail from "./pages/Movies/MovieDetail"

import Container from "react-bootstrap/Container"

import UserContextProvider from "./context/UserContextProvider"

const App = () => {

  return (
    <BrowserRouter>
      <UserContextProvider>
        <Container>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/movies" element={<Outlet />}>
              <Route index element={<MoviesList />} />
              <Route path=":movieId" element={<MovieDetail />} />
            </Route>
          </Routes>
        </Container>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App