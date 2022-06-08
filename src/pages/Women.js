import WomenClothes from "../components/clothes/WomenClothes";
import FiltersWomen from "../components/filters/FiltersWomen";
import {Col, Accordion, Container, Row} from "react-bootstrap";

function Women() {
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
                                    <FiltersWomen/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
            <WomenClothes/>
        </>
    );
}

export default Women;