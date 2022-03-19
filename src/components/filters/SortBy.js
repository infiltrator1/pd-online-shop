import { Form } from "react-bootstrap";

function SortBy() {

    const checkboxes = [
        { 
            label: "Priced From Low To High",
            type: "low",
        },
        {
            label: "Priced From High to Low",
            type: "high",
        }
    ]

    return(
        <Form.Group 
            className="mb-3" 
            controlId="filterForm.ControlCheckboxes">
        <Form.Label>
            <h6>Sort</h6>
        </Form.Label>
            <Form className="d-flex justify-content-center">
                {checkboxes.map((checkbox) => (
                    <div key={`inline-${checkbox.type}`}>
                        <Form.Check
                              inline
                              label={checkbox.label}
                              name={checkbox.type}
                              id={`inline-${checkbox.type}-1`}
                        />
                        
                    </div>
                ))}
            </Form>
    </Form.Group>  
    )
}

export default SortBy;