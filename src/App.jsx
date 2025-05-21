import { useState } from "react"
import {Route, Routes} from "react-router-dom"
import { NavBar } from "../Components/NavBar"
import { Articles } from "../Components/Articles"
import { Header } from "../Components/Header"
import "./App.css"

function App() {
  const [articlesList, setArticlesList] = useState([])

  return (
    <>
      <Header>
       <NavBar></NavBar> 
      </Header>
      <Routes>
        <Route path="/"
        element={<Articles articlesList={articlesList} setArticlesList={setArticlesList}/>}></Route>
      </Routes>
    </>
  )
}

export default App
