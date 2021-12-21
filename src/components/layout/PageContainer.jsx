import { Container } from "react-bootstrap";
import NavigationBar from "../navbar/NavigationBar";

const PageContainer = ({ children }) => 
(
  <>
    <NavigationBar />
    <Container fluid="lg">{children}</Container>
  </>
);

export default PageContainer;
