import {
    Link,
  } from "react-router-dom";

import { Button } from "react-bootstrap";
  
function ShopListButton() {
    return(
            <Link to={`/`}>
                 <Button variant="secondary" size="lg" className="mt-3">
                    Discover
                </Button>
            </Link>   
    )
}

export default ShopListButton;