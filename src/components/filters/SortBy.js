import { Form } from "react-bootstrap";

function SortBy() {
    
    return(
        <Form.Group 
            className="mb-3" 
            controlId="filterForm.ControlCheckboxes">
        <Form.Label>
            <h6>Sort</h6>
        </Form.Label>
            <Form className="">
                {['checkbox'].map((type) => (
                    <div key={`inline-${type}`}>
                        <Form.Check
                              inline
                              label="Priced From Low To High"
                              name="low"
                              type={type}
                              id={`inline-${type}-1`}
                        />
                        <Form.Check
                              inline
                              label="Priced From High To Low"
                              name="high"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                    </div>
                ))}
            </Form>
    </Form.Group>  
    )
}

export default SortBy;