import { useParams } from "react-router-dom"
import { LoginPage } from "./LoginPage"
import styled from "styled-components"
import { useState } from "react"
import { HomePage } from "./HomePage"

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`
function App() {
  const {name} = useParams()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  return (
    <Container>
      {
        name === "SignIn" ? <LoginPage userName={userName} setUserName={setUserName} password={password} setPassword={setPassword} /> : <HomePage userName={userName}/>
      }
    </Container>
  )
}

export default App