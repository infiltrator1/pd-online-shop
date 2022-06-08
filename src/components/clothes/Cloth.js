import {Card, Col} from "react-bootstrap";
import {
    Link,
  } from "react-router-dom";
import OrderButton from "../order/OrderButton";
  
function Cloth({cloth}) {

    return(
        <Col xs={6} md={3}>
            <Card className="my-2">
                <Link to={`/product/${cloth._id}`}>
                    <Card.Img variant="top" src={cloth.image}/>
                </Link>
                <Card.Body>
                    <div className="grid-cloth-name">{cloth.name}</div>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="h5 mb-0">{cloth.price}</span>
                        <OrderButton cloth={cloth} buttonSize="md" />
                    </div>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default Cloth;