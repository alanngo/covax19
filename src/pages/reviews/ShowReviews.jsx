import axios from "axios";
import { useEffect, useState, useReducer } from "react";
import { indexReducer } from "./reducer"
import { Spinner, Dropdown } from "react-bootstrap";
import "./showreviews.css";
import PageContainer from "../../components/layout/PageContainer";
import ReviewFormCard from '../../components/layout/ReviewFormCard'
import { companies, url } from "../../helper/constants";
import CompaniesDropdown from "../../components/dropdown/CompaniesDropdown";
import { INC } from "./action";
import { RenderIf } from "@alanngo/custom-components/dist"
const ShowReviews = () => {
  const [index, dispatch] = useReducer(indexReducer, 3)

  const [filtered, setFiltered] = useState([])
  const [patients, setPatients] = useState([])
  const [currentCompany, setCurrentCompany] = useState("Filter By Company")

  useEffect(() => {
    axios.get(`${url}/reviews`).then((res) => {
      setPatients(res.data)
      setFiltered(res.data)
    });
  }, []);

  const resetCompanies = () => {
    setFiltered(patients)
    setCurrentCompany("Filter By Company")
  }
  return (
    <PageContainer>
      <h1>Read how other people are feeling.</h1>
      <p>
        Headache? Sore body? You may be feeling anxious about your post-vaccine
        symptoms, but you are not alone!
      </p>
      <CompaniesDropdown
        title={currentCompany}
        allSelect={resetCompanies}>
        {
          companies.map(company =>
          (
            <Dropdown.Item
              key={company}
              onSelect={() => {
                setFiltered(patients.filter(p => p.company === company))
                setCurrentCompany(company)
              }}>
              {company}
            </Dropdown.Item>
          ))
        }
      </CompaniesDropdown>
      <RenderIf
        condition={patients.length > 0}
        fallback={<Spinner animation="border" variant="secondary" />}>
        {
          patients && filtered.slice(0, index).map((patient) =>
            (<ReviewFormCard data={patient} key={patient._id} />))
        }
      </RenderIf>

      <div align="center">
        <RenderIf condition={index < filtered.length}>
          <button
            disabled={index >= filtered.length}
            onClick={() => dispatch(INC)}>Show More
          </button>
        </RenderIf>

        <RenderIf condition={patients.length > 0 && filtered.length <= 0}>no reviews available for {currentCompany}</RenderIf>
      </div>
    </PageContainer >
  );
};

export default ShowReviews;


