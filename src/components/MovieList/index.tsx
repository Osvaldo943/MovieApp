import {useState, useContext, useEffect} from "react"
import {Link} from "react-router-dom"
import * as S from "./style"
import Movie from "../Movie"

function MovieList(){
  const [movies, setMovies] = useState<any>([])
  const [query, setQuery] = useState<any>('')

    useEffect(()=>{
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=afc85de0b5357480396091f5893aefee')
      .then((res)=>res.json())
      .then(data => {
        setMovies(data.results)
        setQuery('')
        console.log(data.results)
      })
    }, [])

    const SearchMovie = async (e:any)=>{
      e.preventDefault();
      console.log(query)
      console.log('Searching...')
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=afc85de0b5357480396091f5893aefee&query=${query}`)
        .then(response => response.json())
        .then(data => {
          setMovies(data.results)
          console.log(data.results)
        })
      }
      catch(err){
        console.log(err)
      }
    }
    return(
      <>
        <S.Search>
          <form onSubmit={SearchMovie}>
            <input type="text" name="" id="" placeholder="Search here" onChange={(e)=>setQuery(e.target.value)} />
            <button type="submit">Search</button>
          </form>
        </S.Search>
        <S.MovieList>
          <h2>More watched</h2>
          <S.Movies>
            {movies?.map(movie =>(
                <Movie  key={movie?.id} name={movie?.original_title} image={movie?.poster_path} />
            ))}
          </S.Movies>
        </S.MovieList>
      </>
    )
}

export default MovieList