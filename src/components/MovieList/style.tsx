import styled,{AnyStyledComponent} from "styled-components"

export const MovieList: AnyStyledComponent = styled.div`
  width: 100%;
  margin: 30px auto 0px;
  padding: 30px 140px;


  display: flex;
  flex-direction: column;
  justify-content: center;

  h2{
    font-size: 25px;
    font-size: bold;
    color: #C4C4CC;
    margin-bottom: 30px;
    border-bottom: 1px solid #121214;
    padding-bottom: 5px;
    margin-bottom: 30px;

  }
`
export const Movies: AnyStyledComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

`
export const BestMovieList: AnyStyledComponent = styled(MovieList)`
  h2 {
    width: 100%;
    text-align: left;
  }
`

export const Search:AnyStyledComponent = styled.div`
form{
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
}
`
