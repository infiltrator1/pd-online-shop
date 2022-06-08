import { Form } from "react-bootstrap";

function TypeKids() {

      const checkboxes = [
            {
                  label: "Shirts",
                  type: "shirts",
            },
            { 
                  label: "Sweaters",
                  type: "sweaters",
            },
            {
                  label: "Trousers",
                  type: "trousers",
            },
            {
                  label: "Shorts",
                  type: "shorts",
            },
            {
                  label: "Dresses",
                  type: "dresses",
            },
            {
                  label: "Skirts",
                  type: "skirts",
            },
        ]
    
        return(
            <Form.Group 
                className="mb-3" 
                controlId="filterForm.ControlCheckboxes">
            <Form.Label>
                <h6>Type</h6>
            </Form.Label>
            <div className="row justify-content-center">
                  <div className="col-md-12 col-12">
                        <Form className="d-flex justify-content-center flex-wrap">
                        {checkboxes.map((checkbox) => (
                              <Form.Check
                              key={`inline-${checkbox.type}`}
                                    inline
                                    label={checkbox.label}
                                    name={checkbox.type}
                                    id={`inline-${checkbox.type}-1`}
                              />
                              
                        ))}
                  </Form>
                  </div>
            </div>
                
        </Form.Group>  
        )
    }

export default TypeKids;