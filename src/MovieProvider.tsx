import {useState, createContext} from "react"

export const MovieContext = createContext<any>([]);

export const  MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '1000,00',
      id: '0001',
    },
    {
      name: 'Harry Potter',
      price: '1.000,00',
      id: '0001',
    },
    {
      name: 'Games of Thrones',
      price: '1.100,00',
      id: '0002',
    },
    {
      name: 'Harry Potter',
      price: '1000,00',
      id: '0001',
    },
    {
      name: 'Harry Potter',
      price: '1.000,00',
      id: '0001',
    },
    {
      name: 'Games of Thrones',
      price: '1.100,00',
      id: '0002',
    },
  ]);

  return(
    <MovieContext.Provider value={[movies, setMovies]} >
      {props.children}
    </MovieContext.Provider>
  )
}