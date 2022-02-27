import React from "react";
import Result from "../../assets/result.png";
import { SmallHeader } from "../Home/home";
import { Col, Header, Row, Text } from "../page";
import { ResultBg } from "./Result";
const ResultPage = () => {
  return (
    <>
      <ResultBg>
        <Header>Result</Header>
        <Row>
          <Col>
            <SmallHeader>Details</SmallHeader>
            <Text style={{ width: "530px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur non ut semper porttitor elementum risus facilisi
              turpis diam. Turpis congue etiam mauris. Volutpat, a est porttitor
              massa consequat. In tincidunt purus neque et iaculis amet. Sit eu
              varius parturient bibendum hendrerit dictumst id quisque.
              Ullamcorper tellus amet blandit arcu sit. Odio praesent massa
              tortor consectetur varius ut amet, enim pellentesque. Ultricies
              aliquet vehicula elementum, at enim potenti faucibus mi in.
            </Text>
          </Col>
          <img src={Result} />
        </Row>
      </ResultBg>
    </>
  );
};

export default ResultPage;
