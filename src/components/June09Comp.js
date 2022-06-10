import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import chelanKinsley from "../assets/images/DSC04861.JPG";
import chelanBrooklyn from "../assets/images/DSC04902.JPG";
import chelanFishing from "../assets/images/DSC04906.JPG";
import zooBrooklyn from "../assets/images/DSC05048.JPG";
import zooJaxs from "../assets/images/DSC05074.JPG";
import zooBrooklynBen from "../assets/images/DSC05034.JPG";

const chelanGallery = [
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
];

const zooGallery = [
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

function June09Comp() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <Carousel>
              {chelanGallery.map((element, index) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={element.image}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>{element.title}</h3>
                      <p>{element.text}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
          <Col xs={12} lg={6}>
            <Carousel>
              {zooGallery.map((element, index) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={element.image}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>{element.title}</h3>
                      <p>{element.text}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default June09Comp;
