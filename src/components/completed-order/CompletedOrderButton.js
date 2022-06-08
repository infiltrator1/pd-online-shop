import {
    Link,
  } from "react-router-dom";

  import { Button } from "react-bootstrap";
  
function CompletedOrderButton() {
    return(
            <Link to={`/completedorder/${12345}`}>
                 <Button variant="success" size="md" className="mt-3">
                    Order
                 </Button>
            </Link>   
    )
}

export default CompletedOrderButton;