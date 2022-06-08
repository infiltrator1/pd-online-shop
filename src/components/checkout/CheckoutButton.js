import {
    Link,
  } from "react-router-dom";

  import { Button } from "react-bootstrap";
  
function CheckoutButton() {
    return(
            <Link to={`/checkout/${12345}`}>
                 <Button variant="success" size="md" className="mt-3">
                    Process order
                 </Button>
            </Link>   
    )
}

export default CheckoutButton;