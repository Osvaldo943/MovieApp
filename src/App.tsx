import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import Router from './Router'
import { MovieProvider } from './MovieProvider'

function App() {
  return (
    <div className="App">
      <MovieProvider >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MovieProvider>
    </div>
  )
}

export default App
