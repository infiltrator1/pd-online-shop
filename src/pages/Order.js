import { Col, Row, Image, CloseButton, Alert } from "react-bootstrap";
import SearchNavBarImage from "../components/navbar/image/SearchNavBarImage";
import CheckoutButton from "../components/checkout/CheckoutButton";

function Order() {

    return (
      <> 
      <SearchNavBarImage/>

      <h5 className="mt-3 mx-2">My basket</h5>
      
      <Alert variant="light">
            <Row>
            
                <Col md={2}>
                    <Image width="100%" 
                           src="https://static.bershka.net/4/photos2/2022/V/0/1/p/5048/665/621/5048665621_2_3_3.jpg?t=1643297437581" />               
                </Col>  
                <Col>
                    <h5 className="fw-bold">39,95$</h5>
                    <div>Slim comfort fit mom jeans</div>
                    <div className="text-muted mt-3">36</div>
                </Col>
                <Col md={1} className="text-end">
                    <CloseButton />
                </Col>
                <Col md={2}>
                <Alert variant="secondary">
                        <Alert.Heading>Total</Alert.Heading>
                            <hr />
                            <p className="mb-0">
                                89,90$
                            </p>
                            <div className="text-start mt-1">
                            <CheckoutButton/>
                            </div>
                            
                    </Alert>
                    
                </Col>
                
            </Row>
            </Alert>
        

        <Alert variant="light">
            <Row>
                <Col md={2}>
                    <Image width="100%"
                           src="https://static.bershka.net/4/photos2/2022/V/0/2/p/0618/019/800/0618019800_2_3_3.jpg?t=1640105351049" />               
                </Col>  
                <Col>
                    <h5 className="fw-bold">49,95$</h5>
                    <div>Wide-leg 5-pocket utility trousers</div>
                    <div className="text-muted mt-3">38</div>
                </Col>
                <Col md={1} className="text-end">
                    <CloseButton />
                </Col>
            </Row>
        </Alert>
      </>        
    );
  }
  
export default Order;