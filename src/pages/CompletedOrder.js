import {Row, Col, Alert, Container} from "react-bootstrap";


function CompletedOrder() {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col className="mx-auto">
                        <Alert variant="secondary"
                               className="mt-2 p-5 text-center">
                            <Alert.Heading className="fw-bold">Completed Order</Alert.Heading>
                            <p>
                                ♥ Thank you for choosing us! ♥
                                <div>
                                    The order will be processed. Expect a call!
                                </div>
                            </p>
                        </Alert>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CompletedOrder;