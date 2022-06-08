import { useState} from "react";
import { Button, Modal} from "react-bootstrap";
import FormAvailability from "./FormAvailability";


function Availability() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
        <Button variant="link" onClick={handleShow}>
            Availability 
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>           
                <Modal.Title>    
                    In-store availability     
                </Modal.Title>           
            </Modal.Header>
            <Modal.Body>                
                <FormAvailability/>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
        </>
    );     
}

export default Availability;