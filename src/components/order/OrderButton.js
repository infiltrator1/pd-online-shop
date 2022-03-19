import {
    Link,
  } from "react-router-dom";

  import { Button } from "react-bootstrap";
  
function OrderButton() {
    return(
            <Link to={`/order/${12345}`}>
                 <Button variant="secondary" size="lg" className="mt-5">
                    Add to basket
                    </Button>
            </Link>   
    )
}

export default OrderButton;