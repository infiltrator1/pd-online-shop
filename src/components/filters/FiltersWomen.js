import SortBy from "./SortBy";
import TypeWomen from "./TypeWomen";
import Size from "./Size";
import { Card, Button } from "react-bootstrap";

function FiltersWomen() {

    return(
        
        <Card className="text-center bg-light mt-2">
            <Card.Body>
                <Card.Title className="mb-3">Filters</Card.Title>
                    <SortBy/>
                    <TypeWomen/>
                    <Size/>
                    <div className="d-grip gap-2"> 
                        <Button variant="secondary">Search</Button>
                    </div>
            </Card.Body>
        </Card>       
    )
}

export default FiltersWomen;