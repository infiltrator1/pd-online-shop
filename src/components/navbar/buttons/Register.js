import { useState} from "react";
import { Button, Modal, Row } from "react-bootstrap";
import FormRegister from "./FormRegister";

function Register() {
    
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
        <Button variant="link" onClick={handleShow}>
            Don’t have an account? Register
        </Button>
    
        <Modal 
            show={show}     
            onHide={handleClose}
            dialogClassName="modal-50w"
            >
            <Modal.Header closeButton>           
                    <Modal.Title>    
                        Create account          
                    </Modal.Title>           
            </Modal.Header>
            <Modal.Body>
                <FormRegister/>
            </Modal.Body>
            <Modal.Footer className="justify-content-md-center">
                <Row>
                    <Button variant="secondary" onClick={handleClose}>
                       Create account
                    </Button>
                </Row>
            </Modal.Footer>
        </Modal>
        </>
    );     
}

export default Register;