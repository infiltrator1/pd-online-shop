import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRulerHorizontal } from '@fortawesome/free-solid-svg-icons';

import { useState} from "react";
import { Button, Modal} from "react-bootstrap";
import SizeTable from "./SizeTable";


function SizeButton() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
        <Button variant="link" onClick={handleShow}>
        <FontAwesomeIcon
            className="align-self-center me-1"
            size="lg"
            icon={faRulerHorizontal} />
            Size help 
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>           
                <Modal.Title>    
                    Size help     
                </Modal.Title>           
            </Modal.Header>
            <Modal.Body>                
                <SizeTable/>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
        </>
    );     
}

export default SizeButton;