import FeaturedImage from "../components/navbar/image/FeaturedImage";
import { CardGroup, Card, Container, Row, Col, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShirt, 
  faShieldBlank, 
  faTruckFast 
} from '@fortawesome/free-solid-svg-icons';

function Home() {

    return (
      <div className="home">      
      <FeaturedImage/>

      
      <CardGroup className="text-center mt-2">
        <Card>
           <Card.Header>
               <FontAwesomeIcon
                 className="mx-auto"
                 size="xl"
                 icon={faShirt} />
           </Card.Header>
           <Card.Body>
             <Card.Title>QUALITY MATERIALS</Card.Title>
             <Card.Subtitle className="mb-2 text-muted">
               Guarantee 100% polyurethane and 100% polyester
               </Card.Subtitle>
           </Card.Body>
           <Card.Footer></Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <FontAwesomeIcon
              className="mx-auto"
              size="xl"
              icon={faTruckFast} />
          </Card.Header>
          <Card.Body>
            <Card.Title>FREE SHIPPING</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              We free shipping for all morders over 199$
            </Card.Subtitle>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <FontAwesomeIcon
              className="mx-auto"
              size="xl"
              icon={faShieldBlank} />
          </Card.Header>
          <Card.Body>
            <Card.Title>SECURE PAYMENT</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Guarantee 100% secure payment online on our website
            </Card.Subtitle>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
     </CardGroup>
     <Row/>

     <Container>
       <Row>
         <Col>
           <h1 className="text-center mt-4">Featured products</h1>
         </Col>
       </Row>
       <Row>
         <Col>
            <Carousel 
                variant="dark"
                className="mt-1">
              <Carousel.Item>
                <img
                   className="d-block mx-auto w-50"
                   src="https://images.pexels.com/photos/247298/pexels-photo-247298.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                   alt="First slide"
                />
                <Carousel.Caption className="carouselCaption">
                  <div className="badge bg-black fst-italic  text-white">Autumn Collection 2022</div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block mx-auto w-50"
                  src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="Second slide"
                />
              <Carousel.Caption>
                 <div className="badge bg-black fst-italic  text-white">Autumn Collection 2022</div>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                   className="d-block mx-auto w-50"
                   src="https://images.pexels.com/photos/963696/pexels-photo-963696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                   alt="Third slide"
                />
              <Carousel.Caption>
                  <div className="badge bg-black fst-italic  text-white">Autumn Collection 2022</div>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block mx-auto w-50"
                  src="https://images.pexels.com/photos/6311121/pexels-photo-6311121.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="Fourth slide"
                />
              <Carousel.Caption>
                  <div className="badge bg-black fst-italic  text-white">Autumn Collection 2022</div>
              </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      </div>
    );
  }
  
export default Home;