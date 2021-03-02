
import React, {Fragment} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Covexlogo from "../../assets/covex_logo.png";
import "./reviewForm.css"
const ReviewFormCard = ({ data }) => 
{
    return (
        <Container className="reviewContent">
            <Row>
            <Col xs={2}>
                <img className="logotype" src={Covexlogo} alt="Covax-19 Logo" />
            </Col>

            <Col className="details" xs={3}>
                <ul>
                <li>{data.company}</li>
                <li>{data.date}</li>
                <li>{data.location ? data.location.city : ""}</li>
                <li>{data.age} years old</li>
                <li>Preexisting Conditions: {(data.conditions? data.conditions.map(e =><Fragment key={e}>{e+" "}</Fragment>):"")}</li>
                <li>Symptoms: {(data.reactions? data.reactions.map(e =><Fragment key={e}>{e+" "}</Fragment>):"")}</li>
                <li>ICU: {data.icu}</li>
                </ul>
            </Col>

            <Col>
                <p className="comment">
                {data.comments}
                </p>
            </Col>
            <Col>
                <p className="location">
                {data.city} {data.region} {data.country}
                </p>
            </Col>
            </Row>
        </Container>
    )
}

export default ReviewFormCard;
