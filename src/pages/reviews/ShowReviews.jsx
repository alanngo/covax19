import axios from "axios";
import { useEffect, useState } from "react";
import PageContainer from "../../components/layout/PageContainer";

const ShowReviews = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    const url = "https://covax19.herokuapp.com/";
    axios.get(url).then((res) => {
      setPatients(res.data);
      console.log(patients);
    });
  });
  return (
    <PageContainer>
      <h2>Show reviews</h2>
      {patients.map((elem) => (
        <h2 key={elem.id}>{elem._id}</h2>
      ))}
    </PageContainer>
  );
};

export default ShowReviews;
