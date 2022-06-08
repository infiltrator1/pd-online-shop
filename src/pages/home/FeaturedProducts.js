import { Row, Col, Carousel } from "react-bootstrap";

function FeaturedProducts() {

    return(

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

    );
}
export default FeaturedProducts;