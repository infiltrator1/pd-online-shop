import { Col, Row, Form } from "react-bootstrap";

function FormAvailability() {

    return(
        <>         
        <Form>
            <Row className="mb-4">
                <Col md={10}>
                    <Form.Group>
                        <Form.Label className="fw-bold">Delivery</Form.Label>
                            <div className="text-muted">
                                In the store of your choice in 4-6 working days.
                            </div>
                    </Form.Group>
                </Col> 
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="text-success fw-bold">Free</Form.Label>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Col md={10}>
                    <Form.Group>
                        <Form.Label className="fw-bold">Standard</Form.Label>
                            <div className="text-muted">
                                In 3-5 working days.
                            </div>
                    </Form.Group>
                </Col>                
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="fw-bold">10$</Form.Label>                
                </Form.Group>
            </Row>
            <Row className="">
                <Col md={10}>
                    <Form.Group>
                        <Form.Label className="fw-bold">Express</Form.Label>
                            <div className="text-muted">
                                In 2-3 working days.
                            </div>              
                    </Form.Group>
                </Col> 
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="fw-bold">15$</Form.Label>                
                </Form.Group>
            </Row>           
        </Form>
        </>
    );
}

export default FormAvailability;