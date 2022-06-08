import { Col, Carousel } from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useGetCloth} from "../../graphql/useRequest"

function CarouselProduct() {

  const { id } = useParams();
  const { data } = useGetCloth(id);

  //const image3 = data.clothesOne.imageList[3];
  //const image4 = data.clothesOne.imageList[4];

  //if ( image3 === true) {
  //    console.log(image3)
  //} 


    return(   

      <Col sm={7}>
        <Carousel
            variant="dark"
            className="flex-start mt-1">
              <Carousel.Item>
              <img
                   className="d-block mx-auto"
                   width={500}
                   src= {data.clothesOne.imageList[0]}
                   alt="First slide"
                />      
              </Carousel.Item>
              <Carousel.Item>
              <img
                   className="d-block mx-auto"
                   width={500}
                   src= {data.clothesOne.imageList[1]}
                   alt="First slide"
                />      
              </Carousel.Item>
              <Carousel.Item>
              <img
                   className="d-block mx-auto"
                   width={500}
                   src= {data.clothesOne.imageList[2]}
                   alt="First slide"
                />      
              </Carousel.Item>
              <Carousel.Item>
                <img
                     className="d-block mx-auto"
                     width={500}
                     src= {data.clothesOne.imageList[3]}
                     alt="First slide"
                  />      
              </Carousel.Item>
              <Carousel.Item>
              <img
                   className="d-block mx-auto"
                   width={500}
                   src= {data.clothesOne.imageList[4]}
                   alt="First slide"
                />
              </Carousel.Item>
        </Carousel>
      </Col>

    );
    }

      /*    
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

*/

export default CarouselProduct;