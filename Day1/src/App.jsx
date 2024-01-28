import { useParams } from "react-router-dom"
import { LoginPage } from "./LoginPage"
import styled from "styled-components"
import { useState } from "react"
import { HomePage } from "./HomePage"
import { createContext } from "react"

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

export const UserName = createContext(null)
function App() {
  const {name} = useParams()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  return (
    <UserName.Provider value={userName}>
      <Container>
        {
          name === "SignIn" ? <LoginPage userName={userName} setUserName={setUserName} password={password} setPassword={setPassword} /> : <HomePage />
        }
      </Container>
    </UserName.Provider>
  )
}

export default App
https://github.com/Abhimanyu-dev/SpringCamp.git