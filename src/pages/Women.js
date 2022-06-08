import SearchNavBarImage from "../components/navbar/image/SearchNavBarImage";
import WomenClothes from "../components/clothes/WomenClothes";
import FiltersWomen from "../components/filters/FiltersWomen";
import { Col, Accordion } from "react-bootstrap";

function Women() {
    return (
      <>
      <SearchNavBarImage/>
    
      <Col>
         <Accordion className="bg-light mt-2">
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
      
           <WomenClothes/>
      
    </>     
    );
  }
  
export default Women;