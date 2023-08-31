import React from "react";
import { useState } from "react";
import {Players, getNextId} from "./Player";


const ChelseaTeam = () => {

    const [players, setPlayers] = useState(Players)
    const [newName, setnewName] = useState('')
    const [newPosition, setnewPosition] = useState('')
    const [newAge, setnewAge] = useState('')
    const [newImage, setnewImage] = useState('')

//Add player to the list

    const addPlayer = (e) => {
        e.preventDefault();

        const newPlayer = {
            id:getNextId(),
            name:newName,
            position:newPosition,
            Age:newAge,
            Image:newImage
        }

        const updatePlayer = [...players, newPlayer]
        setPlayers(updatePlayer)
    }

//Deleting players from the list
    const deletePlayer = (id) => {
        const updatePlayer = players.filter(player => player.id !== id)
        setPlayers(updatePlayer)
    }


    return (
        <div>
            <form onSubmit={addPlayer}>
                <span>
                    Name:
                </span>
                <input type="text" placeholder="Name" value={newName} onChange={(e) => setnewName(e.target.value)}></input> <br /> <br />
                <span>
                    Position:
                </span>
                <input type="text" placeholder="position" value={newPosition} onChange={(e) => setnewPosition(e.target.value)}></input> <br /> <br />
                <span>
                    Age:
                </span>
                <input type="number" placeholder="Age" value={newAge} onChange={(e) => setnewAge(e.target.value)}></input> <br/> <br/>
                <span>Image</span>
                <input type="link" placeholder="Player Image" value={newImage} onChange={(e) => setnewImage(e.target.value)}></input> <br/> <br/>
                <button type="submit" >Add</button>
            </form>
            <ul>
                {players.map((player) => (
                    <p key={player.id}>Name: {player.name},  Position: {player.position},  Age: {player.Age} <img src={player.Image}></img>
                     <button onClick={() => deletePlayer(player.id)}>Delete</button></p>
                ))}
            </ul>
        </div>
    )
}

export default ChelseaTeam