import { Col, Row, Form, Button } from "react-bootstrap";
import SizeButton from "./product/SizeButton";
import Delivery from "./product/Delivery";
import Returns from "./product/Returns";
import CarouselProduct from "./product/CarouselProduct";
import Availability from "./product/Availability";
import OrderButton from "../components/order/OrderButton";

function Product() {

  const size = ['34', '36', '38', '40', '42', '44'];

    return (
      <> 
        <Row className="mt-5 pt-1">
         <CarouselProduct/>

          <Col>
            <h4 className="fw-bold mt-5">Wide-leg 5-pocket utility trousers</h4>
            <div className="text-muted">Ref 0618/019/800</div>
            <h4>49,95$</h4>

            <div>
              <Form.Group 
                className="mb-3" 
                controlId="filterForm.ControlCheckboxes">
                  <Form.Label>
                      <h6 className="mt-4">Select size</h6>
                  </Form.Label>
  
                  <Form className="d-flex">
                    {size.map((checkbox) => (
                      <div key={`inline-${checkbox}`}>
                        <Form.Check
                            inline
                            label={checkbox}
                            name={checkbox}
                            id={`inline-${checkbox}-1`}
                        />
                    </div>
                  ))}
                    </Form>
                </Form.Group>
            </div>
            <div>      
                <SizeButton/>    
            </div>
            <OrderButton/>
            <div className="mt-5 pt-5" >
              <Delivery/>                  
              <Returns/>        
              <Availability/>               
            </div>
          </Col>
        </Row>
      </>        
    );
  }
  
export default Product;