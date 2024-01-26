import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled(Link)`
    display: flex;
    // border: 1px solid black;
    text-decoration: none;
    color: black;
    margin: 10px;
    flex-direction: column;
    height: 250px;
    width: 450px;
    padding: 10px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    transition: transform 0.1s ease-in;
    &:hover{
        transform: translateY(-5px)
    }
`
const By = styled.div`
    font-size: 2rem;
`
const BlogData = styled.div`
    font-size: 1rem;
`


export const Blog = ({blog}) =>{ 
    return (
        <Container to={`Blog/${blog._id}`}>
            <By>{blog.name}</By>
            <BlogData>{blog.data}</BlogData>
        </Container>
    )
}