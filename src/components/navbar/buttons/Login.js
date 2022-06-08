import { useState} from "react";
import { Button, Modal, Row } from "react-bootstrap";
import FormLogin from "./FormLogin";
import Register from "./Register";

function Login() {
    
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
        <Button variant="light" onClick={handleShow}>
            Login 
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>           
                    <Modal.Title>    
                        Login or create an account     
                    </Modal.Title>           
            </Modal.Header>
            <Modal.Body>
                <FormLogin/>
            </Modal.Body>
            <Modal.Footer className="justify-content-md-center">
                <Row>
                <Button variant="secondary" onClick={handleClose}>
                       Log in
                    </Button>
                    <Register/>
                </Row>
            </Modal.Footer>
        </Modal>
        </>
    );     
}

export default Login;