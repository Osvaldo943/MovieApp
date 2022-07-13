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