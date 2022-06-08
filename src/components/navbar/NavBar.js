import { 
    Navbar, 
    Container, 
    Nav,
} from "react-bootstrap";

import {Link} from 'react-router-dom';
import ShopIcon from "./ShopIcon";
import Login from "./buttons/Login";

function NavBar() {
    return (
        <Navbar className="bg-light border-bottom" fixed="top">
           <Container>
               <Navbar.Brand href="#home">P&D</Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto" navbarScroll>
                       <Nav.Link as={Link} to="/">Home</Nav.Link>
                       <Nav.Link as={Link} to="/women">Women</Nav.Link>
                       <Nav.Link as={Link} to="/men">Men</Nav.Link>
                       <Nav.Link as={Link} to="/kids">Kids</Nav.Link>
                    </Nav>
                    <Nav>
                        <Login/>
                       <Nav.Link as={Link} to="shoplist"> 
                        <ShopIcon/>
                       </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>       
    )
}

export default  NavBar;