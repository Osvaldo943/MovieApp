import styled, {AnyStyledComponent} from "styled-components"

export const Newsletter: AnyStyledComponent = styled.div`
  margin-right: 15px;
  span {
    font-size: 30px;
  }
  form {
    margin-top: 15px;
  }
  input{
    width: 300px;
    background: transparent;
    border: 1px solid #F75A68;
    border-radius: 4px;
    padding: 15px;
    color: #ffffff;
  }
  button {
    border: 1px solid #F75A68;
    border-radius: 4px;
    padding: 15px 30px;
    margin-left: 5px;
    background: #F75A68;
    cursor: pointer;
    color: #ffffff;
    font-weight: bold;
    transition: all .2s ease;

    &:hover {
      background: transparent;
    }
  }

`