import {Link} from "react-router-dom"
function Header(){
  return(
    <header>
      <Link to="/">
        <div>MovieALL</div>
      </Link>
      <nav>
        <ul>
          <li>Home</li>
          <li>Actions</li>
          <li>Romantic</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;