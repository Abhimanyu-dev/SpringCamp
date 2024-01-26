import { useEffect, useState, createContext } from "react"
import { MainForm } from "./Components/MainForm"
import styled from "styled-components"
import { Display } from "./Components/Display"

export const ThemeContext = createContext("dark")




const AppContainer = styled.div`
height: 100vh;
width: 100vw;
overflow-x: hidden;
position: relative;
`

function App() {
  const [data, setData] = useState()
  const [theme, setTheme] = useState("dark")
  const themes = {
    "dark" : {
      bg_color: "#000",
      primary: "#1e1e1e",
      secondary: "#3b3b3b",
      text_color: "#fff"
    },
    "white" : {
      bg_color: "#efefef",
      primary: "#fff",
      secondary: "#e8e8e8",
      text_color: "#000"
    }
  }

  
  const [search , setSearch] = useState("")
  useEffect(() => {
    const fetchData = async() => {
        const res = await fetch("/api")
        const json = await res.json()
        setData(json) 
      
    }
    fetchData()
  }, []) 

  return (
    <ThemeContext.Provider value={{themes, theme}}>
      <AppContainer>
        <MainForm search={search} setSearch={setSearch} />
        <Display data={data} search={search}/>
      </AppContainer>
    </ThemeContext.Provider>
    
  )
}

export default App
