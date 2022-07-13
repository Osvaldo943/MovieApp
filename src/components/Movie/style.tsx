import styled, {AnyStyledConponent} from "styled-components"

export const Movie: AnyStyledConponent = styled.div`
  background: #121214;
  width: 22%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #29292E;
  border-radius: 4px;

  div {
    width: 100%;
    max-height: 50px;
    min-height: 50px;
    overflow: hidden;
  }
  p{
    line-height: 25px;
  }
  img {
    width: 100%;
    height: 250px;
  }
`