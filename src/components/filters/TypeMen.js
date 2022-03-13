import { Form } from "react-bootstrap";

function TypeMen() {
    
    return(
        <Form.Group 
            className="mb-3" 
            controlId="filterForm.ControlCheckboxes">
        <Form.Label>
            <h6>Type</h6>
        </Form.Label>
            <Form className="">
                {['checkbox'].map((type) => (
                    <>
                    <div key={`inline-${type}`}>
                        <Form.Check
                              inline
                              label="Jackets & Coats"
                              name="jackets&coats"
                              type={type}
                              id={`inline-${type}-1`}
                        />
                        <Form.Check
                              inline
                              label="Sweatshirts"
                              name="sweatshirts"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                        <Form.Check
                              inline
                              label="Sweaters & Cardigans"
                              name="sweaters&cardigans"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                        <Form.Check
                              inline
                              label="Vests"
                              name="vests"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                        <Form.Check
                              inline
                              label="Shirts & Blouses "
                              name="shirts&blouses"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                        <Form.Check
                              inline
                              label="T-shirts"
                              name="t-shirts"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                        </div>
                        <div key={`inline-${type}`}>
                        <Form.Check
                              inline
                              label="Shirts"
                              name="shirts"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                        
                        <Form.Check
                              inline
                              label="Trousers"
                              name="trousers"
                              type={type}
                              id={`inline-${type}-2`}
                        />
            
                        <Form.Check
                              inline
                              label="Jeans"
                              name="jeans"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                        <Form.Check
                              inline
                              label="Shorts"
                              name="shorts"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                        <Form.Check
                              inline
                              label="Swimwear"
                              name="swimwear"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                    </div>
                    </>
                ))}
            </Form>
    </Form.Group>  
    )
}

export default TypeMen;