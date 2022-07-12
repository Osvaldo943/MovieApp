import {useState, useContext, useEffect} from "react"
import Movie from "../../components/Movie"

import { MovieContext } from "../../MovieProvider"

function Nav(){
    const [movies, setMovies] = useContext(MovieContext);
    return(
      <>
        <div>
          <h1>Osvaldo de Sousa</h1>
          <p>Meus vídeos <b>{movies.length}</b> </p>
        </div>
      </>
    )
}

export default Nav