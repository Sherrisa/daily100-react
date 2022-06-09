import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import chelanKinsley from "../assets/images/DSC04861.JPG";
import chelanBrooklyn from "../assets/images/DSC04902.JPG";
import chelanFishing from "../assets/images/DSC04906.JPG";
import zooBrooklyn from "../assets/images/DSC05048.JPG";
import zooJaxs from "../assets/images/DSC05074.JPG";
import zooBrooklynBen from "../assets/images/DSC05034.JPG";

const Gallery = [
  {
    id: 1,
    image: chelanKinsley,
    title: "Kinsley at the Beach",
    text: "Kinsley at the beach in Chelan when Stacy, Lexi, and Savannah came to visit.",
  },
  {
    id: 2,
    image: chelanBrooklyn,
    title: "Brooklyn at the Beach",
    text: "Brooklyn living her best life at the beach with the family in Chelan.",
  },
  {
    id: 3,
    image: chelanFishing,
    title: "Jaxson and Kinsley Fishing",
    text: "Jaxson teaching Kinsley how to throw a fishing line at Lake Chelan.",
  },
  {
    id: 4,
    image: zooBrooklyn,
    title: "Brooklyn's First Birthday",
    text: "Brooklyn riding the mosaic lizard at the Woodland Park Zoo.",
  },
  {
    id: 5,
    image: zooJaxs,
    title: "Jaxs at Woodland Park Zoo",
    text: "Jaxson a the Woodland Park Zoo for Brooklyn's first birthday.",
  },
  {
    id: 6,
    image: zooBrooklynBen,
    title: "Ben and Brooklyn at the Zoo",
    text: "Ben carrying Brooklyn on his shoulders at her birthday party at the zoo.",
  },
];

function June08() {
  return (
    <div>
      <Container>
        <Row>
          {Gallery.map((element, index) => {
            return (
              <Col xs={12} lg={6} xl={4}>
                <Card>
                  <Card.Img variant="top" src={element.image} />
                  <Card.Body>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>{element.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default June08;
