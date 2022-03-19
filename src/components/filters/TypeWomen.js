import { Form } from "react-bootstrap";

function TypeWomen() {

      const checkboxes = [
            { 
                label: "Dresses",
                type: "dresses",
            },
            {
                  label: "T-shirts",
                  type: "t-shirts",
            },
            {
                  label: "Bodysuits",
                  type: "bodysuits",
            },
            {
                  label: "Tops",
                  type: "Tops",
            },
            {
                  label: "Shirts & Blouses",
                  type: "shirts&blouses",
            },
            {
                  label: "Sweatshirts & Hoodies",
                  type: "sweatshirts&hoodies",
            },
            {
                  label: "Sweaters & Cardigans",
                  type: "sweaters&cardigans",
            },
            {
                  label: "Blazers",
                  type: "blazers",
            },
            {
                  label: "Jackets & Coats",
                  type: "jackets&coats",
            },
            {
                  label: "Suits",
                  type: "suits",
            },
            {
                  label: "Jackets & Coats",
                  type: "jackets&coatsWomen",
            },
            {
                  label: "Trousers",
                  type: "trousers",
            },
            {
                  label: "Jeans",
                  type: "jeans",
            },
            {
                  label: "Skirts",
                  type: "skirts",
            },
            {
                  label: "Shorts & Bermudas",
                  type: "shorts&bermudas",
            },
            {
                  label: "Bikinis & Swimsuits",
                  type: "bikinis&swimsuits",
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
                  <div className="col-md-9 col-12">
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
    
    export default TypeWomen;