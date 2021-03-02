import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import {  Spinner} from "react-bootstrap";
import "./showreviews.css";

import PageContainer from "../../components/layout/PageContainer";
import ReviewFormCard from '../../components/layout/ReviewFormCard'

const ShowReviews = () => 
{
  const [patients, setPatients] = useState([]);
  let [index, setIndex] = useState(3)
  useEffect(() => 
  {
    const url = "https://covax19.herokuapp.com/";
    axios.get(url).then((res) => setPatients(res.data));
  }, []);

  return (
    <>
    <PageContainer>
      <h1>Read how other people are feeling.</h1>
      <p>
        Headache? Sore body? You may be feeling anxious about your post-vaccine
        symptoms, but you are not alone!
      </p>
      
      {(patients.length<=0?<Spinner animation="border" variant="secondary"/>:
      patients &&patients.slice(0,index).map((patient) => (
          <Fragment key={patient._id}>
            <ReviewFormCard data={patient} />
          </Fragment>
        )))}
      <div align="center">
        {
          (index>=patients.length)?<>end of results</>:<button
          disabled={index>=patients.length}
          onClick=
          {
            () =>
            {
              console.log("show more")
              let tmp = index
              setIndex(tmp+3)
            }
          }>Show More</button>
        }
        
      </div>
    </PageContainer>
    
    </>
  );
};

export default ShowReviews;

// const ReviewFormCard = ({ data }) => (
//   <Container className="reviewContent">
//     <Row>
//       <Col xs={2}>
//         <img className="logotype" src={Covexlogo} alt="Covax-19 Logo" />
//       </Col>

//       <Col className="details" xs={3}>
//         <ul>
//           <li>{data.company}</li>
//           <li>{data.date}</li>
//           <li>{data.location ? data.location.city : ""}</li>
//           <li>{data.age} years old</li>
//           <li>Preexisting Conditions: {(data.conditions? data.conditions.map(e =><Fragment key={e}>{e+" "}</Fragment>):"")}</li>
//           <li>Symptoms: {(data.reactions? data.reactions.map(e =><Fragment key={e}>{e+" "}</Fragment>):"")}</li>
//           <li>ICU: {data.icu}</li>
//         </ul>
//       </Col>

//       <Col>
//         <p className="comment">
//           {data.comments}
//         </p>
//       </Col>
//       <Col>
//         <p className="location">
//         {data.city} {data.region} {data.country}
//         </p>
//       </Col>
//     </Row>
//   </Container>
// );


