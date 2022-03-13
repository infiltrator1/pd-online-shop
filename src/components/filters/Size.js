import { Form } from "react-bootstrap";

function Size() {
    
    return(
        <Form.Group 
            className="mb-3" 
            controlId="filterForm.ControlCheckboxes">
        <Form.Label>
            <h6>Size</h6>
        </Form.Label>
            <Form>
                {['checkbox'].map((type) => (
                    <div key={`inline-${type}`}>
                        <Form.Check
                              inline
                              label="XXS"
                              name="xxs"
                              type={type}
                              id={`inline-${type}-1`}
                        />
                        <Form.Check
                              inline
                              label="XS"
                              name="xs"
                              type={type}
                              id={`inline-${type}-2`}
                        />
                        <Form.Check
                              inline
                              label="S"
                              name="s"
                              type={type}
                              id={`inline-${type}-3`}
                        />
                        <Form.Check
                              inline
                              label="M"
                              name="m"
                              type={type}
                              id={`inline-${type}-4`}
                        />
                        <Form.Check
                              inline
                              label="L"
                              name="l"
                              type={type}
                              id={`inline-${type}-5`}
                        />
                        <Form.Check
                              inline
                              label="XL"
                              name="xl"
                              type={type}
                              id={`inline-${type}-6`}
                        />
                        <Form.Check
                              inline
                              label="XXL"
                              name="xxl"
                              type={type}
                              id={`inline-${type}-7`}
                        />
                    </div>
                ))}
            </Form>
    </Form.Group>
    )
}

export default Size;