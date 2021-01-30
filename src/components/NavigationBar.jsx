import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../assets/logotype.png";
import "./nav.css";
const NavigationBar = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="/landingpage">
        <img src={Logo} alt="logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/writeReview">Write a review</Nav.Link>
          <Nav.Link href="/showReviews">Show reviews</Nav.Link>
          <Nav.Link href="/showReviews">FAQ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavigationBar;
