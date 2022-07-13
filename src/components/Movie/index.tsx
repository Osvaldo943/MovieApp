import {useState} from "react"
import * as S from "./style"
import MovieCover from "../../assets/movie-cover.jpg"
interface MovieProps{
    name: string;
    price: string;
    image: string;
}

function Movie(props: MovieProps){
    const API_IMG= "https://image.tmdb.org/t/p/w500"
    
    return(
        <S.Movie>
            <img src={props.image == null? `${MovieCover}` : `${API_IMG+props.image}`} alt={props.image} />
            <div>
                <p>{props.name} </p>
            </div>
        </S.Movie>
    )
}

export default Movie