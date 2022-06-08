import {Card, Col} from "react-bootstrap";
import {
    Link,
  } from "react-router-dom";
import OrderButton from "../order/OrderButton";
  
function Cloth({image, name, price, id}) {

    return(
        <Col xs={6} md={3}>
            <Card className="my-2">
                <Link to={`/product/${id}`}>
                    <Card.Img variant="top" src={image}/>
                </Link>
                <Card.Body>
                    <div className="grid-cloth-name">{name}</div>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="h5 mb-0">{price}</span>
                        <OrderButton productId={id} buttonSize="md" />
                    </div>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default Cloth;