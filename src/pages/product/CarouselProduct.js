import { Col, Carousel } from "react-bootstrap";

function CarouselProduct() {

    return(
        
        
          <Col sm={7}>
            <Carousel 
                variant="dark"
                className="flex-start mt-1">
              <Carousel.Item>
                <img
                   className="d-block mx-auto"
                   width={500}
                   src="https://static.bershka.net/4/photos2/2022/V/0/2/p/0618/019/800/0618019800_1_1_3.jpg?t=1640105351049"
                   alt="First slide"
                />      
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block mx-auto "
                  width={500}
                  src="https://static.bershka.net/4/photos2/2022/V/0/2/p/0618/019/800/0618019800_2_1_1.jpg?t=1640105351049"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                   className="d-block mx-auto"
                   width={500}
                   src="https://static.bershka.net/4/photos2/2022/V/0/2/p/0618/019/800/0618019800_2_2_1.jpg?t=1640105351049"
                   alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block mx-auto"
                  width={500}
                  src="https://static.bershka.net/4/photos2/2022/V/0/2/p/0618/019/800/0618019800_2_3_1.jpg?t=1640105351049"
                  alt="Fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block mx-auto"
                  width={500}
                  src="https://static.bershka.net/4/photos2/2022/V/0/2/p/0618/019/800/0618019800_2_5_1.jpg?t=1640105351049"
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        
        
         
    );
}
export default CarouselProduct;