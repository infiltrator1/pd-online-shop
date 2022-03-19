import { CardGroup, Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShirt, 
  faShieldBlank, 
  faTruckFast 
} from '@fortawesome/free-solid-svg-icons';


function Information() {

    return(
        <>
        <CardGroup className="text-center mt-2">
        <Card>
           <Card.Header>
               <FontAwesomeIcon
                 className="mx-auto"
                 size="xl"
                 icon={faShirt} />
           </Card.Header>
           <Card.Body>
             <Card.Title>QUALITY MATERIALS</Card.Title>
             <Card.Subtitle className="mb-2 text-muted">
               Guarantee 100% polyurethane and 100% polyester
               </Card.Subtitle>
           </Card.Body>
           <Card.Footer></Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <FontAwesomeIcon
              className="mx-auto"
              size="xl"
              icon={faTruckFast} />
          </Card.Header>
          <Card.Body>
            <Card.Title>FREE SHIPPING</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              We free shipping for all morders over 199$
            </Card.Subtitle>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <FontAwesomeIcon
              className="mx-auto"
              size="xl"
              icon={faShieldBlank} />
          </Card.Header>
          <Card.Body>
            <Card.Title>SECURE PAYMENT</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Guarantee 100% secure payment online on our website
            </Card.Subtitle>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
     </CardGroup>
     
     </>
    );
}

export default Information;