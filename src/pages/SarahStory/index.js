import React from "react";
import Sarah from "../../assets/sarah.png";
import SarahBanner from "../../assets/sarahbanner.png";
import SarahFlower from "../../assets/sarahflower.png";
import { SmallHeader, SmallText } from "../Home/home";
import { SarahBg } from "./SarahStory";
import { Row, Col } from "../page";
const SarahStory = () => {
  return (
    <>
      <img src={SarahBanner} style={{ width: "100%" }} alt="asdfas" />
      <img
        src={Sarah}
        style={{
          marginTop: "-150px",
          marginBottom: "-150px",
          marginLeft: "100px",
        }}
        alt="aksjdfkas"
      />
      <SarahBg>
        <SmallHeader style={{ display: "flex", justifyContent: "center" }}>
          Sarah Jones
        </SmallHeader>
        <Row style={{ justifyContent: "space-evenly" }}>
          <Col>
            <SmallHeader style={{ paddingTop: "100px" }}>
              My Battle with Cancer
            </SmallHeader>
            <SmallText style={{ width: "600px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              leo sit est sit. Suspendisse nunc, faucibus luctus ligula mi sem
              ornare enim. Ut amet, dictum faucibus lectus sed. Ipsum nulla sed
              sollicitudin ac semper vel neque praesent. Malesuada sollicitudin
              dui senectus sed. At suspendisse ultrices auctor commodo at nibh.
              Interdum vestibulum ultrices eu egestas pellentesque at donec.
            </SmallText>
            <SmallText style={{ width: "600px" }}>
              Venenatis lectus fusce. Id auctor nulla imperdiet enim arcu,
              nullam. Purus malesuada ornare fringilla ac nisl magnis ac amet
              sagittis. At purus fusce velit habitant orci nulla amet, euismod
              sit. Est tempor arcu sit pharetra, felis cras dictum. Elementum id
              elit consectetur volutpat, diam et facilisis faucibus euismod.
              Diam laoreet orci pulvinar tempor ut donec quam tellus felis. Duis
              volutpat blandit at nisl enim interdum massa augue purus. Posuere
              aenean tincidunt odio faucibus sed congue mi facilisi. Sed odio ut
              id sed venenatis vulputate tempor.
            </SmallText>
            <SmallText style={{ width: "600px" }}>
              Diam malesuada ac aliquam mattis mauris ultricies. Nunc, sapien
              ipsum risus, pharetra, sapien sagittis aliquam quam. Posuere
              facilisi blandit sollicitudin gravida orci, suspendisse mollis
              nullam. Varius et vitae pretium in hendrerit mauris tincidunt
              morbi morbi. Nisi, in massa quis fames lacus quis ut. Amet
              ultrices diam nunc molestie.
            </SmallText>
            <SmallText style={{ width: "600px" }}>
              Vestibulum massa ultrices ornare aliquet. Enim interdum massa
              augue purus. Posuere aenean tincidunt odio faucibus sed congue mi
              facilisi. Sed odio ut id sed venenatis
            </SmallText>
          </Col>
          <img
            src={SarahFlower}
            style={{ height: "75%", marginTop: "200px" }}
            alt="asdfas"
          />
        </Row>
        <br />
        <br />
        <br />
      </SarahBg>
    </>
  );
};

export default SarahStory;
