import SearchNavBarImage from "../components/navbar/image/SearchNavBarImage";
import { Container, Row, Col, Alert } from "react-bootstrap";
import ShopListButton from "../components/shop-list/ShopListButton";

function ShopList() {
    return (
      <>
      <SearchNavBarImage/>

      <Container>
          <Row className="justify-content-md-center">
              <Col className="mx-auto">
                  <Alert variant="secondary" 
                         className="mt-2 p-5 text-center">
                      <Alert.Heading>Empty basket</Alert.Heading>
                          <p>
                              Your basket is still empty, discover everything we’ve got for you
                          </p>
                          <ShopListButton/>
                    </Alert>
                </Col>
            </Row>
      </Container>
      </>
    );
  }
  
export default ShopList;