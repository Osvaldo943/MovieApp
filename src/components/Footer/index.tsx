import {Link} from "react-router-dom"
import Newsletter from "../Newsletter";
import * as S from "./styled"

function Footer(){
  return(
    <S.Footer>
      <div>
        <Newsletter />
        <ul>
          <span>Menu</span>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Actions</Link>
          </li>
          <li>
            <Link to="">Romantic</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
        <ul>
          <span>Social media</span>
          <li>
            <Link to="">Facebook</Link>
          </li>
          <li>
            <Link to="">Instagram</Link>
          </li>
          <li>
            <Link to="">Twitter</Link>
          </li>
          <li>
            <Link to="">gitHub</Link>
          </li>
        </ul>
        <ul>
          <li>Angola, Luanda, Belas</li>
          <li>934942499 / 924398472</li>
        </ul>
      </div>
      <p>Todos os direitos reservados para Osvaldo de Sousa</p>
    </S.Footer>
  )
}

export default Footer;