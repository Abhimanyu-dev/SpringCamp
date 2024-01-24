import { useEffect, useState } from "react";
import styled from "styled-components";


const Block = styled.div`
        height: 150px;
        width: 300px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        margin: 10px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    `
    const Description = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 5px;

    `
    const Modal = styled.div`
        position: sticky;
        border: 1px solid black;
        height: 150%;
        overflow: hidden;
        width: 200%;
        top: 0;
        background-color: rgba(100, 100, 100, 0.5);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
    `
    const ModalBody = styled.div`
        height: 600px;
        width: 350px;
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 10px;  
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    `
    const DetailContainer = styled.div`
        display: flex;
        alig-items: flex-start;
        flex-direction: column;
        align-items: flex-start;
        margin: 20px;
        width: 100%;
        padding: 20px;
        height: 60%;
        line-height: 2rem;
    `

export const Tile = ({student}) => {
    const [roommates, setRoommate] = useState()
    useEffect(() => {
        const getRoommate = async() => {
            const res = await fetch(`/api/roommate/${student["Roll No."]}`)
            const json = await res.json()
            if(json){
                setRoommate(json)
            }
        }
        getRoommate()
    })
    return (
        
        <Block >
            <img src={`https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/${student["Roll No."]}_0.jpg`} alt="" style={{height: 120, width: 120, borderRadius: "50%"}}/>
            <Description>
                <h3>{student["Name"]}</h3>
                <p>{student["Department"]}</p>
                <p>{student["Roll No."]}</p>
                <h4>Roommate(s)</h4>
                {
                    roommates ? roommates.map((roommate, index) => {return (<p>{roommate["Name"]}</p>)}) : <p></p>
                }

            </Description>
        </Block>
    )
}