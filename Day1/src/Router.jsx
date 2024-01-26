import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from "./App"
import { BlogPage } from "./BlogPage"

export const Router = () =>{
    const router = createBrowserRouter([
        
        {
            path: "blog/:id",
            element: <BlogPage />
        },
        {
            path: "/:name",
            element: <App />
        },
        {
            path: "/",
            element: <App />
        },
    ])
    
    return (
        <RouterProvider router={router}/>
    )
}