import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import chelanKinsley from "../assets/images/DSC04861.JPG";
import chelanBrooklyn from "../assets/images/DSC04902.JPG";
import chelanFishing from "../assets/images/DSC04906.JPG";
import zooBrooklyn from "../assets/images/DSC05048.JPG";
import zooJaxs from "../assets/images/DSC05074.JPG";
import zooBrooklynBen from "../assets/images/DSC05034.JPG";

const Gallery = [
  {
    image: chelanKinsley,
    title: "Kinsley at the Beach",
    text: "Kinsley at the beach in Chelan when Stacy, Lexi, and Savannah came to visit.",
  },
  {
    image: chelanBrooklyn,
    title: "Brooklyn at the Beach",
    text: "Brooklyn living her best life at the beach with the family in Chelan.",
  },
  {
    image: chelanFishing,
    title: "Jaxson and Kinsley Fishing",
    text: "Jaxson teaching Kinsley how to throw a fishing line at Lake Chelan.",
  },
  {
    image: zooBrooklyn,
    title: "Brooklyn's First Birthday",
    text: "Brooklyn riding the mosaic lizard at the Woodland Park Zoo.",
  },
  {
    image: zooJaxs,
    title: "Jaxs at Woodland Park Zoo",
    text: "Jaxson a the Woodland Park Zoo for Brooklyn's first birthday.",
  },
  {
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
