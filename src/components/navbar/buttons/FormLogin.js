import { Form } from "react-bootstrap";

function ModalLogin() {

    return(
        <Form>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Continue session" />
            </Form.Group>    
        </Form>
    );
}

export default ModalLogin;