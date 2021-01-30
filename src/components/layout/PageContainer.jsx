import { Container } from "react-bootstrap";
import NavigationBar from "../navbar/NavigationBar";

const PageContainer = ({ children }) => (
  <div>
    <NavigationBar />
    <Container fluid="lg">{children}</Container>
  </div>
);

export default PageContainer;
