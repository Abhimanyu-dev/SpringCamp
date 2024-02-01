import { useParams } from "react-router-dom"
import { LoginPage } from "./LoginPage"
import styled from "styled-components"
import { useState } from "react"
import { HomePage } from "./HomePage"
import { BlogPage } from "./BlogPage"
import { NavBar } from "./NavBar"

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

function App() {
  const {name, id} = useParams()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  return (
      <Container>
        
        {
          name === "SignIn" ? <LoginPage  userName={userName} setUserName={setUserName} password={password} setPassword={setPassword} /> : name === "blog" ?
            <>
              <NavBar userName={userName}/>
              <BlogPage id={id}/>
            </>
            :
            <>
              <NavBar userName={userName}/>
              <HomePage />
            </>
        }
      </Container>
  )
}

export default App