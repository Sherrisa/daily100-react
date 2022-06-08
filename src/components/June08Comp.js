import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import chelanKinsley from "../assets/images/DSC04861.JPG";
import chelanBrooklyn from "../assets/images/DSC04902.JPG";
import chelanFishing from "../assets/images/DSC04906.JPG";
import zooBrooklyn from "../assets/images/DSC05048.JPG";
import zooJaxs from "../assets/images/DSC05074.JPG";
import zooBrooklynBen from "../assets/images/DSC05034.JPG";

function June08() {
  return (
    <div>
      <Container>
        <Row>
          
          <Col xs={12} lg={6} xl={4}>
            <Card>
              <Card.Img variant="top" src={chelanKinsley} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={6} xl={4}>
            <Card>
              <Card.Img variant="top" src={chelanBrooklyn} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={6} xl={4}>
            <Card>
              <Card.Img variant="top" src={chelanFishing} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={6} xl={4}>
            <Card>
              <Card.Img variant="top" src={zooBrooklyn} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={6} xl={4}>
            <Card>
              <Card.Img variant="top" src={zooJaxs} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={6} xl={4}>
            <Card>
              <Card.Img variant="top" src={zooBrooklynBen} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default June08;
