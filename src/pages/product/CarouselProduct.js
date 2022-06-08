import {Col, Carousel, Form} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useGetCloth} from "../../graphql/useRequest"

function CarouselProduct() {

    const {id} = useParams();
    const {data} = useGetCloth(id);

    return (

        <Col sm={7}>
            <Carousel
                variant="dark"
                className="flex-start mt-1">
                {data && data.clothesOne.imageList.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block mx-auto"
                            width={500}
                            src={image}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </Col>

    );
}

export default CarouselProduct;