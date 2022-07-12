import {useState} from "react"

interface MovieProps{
    name: string;
    price: string;
}

function Movie(props: MovieProps){
    return(
        <div>
            <p>{props.name} </p>
            <p>{props.price} </p>
        </div>
    )
}

export default Movie