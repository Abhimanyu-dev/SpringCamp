import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom"

const PageContainer = styled.div`
position: relative;
height: 100%;
width: 100%;
`
const Logo = styled.h1`
position: relative;
top: 50%;
transform: translateY(-50%);
left: 10%;

font-size: 5rem;
width: auto;
`
const Box = styled.div`
position: absolute;
right: 5%;
top: 50%;
transform: translateY(-50%);
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
height: 60%;
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 0.5rem;
`
const Title = styled.h1`

`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width : 100%;
    flex-direction: column;

`

const Name = styled.input`
    height: 2rem;
    width: 80%;
    padding: 5px;
    font-size: 1rem;
    margin: 10px;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    &:focus{
        outline: none;
    }
`
const Password = styled(Name)`
`
const Submit = styled(Link)`
    height: 3rem;
    width: 20%;
    background-color: #5cb85c;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    color: white;
    cursor: pointer;
    transition : transform 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    &:hover{

        transform: translateY(-2px);

    }
`

export const LoginPage = ({userName, setUserName, password, setPassword}) => {
    let navigate = useNavigate()
    const handleClick = (e) => {
        if(e.key == "Enter"){
            if(userName && password){
                navigate("/")
            }
        }
    }
    console.log(userName)
    console.log(password)
    return (
        <PageContainer>
            <Logo>Day 1 Task</Logo>
            <Box>
                <Title>Login</Title>
                <InputContainer onKeyDown={(e) => {handleClick(e)}}>
                    <Name placeholder="Name" value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
                    <Password type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                    <Submit to="/">Log In</Submit>
                </InputContainer>
            </Box>
        </PageContainer>
    )
}