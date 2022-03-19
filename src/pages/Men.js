import SearchNavBarImage from "../components/navbar/image/SearchNavBarImage";
import MenClothes from "../components/clothes/MenClothes";
import FiltersMen from "../components/filters/FiltersMen";
import { Col, Accordion } from "react-bootstrap";

function Men() {
    return (
      <>
        <SearchNavBarImage/>
        
        <Col>
           <Accordion className="bg-light  mt-2">
             <Accordion.Item eventKey="0">
               <Accordion.Header>
                 <div className="fw-bold">Filters</div>   
               </Accordion.Header>
               <Accordion.Body>
                   <FiltersMen/>
               </Accordion.Body>
             </Accordion.Item>
            </Accordion>
        </Col>
        <Col>
             <MenClothes/>
             <MenClothes/>
             <MenClothes/>
        </Col>  
      </>        
    );
  }
  
export default Men;