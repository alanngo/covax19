import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { routes } from "../../helper/routes";
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
        {
          routes.filter(r => r.title)
          .map(r => (<Nav.Link key={r.id} as={Link} to={r.path}>{r.title}</Nav.Link>))
        }
      </Nav>

    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
