import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled(Link)`
    display: flex;
    // border: 1px solid black;
    text-decoration: none;
    color: black;
    margin: 10px;
    align-items:center;
    justify-content: space-around;
    flex-direction: column;
    height: 250px;
    width: 450px;
    padding: 10px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 3px 10px 10px 3px, rgba(0, 0, 0, 0.1) 5px 4px 6px 2px;
    transition: transform 0.1s ease-in;
    border-radius: 10px;
    &:hover{
        transform: translateY(-5px)
    }
`
const By = styled.div`
    font-size: 1.4rem;
`
const BlogData = styled.div`
    font-size: 1rem;
`
const Title = styled.div`
    font-size: 2.1em;
    font-weight: bold;
`


export const Blog = ({blog}) =>{ 
    return (
        <Container to={`/blog/${blog.blog_id}`}>
            <Title>{blog.blog_title}</Title>
            <By>By: {blog.author}</By>
        </Container>
    )
}