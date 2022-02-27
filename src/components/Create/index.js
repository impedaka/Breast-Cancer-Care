import React from "react";
import { Button, SmallHeader, SmallText } from "../../pages/Home/home";
import { Col, Row, Text } from "../../pages/page";
import { Rect } from "./Create";
import upload from "../../assets/upload.png";
const CreatePage = () => {
  return (
    <>
      <Col style={{ justifyContent: "flex-start" }}>
        <SmallHeader>Create a Post</SmallHeader>
        <Rect>
          <Col>
            <img
              src={upload}
              alt="ajdfkas"
              style={{ width: "25%", opacity: "0.5" }}
            />
            <Text>Title</Text>
            <input placeholder="ree" />
            <Text>Tags</Text>

            <input placeholder="ree" />
            <textarea></textarea>
            <Button style={{ minWidth: "100%" }}>Submit</Button>
            <Row>
              <input type="checkbox" />
              <SmallText>
                Save my on this website in this browser for the next time I
                interact.
              </SmallText>
            </Row>
          </Col>
        </Rect>
      </Col>
    </>
  );
};

export default CreatePage;
