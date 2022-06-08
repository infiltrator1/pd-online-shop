import KidsClothes from "../components/clothes/KidsClothes";
import FiltersKids from "../components/filters/FiltersKids";
import { Col, Accordion } from "react-bootstrap";

function Kids() {
    return (
      <>
      <Col>
         <Accordion className="bg-light mt-2">
           <Accordion.Item eventKey="0">
             <Accordion.Header>
                <div className="fw-bold">Filters</div>
             </Accordion.Header>
             <Accordion.Body>
                 <FiltersKids/>
             </Accordion.Body>
           </Accordion.Item>
          </Accordion>
      </Col>
      
           <KidsClothes/>
      
    </>     
    );
  }
  
export default Kids;