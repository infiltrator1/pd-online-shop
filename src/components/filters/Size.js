import { Form } from "react-bootstrap";

function Size() {
    
    const checkboxes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 
                        '34', '36', '38', '40', '42', '44'];


    return(
        <Form.Group 
            className="mb-3" 
            controlId="filterForm.ControlCheckboxes">
        <Form.Label>
            <h6>Size</h6>
        </Form.Label>
        <div className="row justify-content-center">
            <div className="col-md-4 col-12">
            <Form className="d-flex justify-content-center flex-wrap">
                {checkboxes.map((checkbox) => (
                    <div key={`inline-${checkbox}`}>
                        <Form.Check
                              inline
                              label={checkbox}
                              name={checkbox}
                              id={`inline-${checkbox}-1`}
                        />
                    </div>
                ))}
            </Form>
        </div>
        </div>
    </Form.Group>
    )
}

export default Size;