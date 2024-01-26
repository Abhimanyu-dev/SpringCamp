import styled from "styled-components"
import BlogData from "./Blogs.json"
import { useParams } from "react-router-dom"
import { NavBar } from "./NavBar"


const Container = styled.div`
    height: 100vh;
    width: 100vw;
`
const BlogContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50vh;
    width: 80vw;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    padding: 1rem;
    border-radius: 10px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const Body = styled.div`
    margin: 1rem;
    font-size: 1.2rem;
`
const Author = styled.h1`
    margin: 1rem;   
    border-bottom: 1px solid rgba(100, 100, 100, 0.5);
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const BlogPage = () => {
    const {id} = useParams()
    let Blog
    BlogData.map((blog) => {
        if(blog._id === id){
            Blog = blog
        }
    })
    return (    
        <Container>
            <NavBar />
            <BlogContainer>
                <Author>
                    By: {Blog.name}
                </Author>
                <Body>
                    {Blog.data}
                </Body>
            </BlogContainer>
        </Container>
    )
}