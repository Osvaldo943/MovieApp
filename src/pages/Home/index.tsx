import {useState, useEffect } from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import Search from "../../components/Search";

function Home(){
  const [query, setQuery] = ('');
  const [movies, setMovies] = useState<any>([])
  return(
    <>
      <Header />
      <Banner />
      <MovieList />
    </>
  )
}

export default Home;