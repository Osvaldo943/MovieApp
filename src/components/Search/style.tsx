import styled, {AnyStyledComponent} from "styled-components"

export const Search:AnyStyledComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 70%;
    padding: 15px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #F75A68;
    border-left: 1px solid #F75A68;
    border-radius: 30px 30px 0 30px;
    color: #ffffff;
    font-size: 16px;
  }
  button {
    padding: 15px 30px;
    background: #F75A68;
    border: 1px solid #F75A68;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    transition: all .2s ease-in;
    &:hover {
      background: transparent;
      color: #F75A68;
      border-color: #F75A68;
    }
  }

`