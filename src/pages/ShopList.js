import { Container, Row, Col, Alert } from "react-bootstrap";

function ShopList() {
    return (
      <>
      <Container>
          <Row className="justify-content-md-center">
              <Col className="mx-auto">
                  <Alert variant="secondary" 
                         className="mt-2 p-5 text-center">
                      <Alert.Heading>Empty basket</Alert.Heading>
                          <p>
                              Your basket is still empty, discover everything we’ve got for you
                          </p>
                    </Alert>
                </Col>
            </Row>
      </Container>
      </>
    );
  }
  
export default ShopList;