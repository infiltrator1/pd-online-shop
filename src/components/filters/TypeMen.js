import { Form } from "react-bootstrap";

function TypeMen() {

      const checkboxes = [
            { 
                label: "Jackets & Coats",
                type: "jackets&coatsMen",
            },
            {
                label: "Sweatshirts",
                type: "sweatshirts",
            }, 
            {
                  label: "Vests",
                  type: "vests",
            },
            {
                  label: "Shirts & Blouses",
                  type: "shirts&blouses",
            },
            {
                  label: "T-shirts",
                  type: "t-shirts",
            },
            {
                  label: "Shirts",
                  type: "shirts",
            },
            {
                  label: "Trousers",
                  type: "trousers",
            },
            {
                  label: "Shirts",
                  type: "shirts",
            },
            {
                  label: "Jeans",
                  type: "jeans",
            },
            {
                  label: "Shorts",
                  type: "shorts",
            },
            {
                  label: "Jeans",
                  type: "jeans",
            },
            {
                  label: "Swimwear",
                  type: "swimwear",
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

export default TypeMen;