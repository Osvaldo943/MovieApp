import {useState, useEffect } from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import Search from "../../components/Search";
import Footer from "../../components/Footer";

function Home(){
  const [query, setQuery] = ('');
  const [movies, setMovies] = useState<any>([])
  return(
    <>
      <Header />
      <Banner />
      <MovieList />
      <Footer />
    </>
  )
}

export default Home;