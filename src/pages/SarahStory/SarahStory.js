import bg from "../../assets/sarahbg.png";
import styled from "styled-components";
export const SarahBg = styled.div`
  background: url(${bg}) no-repeat;
  min-height: 100vh;
  background-size: 100%;
  
  padding-top: 100px;
  h1 {
    display: flex;
    justify-content: center;
    min-width: 500px
    padding-top: 100px;
  }
`;
