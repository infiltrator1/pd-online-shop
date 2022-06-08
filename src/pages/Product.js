import { Col, Row, Form, Button, CarouselItem } from "react-bootstrap";
import SizeButton from "./product/SizeButton";
import Delivery from "./product/Delivery";
import Returns from "./product/Returns";
import CarouselProduct from "./product/CarouselProduct";
import Availability from "./product/Availability";
import OrderButton from "../components/order/OrderButton";
import {useParams} from "react-router-dom";
import {useGetCloth} from "../graphql/useRequest"
//import { Carousel } from "bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { setListView } from "../redux/reducers"

function Product() {


  const { id } = useParams();
  const { data } = useGetCloth(id);

  const reduxListView = useSelector((state) => {
    //debugger
    return state.data
  })
  
  const dispatch = useDispatch()

  //TODO
  // Add logic for women List
  // Add logic for kids list
  // add cloth title
  // add cloth description

    return (
      <> 
        {data?.clothesOne && <Row className="mt-5 pt-1">

          <CarouselProduct/>

          <Col>
            <h4 className="fw-bold mt-5">{data.clothesOne.name}</h4>
            <div className="text-muted">{data.clothesOne.refNumber}</div>
            <h4>{data.clothesOne.price}</h4>

            <div>
              <Form.Group 
                className="mb-3" 
                controlId="filterForm.ControlCheckboxes">
                  <Form.Label>
                      <h6 className="mt-4">Select size</h6>
                  </Form.Label>
  
                  <Form className="d-flex">
                    {data.clothesOne.size.map((checkbox) => (
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
        </Row>}
      </>        
    );
  }
  
export default Product;