import { useEffect, useRef, useState } from "react"
import {Tile} from "./Tile"
import styled from "styled-components"

const DisplayContainer = styled.div`
        position: absolute;
        top: 450px;   
        width: 80%;
        left: 10%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-bottom: 2rem;
    `
    const Loading = styled.div`
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        border: 1px solid black;
        width: 30%;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    `
export const Display = ({data, search}) => {
    
    const tiles = []
    const hall = "HALL13"
    if (data){
            for(let room in data[hall]){
                for (let roommate in data[hall][room]){
                    if (search){
                        if(data[hall][room][roommate]["Name"].toLowerCase().includes(search.toLowerCase()) || data[hall][room][roommate]["Roll No."].includes(search) || data[hall][room][roommate]["Room"].substring(0, 3).includes(search)){
                            const student = data[hall][room][roommate]
                            tiles.push(<Tile student={student}/>)                            
                        }
                    }
                    else{
                        const student = data[hall][room][roommate]
                        tiles.push(<Tile name={student["Name"]} roll_num={student["Roll No."]} dpt={student["Department"]}/>)
                    }
                }
            }
        
    }

    const [visibileTiles, setVisibleTiles] = useState([])
    const bottom = useRef(null) 
    
    useEffect(() => {
        if(search){
            setVisibleTiles(tiles)            
        }else{
            setVisibleTiles()
        }
    }, [search])

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         if(entries[0].isIntersecting) {
    //             console.log("HI")
    //             setVisibleTiles((prevTiles) => [...prevTiles, ...tiles.slice(prevTiles.length, prevTiles.length + 30)])
    //         }
    //     })
    //     observer.observe(bottom.current)
    // })
    return (
        <DisplayContainer>

            {
                visibileTiles ? visibileTiles.map((tile) => {
                    return tile
                }) : console.log()
            }
            
            <div ref={bottom}/>
        </DisplayContainer>
    )
}