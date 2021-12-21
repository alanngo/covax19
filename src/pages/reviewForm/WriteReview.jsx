import { useState, useEffect, useReducer } from "react";
import { Button, Form, Col, Spinner } from "react-bootstrap";
import "./writereview.css";
import PageContainer from "../../components/layout/PageContainer";
import axios from "axios";
import { companies, url, locationUrl } from "../../helper/constants";
import { invalidAge, invalidDate } from "../../helper/functions";
import { useHistory } from "react-router-dom";
import defaultReview from "../../schema/review";
import { reviewReducer } from "./reducer";
import { AGE, EMAIL, DATE, COUNTRY, REGION, CITY, CONDITIONS, COMPANY, ICU, REACTIONS, COMMENTS } from "./action";
import { RenderIf } from "@alanngo/custom-components/dist"

const WriteReview = () => // wirte review 
{
  // use reducer
  const [review, dispatch] = useReducer(reviewReducer, defaultReview)

  // use state

  const [authToken, setAuthToken] = useState("")   // get auth token

  // fetch location
  const [countries, setCountries] = useState([])
  const [currentCountry, setCurrentCountry] = useState("")
  const [regions, setRegions] = useState([])
  const [currentRegion, setCurrentRegion] = useState("")
  const [cities, setCities] = useState([])

  const [loaded, setLoaded] = useState(false)   // connecting to backend


  // use history
  const history = useHistory()

  // use effect
  useEffect(() => axios.get(`${url}/`).then(({ data }) => setLoaded(data.loaded)), [])

  useEffect(() => {
    const authHeaders = {
      headers: {
        "api-token": process.env.REACT_APP_LOCATION_API_TOKEN,
        "user-email": process.env.REACT_APP_LOCATION_API_EMAIL
      }
    }
    const source = axios.CancelToken.source()
    axios.get(`${locationUrl}/getaccesstoken`, authHeaders).then(({ data }) => setAuthToken(data.auth_token)).then(() => {
      const locationHeaders =
      {
        headers: { "Authorization": `Bearer ${authToken}` }
      }
      axios.get(`${locationUrl}/countries`, locationHeaders).then(({ data }) => setCountries(data)).catch(() => console.log("refetching countries"))
      axios.get(`${locationUrl}/states/${currentCountry}`, locationHeaders).then(({ data }) => setRegions(data)).catch(() => console.log("refetching states"))
      axios.get(`${locationUrl}/cities/${currentRegion}`, locationHeaders).then(({ data }) => setCities(data)).catch(() => console.log("refetching cities"))
    }).catch(err => console.log(err))
    return () => source.cancel()
  }, [authToken, currentCountry, currentRegion])

  //misc
  const handleSubmit = (e) => // using upsert functionality to avoid confusion and redundancy
  {
    e.preventDefault();
    if (invalidDate(new Date(review.date))) {
      alert("choose a date that is not in the future or not earlier than 2021")
      return null
    }

    if (invalidAge(review.age)) alert("age cannot be negative")
    else {
      axios.put(`${url}/updateReview`, review).then(({ data }) => {
        const result = data;
        if (result.hasOwnProperty("err")) alert(result.err);
        else if (result.hasOwnProperty("error")) alert(result.error);
        else history.push("/showReviews")
      }).catch(err => alert(`${err}: Problem locating email`));
    }
  };


  const handleCountry = (e) => {
    const entry = e.target.value
    dispatch(COUNTRY(entry))
    setCurrentCountry(entry)
  }

  const handleRegion = (e) => {
    const entry = e.target.value
    dispatch(REGION(entry))
    setCurrentRegion(entry)
  }
  return (
    <PageContainer>
      <h1 className="reviewTitle">Share your post-vaccine review with us.</h1>
      <p>
        Your experience with the Covid vaccine is important to us and
        to others. Let us know how you feel. We will contact you with an
        analysis of your results. We have you covered!
      </p>

      <Form>
        <Form.Row className="mt-4">
          <Col>
            <Form.Control
              type="email"
              placeholder="Email*"
              onChange={(e) => dispatch(EMAIL(e.target.value))} />
            <Form.Text className="text-white list">We'll never share your email with anyone else.</Form.Text>
          </Col>

          <Col>
            <Form.Control
              type="number"
              placeholder="Age"
              min={0}
              onChange={(e) => dispatch(AGE(e.target.value))} />
            <Form.Text className="text-white list">Age</Form.Text>
          </Col>
        </Form.Row>

        <Form.Row className="mt-4">
          <Col>
            <Form.Control
              type="date"
              placeholder="Date of vaccine"
              onChange={(e) => dispatch(DATE(e.target.value))} />
            <Form.Text>Date vaccine taken (date of your latest dose)</Form.Text>
          </Col>

          <Col>
            <Form.Control
              as="select"
              onClick={handleCountry}
              onChange={handleCountry}>
              {countries.map(c => (<option key={c.country_name}>{c.country_name}</option>))}
            </Form.Control>
            <Form.Text>Country</Form.Text>
          </Col>
        </Form.Row>

        <Form.Row className="mt-4">
          <Col>
            <Form.Control
              disabled={!currentCountry}
              as="select"
              onClick={handleRegion}
              onChange={handleRegion} >
              {regions.map(c => (<option key={c.state_name}>{c.state_name}</option>))}
            </Form.Control>
            <Form.Text>Region</Form.Text>
          </Col>

          <Col>
            <Form.Control
              as="select"
              disabled={!currentRegion}
              onChange={(e) => dispatch(CITY(e.target.value))}>
              {cities.map(c => (<option key={c.city_name}>{c.city_name}</option>))}
            </Form.Control>
            <Form.Text>City</Form.Text>
          </Col>
        </Form.Row>

        <Form.Row className="mt-4">
          <Col>
            <Form.Group controlId="controlSelect">
              <Form.Control
                type="textbox"
                placeholder="Do you have any pre-existing conditions?"
                onChange={(e) => dispatch(CONDITIONS(e.target.value))} />
              <Form.Text className="text-white list">
                List your pre-existing conditions with commas as separators.
              </Form.Text>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row className="mt-4">
          <Col>
            <Form.Group controlId="dropdown">
              <Form.Control
                as="select"
                onChange={(e) => dispatch(COMPANY(e.target.value))}
                defaultValue="Pfizer">
                {companies.map(c => (<option key={c}>{c}</option>))}

              </Form.Control>
              <Form.Text>Which vaccine did you undergo?</Form.Text>

            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control
                as="select"
                defaultValue="no"
                onChange={(e) => dispatch(ICU(e.target.value))}>
                <option>yes</option>
                <option>no</option>
              </Form.Control>
              <Form.Text>
                Have you been hospitalized because of the vaccine?
              </Form.Text>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Group controlId="formBasicCheckbox" className="mt-4">
          <Form.Control
            type="textbox"
            placeholder="List any reactions you had after taking the vaccine"
            onChange={(e) => dispatch(REACTIONS(e.target.value))} />
          <Form.Text className="text-white list">
            List your reactions with commas as separators.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="controlTextarea" className="mt-4">
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Comments"
            onChange={(e) => dispatch(COMMENTS(e.target.value))} />
        </Form.Group>
        <div align="right">
          <RenderIf
            condition={loaded}
            fallback=
            {
              <>
                <p>connecting to server...</p>
                <Spinner animation="border" variant="secondary" />
              </>
            }>
            <Button className="submit" type="submit" onClick={handleSubmit}>Submit Review</Button>
          </RenderIf>
        </div>
      </Form>
    </PageContainer>
  );
};

export default WriteReview;