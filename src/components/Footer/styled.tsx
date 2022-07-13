import styled, {AnyStyledComponent} from "styled-components"

export const Footer: AnyStyledComponent = styled.footer`
  width: 100%;
  background: #121214;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    margin: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  p {
    text-align: center;
    background: #29292E;
    padding:15px 0;
  }

  ul {

  }
`