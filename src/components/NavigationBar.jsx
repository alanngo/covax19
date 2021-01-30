import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../assets/logotype.png";
import "./nav.css";
const NavigationBar = () => {
  return (
    <Navbar bg="primary" expand="xl">
      <Navbar.Brand href="#home">
        <img src={Logo} alt="logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ marginLeft: "auto" }}>
          <Nav.Link href="#deets">Write a review</Nav.Link>
          <Nav.Link href="#deets">Show Reviews</Nav.Link>
          <Nav.Link href="#deets">FAQ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavigationBar;
