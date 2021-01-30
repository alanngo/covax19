import { Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <NavigationBar />
      <Container>
        <LandingPage />
      </Container>
    </>
  );
}

export default App;
