import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import Router from './Router'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
