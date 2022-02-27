import React from "react";
import ForumPage from "../../components/Forum";
import CreatePage from "../../components/Create";
import { Header, Row } from "../page";
import { DiscussBg } from "./Discuss";

const DiscussPage = () => {
  return (
    <>
      <DiscussBg>
        <Header style={{}}>Discussion forum </Header>
        <Row style={{ justifyContent: "space-around", gap: "25px" }}>
          <ForumPage />
          <CreatePage />
        </Row>
      </DiscussBg>
    </>
  );
};
export default DiscussPage;
