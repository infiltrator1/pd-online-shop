import { useState} from "react";
import { Button, Modal} from "react-bootstrap";
import FormReturns from "./FormReturns";
//import Register from "./Register";

function Delivery() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
        <Button variant="link" onClick={handleShow}>
            Returns 
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>           
                    <Modal.Title>    
                        Returns     
                    </Modal.Title>           
            </Modal.Header>
            <Modal.Body>               
                <FormReturns/>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
        </>
    );     
}

export default Delivery;