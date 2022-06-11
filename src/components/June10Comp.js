import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import chelanGallery from "../data/chelanGallery";
import zooGallery from "../data/zooGallery";


const June10Comp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <Carousel>
              {chelanGallery.map((element, index) => {
                return (
                  <Carousel.Item key={index}>
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
                  <Carousel.Item key={index}>
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
    </>
  ) 
}

export default June10Comp;