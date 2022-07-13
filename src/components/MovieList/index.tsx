import {useState, useContext, useEffect} from "react"
import {Link} from "react-router-dom"
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
          const image = response.d[0].i.imageUrl;
          setImg(image)
        })
        .catch(err => console.error(err))
     }, [])   

     useEffect(()=>{
      fecthIem()
     },[])
     const fecthIem = async ()=>{
      const data = await fetch('/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22')
      console.log(data)
    }

    return(
      <>
        <S.MovieList>
          <h2>More watched</h2>
          <S.Movies>
            {movies?.map(movie =>(
                <Movie  key={movie.id} name={movie?.l} image={img} />
            ))}
          </S.Movies>
        </S.MovieList>
        <S.BestMovieList>
          <h2>The best</h2>
          <S.Movies>
            {movies?.map(movie =>(
              <Movie key={movie.id} name={movie.l} image={img} />
            ))}
          </S.Movies>
        </S.BestMovieList>
      </>
    )
}

export default MovieList