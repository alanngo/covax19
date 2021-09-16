
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Covexlogo from "../../assets/covex_logo.png";
import { enumerate } from '../../helper/functions';
import "./reviewForm.css"

const ReviewFormCard = ({ data }) =>  
(
        <div className="reviewContent">
            <Row>
            <Col xs={2}>
                <img className="logotype" src={Covexlogo} alt="Covax-19 Logo" />
            </Col>

            <Col className="details" xs={3}>
                <ul>
                <li>{data.company}</li>
                <li>{data.date}</li>
                <li>{data.location ? data.location.city : ""}</li>
                <li>{data.age? `${data.age} years old`:""}</li>
                <li>Preexisting Conditions: {(enumerate(data.conditions, `😵`))}</li>
                <li>Symptoms: {enumerate(data.reactions, `💉`)}</li>
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
        </div>
)
export default ReviewFormCard;
