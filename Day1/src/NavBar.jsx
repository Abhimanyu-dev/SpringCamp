import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from "react";
import { UserName } from "./App";

const Container = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    box-shadow: rgba(0, 0, 0, 0.1)  0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`
const Title = styled(Link)`
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    left: 1rem;
    font-weight: bold;
    font-size: 3rem;
    color: red;
`
const LogoutButton = styled(Link)`
    position: absolute;
    top: 0;
    right: 1rem;
    height: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
`
const Greeting = styled.div`
    position: absolute;
    height: 100%;
    right: 4rem;
    font-size: 2rem;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavBar = () => {
    return(
        <Container>
            <Title to="/" >
                Day 1
            </Title>     
            <LogoutButton to="/SignIn">
                <LogoutIcon />
            </LogoutButton>

        </Container>
    )
}