import {useState, useContext, useEffect} from "react"
import * as S from "./style"
import Movie from "../Movie"

import { MovieContext } from "../../MovieProvider"

function MovieList(){
  const [movies, setMovies] = useState<any>([])
  const [img, setImg] = useState("")

    useEffect(()=>{
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '8c7b220236mshbb0d53ffa6552edp1a5640jsn0d92e94c812b',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
          }
        };
        
        fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
          .then(response => response.json())
          .then(response => {
            setMovies(response.d);
            const image = response.d[0].i.imageUrl
            console.log(image)
            setImg(image)
            console.log(img)
          })
          .catch(err => console.error(err));
    },[] )   

    return(
        <S.MovieList>
          <h2>Best Movies</h2>
          <S.Movies>
            {movies.map(movie =>(
              <Movie key={movie.id} name={movie.l} image={img} />
            ))}
          </S.Movies>
        </S.MovieList>
    )
}

export default MovieList