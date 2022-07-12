import './App.css'
import { MovieProvider } from './MovieProvider'
import AddMovie from './pages/AddMovie'
import MovieList  from './pages/Movies/index'
import Nav from "./pages/Nav"

function App() {
  return (
    <div className="App">
      <MovieProvider >
        <div>
          <Nav/>
          <AddMovie />
          <MovieList />
        </div>
      </MovieProvider>
    </div>
  )
}

export default App
