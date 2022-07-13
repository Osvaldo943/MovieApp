import {useState} from "react"
import * as S from "./style"

interface MovieProps{
    name: string;
    price: string;
    image: string;
}

function Movie(props: MovieProps){
    return(
        <S.Movie>
            <img src={props.image} alt={props.image} />
            <div>
                <p>{props.name} </p>
            </div>
        </S.Movie>
    )
}

export default Movie