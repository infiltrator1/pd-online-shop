import SortBy from "./SortBy";
import TypeKids from "./TypeKids";
import SizeKids from "./SizeKids";
import { Card, Button } from "react-bootstrap";
import GenderKids from "./GenderKids";

function FiltersKids() {

    return(
        
        <Card className="text-center bg-light mt-2">
            <Card.Body>
                <Card.Title className="mb-3">Filters</Card.Title>
                    <SortBy/>
                    <GenderKids/>
                    <TypeKids/>
                    <SizeKids/>
                    <div className="d-grip gap-2"> 
                        <Button variant="secondary">Search</Button>
                    </div>
            </Card.Body>
        </Card>       
    )
}

export default FiltersKids;