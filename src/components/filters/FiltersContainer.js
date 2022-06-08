import {Col, Accordion, Container, Row} from "react-bootstrap";

function FiltersContainer({children}) {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Accordion className="bg-light mt-5">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <div className="fw-bold">Filters</div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    {children}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default FiltersContainer;