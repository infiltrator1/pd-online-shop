import { Card } from "react-bootstrap";

import {
    Link,
  } from "react-router-dom";
  
function Cloth({image, description, price}) {
    return(
        <Card className="mx-1">
            <Link to={`/product/${12345}`}>
                <Card.Img variant="top" src={image}/>
            </Link>
            <Card.Body>
                <div>{description}</div>
                <h6>{price}</h6>
            </Card.Body>
        </Card>
    )
}

export default Cloth;