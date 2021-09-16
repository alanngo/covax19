import PageContainer from "../../components/layout/PageContainer";


import "./about.css";
import { CardDeck, Card, Button } from "react-bootstrap";
import { team } from "../../helper/constants";
const About = () =>
(
    <>

    <div align="center">
        <PageContainer>
            <h2 className="teamTitle">Meet team behind Covax-19</h2>
        </PageContainer>
    </div>

    <div className="whitespace">

    <CardDeck>
    {
        team.map(elem=>
        (
            <Card key={elem.id}>         
            <Card.Img variant="top" src={elem.img} />
            <Card.Body>
                <Card.Title className="name">{elem.name}</Card.Title>
                <Card.Text className="bio">{elem.bio} </Card.Text>
                <Button href={elem.github} className="gitbutton">Github</Button>
                <Button href={elem.linkedin} className="linkedin">Linkedin</Button>
            </Card.Body>
            <Card.Footer className="role">
               {elem.roles}
            </Card.Footer>
            </Card>
        ))
    }
    </CardDeck>

    </div>

    </>
)

export default About