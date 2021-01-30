import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../../assets/covax-needle.png";
import "./nav.css";
const NavigationBar = () =>
(
  <Navbar bg="primary" expand="lg">
    <Navbar.Brand as={Link} to="/">
      <img src={Logo} alt="logo" className="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/writeReview">
          Write a review
          </Nav.Link>
        <Nav.Link as={Link} to="/showReviews">
          Show reviews
          </Nav.Link>
        <Nav.Link as={Link} to="/faq">
          FAQ
          </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
