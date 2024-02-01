import styled from "styled-components"
import BlogData from "./Blogs.json"
import { useParams } from "react-router-dom"
import { NavBar } from "./NavBar"
import data from "./Blogs.json"


const BlogContainer = styled.div`
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, 0);
    // height: 50vh;
    width: 80vw;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    padding: 1rem;
    border-radius: 10px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-x: hidden;
    margin: 1rem;
`

const Body = styled.div`
    margin: 2rem;
    width: 50%; 
    font-size: 1.4rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 1px 1px;
    
`
const Title = styled.h1`
    margin: 1rem;   
    border-bottom: 1px solid rgba(100, 100, 100, 0.5);
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

`

const Author = styled.div`
    font-size:1.1rem;
`

const Commentator = styled.div`
    margin: 1rem 0;
    font-size: 1rem;
`
export const BlogPage = ({id}) => {
    let Blog
    BlogData.map((blog) => {
        if(blog.blog_id === parseInt(id)){
            Blog = blog
        }
    })
    return (    
            <BlogContainer>
                <Title>
                    {Blog.blog_title}
                </Title>
                <Author>
                    By: {Blog.author}
                </Author>
                {
                    data.map((blog, index) => {
                        if (blog.blog_id === parseInt(id)){
                            return (
                                
                                <Body key={index}>
                                    {blog.comment_text}
                                    <br />
                                    <Commentator>
                                    By: {blog.commentator}
                                    </Commentator>
                                </Body>
                            )
                        }
                    })
                }
            </BlogContainer>
    )
}