import { NavBar } from "./NavBar";
import styled from "styled-components";
import blogs from "./Blogs.json"
import { Blog } from "./Blog";
import { useState } from "react"


const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
const BlogContainer  = styled.div`
    position: absolute;
    height: 75vh;
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    overflow: auto;
`


export const HomePage = () => {
    const blog_id = []
    return(
        <Container>
            <BlogContainer>
                {
                    blogs.map((blog, index) => {
                        if (!(blog_id.includes(blog.blog_id))){
                            console.log(blog_id )
                            console.log(blog.blog_id)
                            blog_id.push(blog.blog_id)
                            return(<Blog blog={blog} key={index} />)
                        }
                    })
                }
            </BlogContainer>
        </Container>

    )
}