import { Form } from "react-bootstrap";

function TypeWomen() {
    
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
                              label="Dresses"
                              name="dresses"
                              type={type}
                              id={`inline-${type}-1`}
                        />
                        <Form.Check
                              inline
                              label="T-shirts"
                              name="t-shirts"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                        <Form.Check
                              inline
                              label="Bodysuits"
                              name="bodysuits"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                        <Form.Check
                              inline
                              label="Tops"
                              name="tops"
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
                              label="Sweatshirts & Hoodies"
                              name="sweatshirts&hoodies"
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
                              label="Blazers"
                              name="blazers"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                        </div>
                        
                        <div key={`inline-${type}`}>           
                        <Form.Check
                              inline
                              label="Jackets & Coats"
                              name="jackets&coats"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                        <Form.Check
                              inline
                              label="Suits"
                              name="suits"
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
                              label="Skirts"
                              name="skirts"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                        <Form.Check
                              inline
                              label="Shorts & Bermudas"
                              name="shorts&bermudas"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                        <Form.Check
                              inline
                              label="Bikinis & Swimsuits"
                              name="bikinis&swimsuit"
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

export default TypeWomen;