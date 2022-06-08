import { Card } from "react-bootstrap";
import {
    Link,
  } from "react-router-dom";
  
function Cloth({image, name, price, id}) {

    return(
        <Card className="mx-1">
            <Link to={`/product/${id}`}>
                <Card.Img variant="top" src={image}/>
            </Link>
            <Card.Body>
                <div>{name}</div>
                <h6>{price}</h6>
            </Card.Body>
        </Card>
    )
}

export default Cloth;