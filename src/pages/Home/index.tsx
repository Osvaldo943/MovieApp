import { useEffect } from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import Search from "../../components/Search";

function Home(){
  
  
  return(
    <>
      <Header />
      <Banner />
      <Search />
      <MovieList />
    </>
  )
}

export default Home;