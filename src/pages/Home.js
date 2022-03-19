import FeaturedImage from "../components/navbar/image/FeaturedImage";
import { Container, Row, Col } from "react-bootstrap";
import Information from "./home/Information";
import FeaturedProducts from "./home/FeaturedProducts";


function Home() {

    return (
      <>
      <FeaturedImage/>

      <Information/>
    
     <Container>
       <Row>
         <Col>
           <h1 className="text-center mt-4">Featured products</h1>
         </Col>
       </Row>
       <FeaturedProducts/>
      </Container>
      </> 
    );
  }
  
export default Home;