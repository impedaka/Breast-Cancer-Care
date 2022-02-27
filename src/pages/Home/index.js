import React from "react";
import person1 from "../../assets/person.png";
import person2 from "../../assets/person3.png";
import person3 from "../../assets/person2.png";
import {
  BotHome,
  Button,
  Container,
  SmallHeader,
  SmallText,
  Wrapper,
} from "./home.js";
import { Row, Col, Text, Header, SubText } from "../page";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header style={{ width: "400px" }}>
              ❤️face cancer with kindness
            </Header>
            <SubText style={{ width: "400px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              sapien, et vitae facilisi.
            </SubText>
          </Col>
        </Row>
      </Container>
      <Wrapper>
        <Header style={{ padding: "100px 0" }}>Inspiring Stories</Header>
        <Col>
          <Row style={{ justifyContent: "space-around" }}>
            <img src={person1} />
            <Col>
              <SmallHeader>
                <Link to="/sarahstory">Sarah Jones</Link>
              </SmallHeader>
              <SmallText style={{ width: "600px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                aenean pharetra nibh consectetur proin sed. Vel sed vel mi,
                facilisis placerat at diam massa. Consequat sit enim eget
                auctor.
              </SmallText>
            </Col>
          </Row>
          <Row style={{ justifyContent: "space-around" }}>
            <Col>
              <SmallHeader>Sarah Jones</SmallHeader>
              <SmallText style={{ width: "600px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                aenean pharetra nibh consectetur proin sed. Vel sed vel mi,
                facilisis placerat at diam massa. Consequat sit enim eget
                auctor.
              </SmallText>
            </Col>
            <img src={person2} />
          </Row>
          <Row style={{ justifyContent: "space-around" }}>
            <img src={person3} />
            <Col>
              <SmallHeader>Sarah Jones</SmallHeader>
              <SmallText style={{ width: "600px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                aenean pharetra nibh consectetur proin sed. Vel sed vel mi,
                facilisis placerat at diam massa. Consequat sit enim eget
                auctor.
              </SmallText>
            </Col>
          </Row>
          <Button style={{ marginBottom: "300px" }}>Read More</Button>
        </Col>
      </Wrapper>
      <BotHome>
        <Col>
          <Header style={{ textAlign: "center" }}>Discussion Forum</Header>
          <SubText style={{ width: "600px", textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur andi elit. Risus sapien, et
            vitae facilisi.
          </SubText>
          <Button>Go to Forum</Button>
        </Col>
      </BotHome>
    </>
  );
};

export default Homepage;
