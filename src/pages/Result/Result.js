import bg from "../../assets/resultbg.png";
import styled from "styled-components";
export const ResultBg = styled.div`
  background: url(${bg}) no-repeat;
  min-height: 100%;
  background-size: 100%;
  padding-top: 100px;
  padding: 100px 140px;
  h1 {
    display: flex;
    min-width: 500px;
  }
`;
