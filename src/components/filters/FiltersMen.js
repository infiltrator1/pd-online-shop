import SortBy from "./SortBy";
import TypeMen from "./TypeMen";
import Size from "./Size";
import { Card, Button } from "react-bootstrap";

function FiltersMen() {

    return(
        
        <Card className="text-center bg-light mt-2">
            <Card.Body>
                <Card.Title className="mb-3">Filters</Card.Title>
                    <SortBy/>
                    <TypeMen/>
                    <Size/>
                    <div className="d-grip gap-2"> 
                        <Button variant="secondary">Search</Button>
                    </div>
            </Card.Body>
        </Card>       
    )
}

export default FiltersMen;