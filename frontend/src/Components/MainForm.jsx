import { useContext, useRef, useState } from "react"
import { ThemeContext } from "../App"
import styled from "styled-components"

const Form = styled.div`
        position: absolute;
        top: 9px;
        left:20%;
        width: 60%;
        height: 400px;
        // border: 1px solid black;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
    `
    const DropDownContainer = styled.div`
        height: 80%;    
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        align-items: center;
    `
    const DropDown = styled.input`
        margin: 0 auto;
        height: 50px;
        width: 100px;
        padding-left: 25px;
    `
    const SearchContainer = styled.div`
        height: 30px;

        position: absolute;
        left: 10%;
        width: 80%;
        bottom: 1rem;
        display:grid;
        align-items: center;
        grid-template-columns: 9fr 1fr;
        border: 1px solid black;
        grid-gap: 0;

    `
    const Search = styled.input`
        height: 100%;
        border: none;
        padding-left: 10px; 
        outline: none;
    `
    const Close = styled.button`
        height: 100%;
        border: none;
        cursor: pointer;
    `

export const MainForm = ({search, setSearch}) => {
    const {theme, themes} = useContext(ThemeContext)
    
    const changeHandler = (e) => {
        setSearch(e.target.value)
    }
    return (
        <Form key="12345">
            <DropDownContainer>
                <DropDown>
                </DropDown>

                <DropDown>
                </DropDown>

                <DropDown>
                </DropDown>
                
                <DropDown>
                </DropDown>

                <DropDown>
                </DropDown>

                <DropDown>
                </DropDown>
            </DropDownContainer>
            <SearchContainer key="abcd">
                <Search type="text" placeholder={"Name or Roll Number or Wing"} value={search} onChange={(e) => changeHandler(e)}/>
                <Close onClick={() => setSearch("")}>X</Close>
            </SearchContainer>
        </Form>
    )
}