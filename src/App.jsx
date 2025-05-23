import { useState } from "react"
import {Route, Routes} from "react-router-dom"
import { NavBar } from "../Components/NavBar"
import { Articles } from "../Components/Articles"
import { Header } from "../Components/Header"
import "./App.css"
import { SingleArticleCard } from "../Components/SingleArticleCard"
import { SingleCommentCard } from "../Components/SingleCommentCard"
import { CommentsList } from "../Components/CommentsList"

function App() {
  const [articlesList, setArticlesList] = useState([])

  return (
    <>
      <Header>
       <NavBar></NavBar> 
      </Header>
      <Routes>
        <Route path="/" element={<Articles articlesList={articlesList} setArticlesList={setArticlesList}/>}/>
        <Route path="/article/:article_id" element={<SingleArticleCard/>}/>
        <Route path="/article/:article_id/comments" element={<CommentsList/>}/>
      </Routes>
    </>
  )
}

export default App
