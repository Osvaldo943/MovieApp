import {Link} from "react-router-dom"
import  * as S from "./style"

function Header(){
  return(
    <S.Header>
      <S.Logo>
        <a href="/">
          <span>All</span>Movie
        </a>
      </S.Logo>
      <nav>
        <ul>
            <Link to="/">
              <li>Home</li>
            </Link> 
            <Link to="/">
              <li>Actions</li>
            </Link> 
            <Link to="/">
              <li>Romantic</li>
            </Link> 
            <Link to="/">
              <li>Contact</li>
            </Link> 
        </ul>
      </nav>
    </S.Header>
  )
}

export default Header;