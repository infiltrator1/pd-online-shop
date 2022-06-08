import { Col, Row, Form, Button } from "react-bootstrap";

function FormAvailability() {

    return(
        <>         
        <Form>
            <Row className="mb-4">
                <Col md={10}>
                    <Form.Group>
                        <Form.Label className="fw-bold">What size are you looking for?</Form.Label>
                        <div className="mt-2">
                            <Button 
                                className="rounded-circle me-2" 
                                variant="light">
                                    34
                            </Button>
                            <Button 
                                className="rounded-circle me-2" 
                                variant="light">
                                    36
                            </Button>
                            <Button 
                                className="rounded-circle me-2" 
                                variant="light">
                                    38
                            </Button> 
                            <Button
                                className="rounded-circle me-2" 
                                variant="light">
                                    40
                            </Button> 
                            <Button 
                                className="rounded-circle me-2" 
                                variant="light">
                                    42
                            </Button>
                            <Button 
                                className="rounded-circle me-2" 
                                variant="light">
                                    44
                            </Button>    
                        </div>
                    </Form.Group>
                </Col> 
            </Row>

            <Row className="">
                <Col md={10}>
                    <Form.Group>
                        <Form.Label className="fw-bold text-success">It's available</Form.Label>
                            <div>
                                
                            </div>
                    </Form.Group>
                </Col>                
               
            </Row>
    
               
                  
        </Form>
        </>
    );
}

export default FormAvailability;