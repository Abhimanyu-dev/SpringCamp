import { NavBar } from "./NavBar";
import styled from "styled-components";
import blogs from "./Blogs.json"
import { Blog } from "./Blog";


const Container = styled.div`
    width: 100%;
    position: relative;
`
const BlogContainer  = styled.div`
    position: absolute;
    height: 75vh;
    top: 10rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    // border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    overflow: auto;
`


export const HomePage = () => {
    return(
        <Container>
            <NavBar />
            <BlogContainer>
                {
                    blogs.map((blog, index) => {
                        return(<Blog blog={blog} key={index} />)
                    })
                }
            </BlogContainer>
        </Container>

    )
}