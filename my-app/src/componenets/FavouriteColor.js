import { useState } from "react"

function FavoriteColor(){

    // let color = "Blue"
    const [color, setColor] = useState('Blue')
    return (
        <><h1>My Favorite colour is {color}</h1><button onClick={() => {setColor('Red') } }> Change colour </button></>
    )
}


export default FavoriteColor