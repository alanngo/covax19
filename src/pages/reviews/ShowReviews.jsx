import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import 
{ 
  Spinner, 
  // Dropdown, 
  // ButtonGroup, 
  // DropdownButton
} from "react-bootstrap";
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
          (index>=patients.length)?<></>:
          <button
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


