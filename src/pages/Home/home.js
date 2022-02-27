import styled from "styled-components";
import bg from "../../assets/bg.png";
import bodybg from "../../assets/bodybg.png";

import homeBot from "../../assets/homebot.png";
export const Container = styled.div`
  background: url(${bg}) no-repeat;
  background-size: 100%;

  h1 {
    margin: 200px 123px 0 123px;
  }
  p {
    margin: 0px 123px 0px 123px;
    padding-bottom: 150px;
  }
`;

export const Button = styled.button`
  background-color: #eb4a8b;
  border-radius: 5px;
  max-width: 175px;
  padding: 15px 40px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  border: none;
  height: 52px;
  margin: 0 auto;
  display: block;
`;
export const Wrapper = styled.div`
  background: url(${bodybg}) no-repeat;
  min-height: 100%;
  background-size: 100%;
  h1 {
    display: flex;
    justify-content: center;
    min-width: 500px
    padding-top: 100px;
  }
`;
export const SmallText = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
export const SmallHeader = styled.h2`
  font-size: 32px;
  font-weight: 700px;
`;
export const BotHome = styled.div`
  background: url(${homeBot}) no-repeat;
  min-height: 100vh;
  background-size: 100%;
  z-index: 10;
  position: relative;
  margin-top: -150px;
  margin-bottom: -200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
