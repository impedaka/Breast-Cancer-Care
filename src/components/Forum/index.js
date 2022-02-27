import React from "react";
import { SmallHeader, SmallText } from "../../pages/Home/home";
import { Row, Col, Text, SubText } from "../../pages/page";
import Ava from "../../assets/Ava.png";
const ForumPage = () => {
  return (
    <Col>
      <Row>
        <div>
          <button>New</button>
          <button>New</button>
          <button>New</button>
          <button>New</button>
        </div>
        <input placeholder="search" />
      </Row>
      <div
        style={{
          border: "2px solid grey",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <div>
          <Row style={{ justifyContent: "flex-start" }}>
            <div>
              <img alt="aafd" src={Ava} />
            </div>

            <Text>Golanginya</Text>
          </Row>
        </div>
        <br />
        <Text>How to patch KDE on FreeBSD</Text>
        <SmallText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
          aliquet maecenas ut sit nulla
        </SmallText>
        <Row>
          <div>
            <button>golang</button>
            <button>golang</button>
            <button>golang</button>
          </div>
        </Row>
      </div>
      <div
        style={{
          border: "2px solid grey",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <Text>How to patch KDE on FreeBSD</Text>
        <SmallText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
          aliquet maecenas ut sit nulla
        </SmallText>
      </div>
      <div
        style={{
          border: "2px solid grey",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <Text>How to patch KDE on FreeBSD</Text>
        <SmallText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
          aliquet maecenas ut sit nulla
        </SmallText>
      </div>
      <div
        style={{
          border: "2px solid grey",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <Text>How to patch KDE on FreeBSD</Text>
        <SmallText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
          aliquet maecenas ut sit nulla
        </SmallText>
      </div>
      <div
        style={{
          border: "2px solid grey",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <Text>How to patch KDE on FreeBSD</Text>
        <SmallText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
          aliquet maecenas ut sit nulla
        </SmallText>
      </div>
      <div
        style={{
          border: "2px solid grey",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <Text>How to patch KDE on FreeBSD</Text>
        <SmallText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
          aliquet maecenas ut sit nulla
        </SmallText>
      </div>
      <SmallHeader>More</SmallHeader>
    </Col>
  );
};

export default ForumPage;
