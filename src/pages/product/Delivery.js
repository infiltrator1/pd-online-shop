import { useState} from "react";
import { Button, Modal} from "react-bootstrap";
import FormDelivery from "./FormDelivery";


function Delivery() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
        <Button variant="link" onClick={handleShow}>
            Delivery 
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>           
                <Modal.Title>    
                    Delivery     
                </Modal.Title>           
            </Modal.Header>
            <Modal.Body>                
                <FormDelivery/>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
        </>
    );     
}

export default Delivery;