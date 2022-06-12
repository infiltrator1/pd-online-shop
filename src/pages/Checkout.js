import { Row, Col, Form, Alert, Container } from "react-bootstrap";
import CompletedOrderButton from "../components/completed-order/CompletedOrderButton";

function Checkout() {

    return(
        <>
        <Row className="p-3 mx-2">
            
                <h5>Delivery</h5> 
        </Row>          
                   
        <Container>
            <Row className="justify-content-md-center">
            
                <Col className="mx-auto">
                    <Alert variant="success">
                        <div className="fw-bold">Pick a delivery</div>
                        <Form className="mt-4">
                            {['radio'].map((type) => (
                                <div key={type} className="mb-3">
                                    <Form.Check className="mb-3" type={type} id={`check-api-${type}`}>
                                    <Form.Check.Input type={type} />
                                        <Form.Check.Label className="fw-bold">PickupInStore</Form.Check.Label>
                                        <Form.Check.Label className="fw-bold text-success mx-1">FREE</Form.Check.Label>
                                        <div>
                                            <Form.Check.Label>Receive it between Thursday 24 and Friday 25</Form.Check.Label>
                                        </div>
                                    </Form.Check>
                                    <Form.Check className="mb-3" type={type} id={`check-api-${type}`}>
                                        <Form.Check.Input type={type} />
                                        <Form.Check.Label className="fw-bold">Standard delivery</Form.Check.Label>
                                    <Form.Check.Label className="fw-bold text-danger mx-1">10$</Form.Check.Label>
                                    <div>
                                        <Form.Check.Label>Receive it between Wednesday 23 and Friday 25</Form.Check.Label>
                                    </div>       
                            </Form.Check>
                            <Form.Check className="mb-3" type={type} id={`check-api-${type}`}>
                                <Form.Check.Input type={type} />
                                    <Form.Check.Label className="fw-bold">Express home</Form.Check.Label>
                                    <Form.Check.Label className="fw-bold text-danger mx-1">15$</Form.Check.Label>
                                    <div>
                                        <Form.Check.Label>Receive it between Tuesday 22 and Wednesday 23</Form.Check.Label>
                                    </div>
                            </Form.Check>
                            <Form.Check className="mb-3" type={type} id={`check-api-${type}`}>
                                <Form.Check.Input type={type} />
                                    <Form.Check.Label className="fw-bold">Speedy delivery points</Form.Check.Label>
                                    <Form.Check.Label className="fw-bold text-danger mx-1">20$</Form.Check.Label>
                                    <div>
                                        <Form.Check.Label>Receive it between Wednesday 23 and Thursday 24</Form.Check.Label>
                                    </div>
                            </Form.Check>
                        </div>
                    ))}
                </Form>
                </Alert>
            </Col>
            <Col className="mx-auto">
            <Alert variant="success">
                <div className="fw-bold">Select a saved address</div>
                    <Form className="mt-4">
                        {['radio'].map((type) => (
                            <div key={type} className="mb-3">
                                <Form.Check className="mb-3" type={type} id={`check-api-${type}`}>
                                    <Form.Check.Input type={type} />
                                        <Form.Check.Label className="fw-bold">Pavlina Damyanova</Form.Check.Label>
                                        <div>
                                            <Form.Check.Label>city Plovdiv zk.k. Trakiya bl.001</Form.Check.Label>
                                        </div>
                                        <div>
                                            <Form.Check.Label>4000 Plovdiv</Form.Check.Label>
                                        </div>
                                    </Form.Check>
                                    <Form.Check className="mb-3" type={type} id={`check-api-${type}`}>
                                        <Form.Check.Input type={type} />
                                            <Form.Check.Label className="fw-bold">Use a new address</Form.Check.Label>
                                    </Form.Check>
                            </div>
                        ))}
                    </Form>
                    </Alert>
                    
                    <Row className="mt-4">
                        <div className="text-end mt-5">
                            <CompletedOrderButton/>
                        </div>
                    </Row>
                    
                </Col>
            </Row>
        </Container>
            
        </>
    )
}
export default Checkout;