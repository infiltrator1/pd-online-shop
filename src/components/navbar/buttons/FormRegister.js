import { Form, Row, Col } from "react-bootstrap";

function FormRegister() {

    return(
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>First Name & Last Name</Form.Label>
                <Form.Control placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="I have been able to read and understand the information on the use of
                                                    my personal data explained in the Privacy Policy" />
                <Form.Check type="checkbox" label="I want to receive news and customised commercial communications from of 
                                                    P&D via email and other means" />
            </Form.Group>  
        </Form>
    );
}
export default FormRegister;