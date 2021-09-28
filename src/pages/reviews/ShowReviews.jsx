import axios from "axios";
import {  useEffect, useState } from "react";
import 
{ 
  Spinner, 
  Dropdown, 
  // ButtonGroup, 
  // DropdownButton
} from "react-bootstrap";
import "./showreviews.css";
import PageContainer from "../../components/layout/PageContainer";
import ReviewFormCard from '../../components/layout/ReviewFormCard'
import { companies, url } from "../../helper/constants";

const ShowReviews = () => 
{
  const [patients, setPatients] = useState([])
  const [filtered, setFiltered]= useState([])
  const [index, setIndex] = useState(3)
  useEffect(() => 
  {
    axios.get(`${url}/reviews`).then((res) =>{
      setPatients(res.data)
      setFiltered(res.data)
    } );
  }, []);

  return (
    <>
    <PageContainer>

      <h1>Read how other people are feeling.</h1>
      <p>
        Headache? Sore body? You may be feeling anxious about your post-vaccine
        symptoms, but you are not alone!
      </p>
      <Dropdown>
  <Dropdown.Toggle variant="dark" id="dropdown-basic">
    Filter By Company
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onSelect={() =>setFiltered(patients)}>All</Dropdown.Item>
  <Dropdown.Divider/>
    {
      companies.map(company =>
      (
        <Dropdown.Item
        key={company} 
        onSelect={() =>setFiltered(patients.filter(p => p.company===company))}>
          {company}
        </Dropdown.Item>
      ))
    }
  </Dropdown.Menu>
</Dropdown>  
    
{(patients.length<=0?<Spinner animation="border" variant="secondary"/>:
      patients &&filtered.slice(0,index).map((patient) => 
      (
          <ReviewFormCard data={patient} key={patient._id}/>
      )))}
      <div align="center">
        {
          (index>=filtered.length)?<></>:
          <button
          disabled={index>=filtered.length}
          onClick={() =>setIndex(index+3)}>Show More</button>
        }
        {
          (patients.length>0 && filtered.length<=0)?<>no reviews available</>:<></>
        }
        
      </div>
    </PageContainer>
    
    </>
  );
};

export default ShowReviews;


