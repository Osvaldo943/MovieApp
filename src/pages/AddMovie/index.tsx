import { useContext, useState } from "react"
import { MovieContext } from "../../MovieProvider";

function AddMovie(){
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext)

  function HandleMovie(e:any){
    e.preventDefault();
    console.log(name, price)
    setMovies(prevMovies => [...prevMovies, {name: name, price: price}]);
  }

  return(
    <>
      <form onSubmit={HandleMovie}>
        <input type="text" name="name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        <input type="number" name="price" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/>
        <button type="submit" >Cadastrar-se</button>
      </form> 
    </>
  )
}

export default AddMovie