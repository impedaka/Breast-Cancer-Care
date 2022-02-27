import styled from "styled-components";
import storybg from "../../assets/Storybg.png";
export const StoryBG = styled.div`
  background: url(${storybg}) no-repeat;
  min-height: 100vh;
  background-size: 100%;
  h1 {
    display: flex;
    justify-content: center;
    min-width: 500px
    padding-top: 100px;
  }
`;
