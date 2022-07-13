import styled, {AnyStyledComponents} from "styled-components"

export const Header:AnyStyledComponents = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  background: #121214;
  border-bottom: 1px solid #29292E;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
  }
  nav ul  a {
    text-decoration: none;
    color: #C4C4CC;
    padding: 0 10px;
    font-size: 15px;
    transition: all .2s ease-in;

    &:hover {
      color: #F75A68;
    }
  }
`
export const Logo:AnyStyledComponents = styled.div`
  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 20px;
    font-style: italic;
  } 
  a span {
    color: #F75A68 !important;
  }
`
