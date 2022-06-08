import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import chelanKinsley from "../assets/images/DSC04861.JPG";
import chelanBrooklyn from "../assets/images/DSC04902.JPG";
import chelanFishing from "../assets/images/DSC04906.JPG";
import zooBrooklyn from "../assets/images/DSC05048.JPG";
import zooJaxs from "../assets/images/DSC05074.JPG";
import zooBrooklynBen from "../assets/images/DSC05034.JPG";

function June07() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} lg={6} xl={4}>
            <Image fluid src={chelanBrooklyn} alt="Brooklyn in Chelan" />
          </Col>
          <Col xs={12} lg={6} xl={4}>
            <Image
              fluid
              src={chelanFishing}
              alt="Jaxs and Kinsley Fishing in Chelan"
            />
          </Col>
          <Col xs={12} lg={6} xl={4}>
            <Image fluid src={chelanKinsley} alt="Kinsley in Chelan" />
          </Col>
          <Col xs={12} lg={6} xl={4}>
            <Image
              fluid
              src={zooBrooklyn}
              alt="Brooklyn on the Mosaic Lizard"
            />
          </Col>
          <Col xs={12} lg={6} xl={4}>
            <Image fluid src={zooJaxs} alt="Jaxs at Woodland Park Zoo" />
          </Col>
          <Col xs={12} lg={6} xl={4}>
            <Image
              fluid
              src={zooBrooklynBen}
              alt="Brooklyn on Ben's shoulders"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default June07;
