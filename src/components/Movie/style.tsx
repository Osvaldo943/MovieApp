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
  cursor: pointer;
  transition: all .2s ease;


  div {
    width: 100%;
    max-height: 50px;
    min-height: 50px;
    overflow: hidden;
  }
  p{
    line-height: 25px;
    color: #8D8D99;
  }
  img {
    width: 100%;
    height: 250px;
  }

  &:hover {
    border-color: #F75A68;
    background: #F75A68;
    color: #ffffff;
  }
`