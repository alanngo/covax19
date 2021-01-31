import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./showreviews.css";
import Covexlogo from "../../assets/covex_logo.png";
import PageContainer from "../../components/layout/PageContainer";

const ShowReviews = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    const url = "https://covax19.herokuapp.com/";
    axios.get(url).then((res) => {
      setPatients(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <PageContainer>
      <h2>Read how other people are feeling.</h2>
      <p>
        Headache? Sore body? You may be feeling anxious about your post-vaccine
        symptoms, but you are not alone!
      </p>
      {patients &&
        patients.map((patient) => (
          <Fragment key={patient._id}>
            <ReviewFormCard data={patient} />
          </Fragment>
        ))}
    </PageContainer>
  );
};

export default ShowReviews;

const ReviewFormCard = ({ data }) => (
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
          <li>Preexisting Conditions: {(data.conditions? data.conditions.map(e =>e+" "):"")}</li>
          <li>Symptoms: {(data.conditions? data.reactions.map(e =>e+" "):"")}</li>
        </ul>
      </Col>

      <Col>
        <p className="comment">
          {data.comments}
        </p>
      </Col>
    </Row>
  </Container>
);

// const ReviewFormCard = ({ data }) => (
//   <Container className="reviewContent">
//     <Row>
//       <Col xs={2}>
//         <img className="logotype" src={Covexlogo} alt="Covax-19 Logo" />
//       </Col>

//       <Col className="details" xs={3}>
//         <ul>
//           <li>Moderna</li>
//           <li>January 10, 2020</li>
//           <li>San Francisco, USA</li>
//           <li>43 years old</li>
//           <li>Diabetes, ICU visit</li>
//           <li>Symptoms: Headaches, Fever, Muscle Pain</li>
//         </ul>
//       </Col>

//       <Col>
//         <p className="comment">
//           “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur!”
//         </p>
//       </Col>
//     </Row>
//   </Container>
// );
