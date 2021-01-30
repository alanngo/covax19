
import axios from "axios";
import { Fragment, useEffect, useState} from "react";

const ShowReviews = () => 
{
  let [patients, setPatients] = useState([])
  useEffect(() => 
  {
    let url ="https://covax19.herokuapp.com/"
    axios.get(url)
    .then(res => 
    {
      setPatients(res.data)
      console.log(patients)
    })
  });
  return (
    <Fragment>
      <h2>Show reviews</h2>
      {
      patients.map(elem =>
      (
        <h2>{elem._id}</h2>
      ))
      }
    </Fragment>
  );
};

export default ShowReviews;