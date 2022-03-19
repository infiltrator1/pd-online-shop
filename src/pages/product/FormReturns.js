import { Col, Row, Form } from "react-bootstrap";

function FormReturns() {

    return(
        <>     
        <Form>
            <Row className="mb-4">
                <Col md={11}>
                    <Form.Group>
                        <Form.Label className="fw-bold">Return</Form.Label>
                            <div className="text-muted">
                                You have a return period of 30 days from the shipping date. 
                            </div>
                    </Form.Group>
                </Col> 
            </Row>
            <Row>
                <Col md={10}>
                    <Form.Group>
                        <Form.Label className="fw-bold">Returns in store</Form.Label>
                            <div className="text-muted">
                                You can return items to any P&D store in the country where the purchase was made.
                            </div>              
                    </Form.Group>
                </Col> 
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="fw-bold text-success">FREE</Form.Label>             
                </Form.Group>
            </Row>          
        </Form>
        </>
    );
}

export default FormReturns;