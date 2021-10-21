import { useState, useEffect, useMemo, useReducer } from "react";
import { Button, Form, Col, Spinner } from "react-bootstrap";
import "./writereview.css";
import PageContainer from "../../components/layout/PageContainer";
import axios from "axios";
import { companies, url } from "../../helper/constants";
import { invalidAge, invalidDate } from "../../helper/functions";
import { useHistory } from "react-router-dom";
import defaultReview from "../../schema/review";
import { reviewReducer } from "./reducer";

const WriteReview = () => {
  
  // use dispatch
  const [review, dispatch] = useReducer(reviewReducer, defaultReview)

  // use state
  const [countries, setCountries] = useState([])
  const [loaded, setLoaded] = useState(false)

  // use memo
  const sortedCountries = useMemo(() => countries.sort((a, b) => {
    let c0 = a.name.common
    let c1 = b.name.common

    if (c0 > c1) return 1
    if (c0 < c1) return -1
    return 0
  }), [countries])

  // use history
  const history = useHistory()

  // use effect
  useEffect(() => {
    axios.get(`${url}/`).then(res => setLoaded(res.data.loaded))
    axios.get("https://restcountries.com/v3.1/all").then(res => setCountries(res.data))
  }, [])

  //misc
  const handleSubmit = (e) => // using upsert functionality to avoid confusion and redundancy
  {
    e.preventDefault();
    if (invalidDate(new Date(review.date))) 
    {
      alert("choose a date that is not in the future or not earlier than 2021")
      return null
    }

    if (invalidAge(review.age)) alert("age cannot be negative")
    else {
      axios.put(`${url}/updateReview`, review).then((res) => {
        const result = res.data;
        if (result.hasOwnProperty("err")) alert(result.err);
        else if (result.hasOwnProperty("error")) alert(result.error);
        else history.push("/showReviews")
      }).catch(err => alert(`${err}: Problem locating email`));
    }
  };


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
              onChange={(e) => dispatch({ type: "_id", payload: e.target.value })}
            />
            <Form.Text className="text-white list">
              We'll never share your email with anyone else.
            </Form.Text>
          </Col>

          <Col>
            <Form.Control
              type="number"
              placeholder="Age"
              min={0}
              onChange={(e) => dispatch({ type: "age", payload: e.target.value })}
            />
            <Form.Text className="text-white list">
              Age
            </Form.Text>
          </Col>
        </Form.Row>

        <Form.Row className="mt-4">
          <Col>
            <Form.Control
              type="date"
              placeholder="Date of vaccine"
              onChange={(e) => dispatch({ type: "date", payload: e.target.value })}
            />
            <Form.Text>Date vaccine taken (date of your latest dose)</Form.Text>
          </Col>

          <Col>
            <Form.Control
              as="select"
              onChange={(e) => dispatch({ type: "country", payload: e.target.value })}
              defaultValue="United States"
            >
              {sortedCountries.map(c => (<option key={c.name.common}>{c.name.common}</option>))}

            </Form.Control>
            <Form.Text>Country</Form.Text>
          </Col>
        </Form.Row>

        <Form.Row className="mt-4">
          <Col>
            <Form.Control
              type="text"
              placeholder="State/Region/Province"
              onChange={(e) => dispatch({ type: "region", payload: e.target.value })}
            />
            <Form.Text className="text-white list">
              Region
            </Form.Text>
          </Col>

          <Col>
            <Form.Control
              type="text"
              placeholder="City"
              onChange={(e) => dispatch({ type: "city", payload: e.target.value })}
            />
            <Form.Text className="text-white list">
              City
            </Form.Text>
          </Col>
        </Form.Row>

        <Form.Row className="mt-4">
          <Col>
            <Form.Group controlId="controlSelect">
              <Form.Control
                type="textbox"
                placeholder="Do you have any pre-existing conditions?"
                onChange={(e) => dispatch({ type: "conditions", payload: e.target.value })}
              />
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
                onChange={(e) => dispatch({ type: "company", payload: e.target.value })}
                defaultValue="Pfizer"
              >
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
                onChange={(e) => dispatch({ type: "icu", payload: e.target.value })}>
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
            onChange={(e) => dispatch({ type: "reactions", payload: e.target.value })}
          />
          <Form.Text className="text-white list">
            List your reactions with commas as separators.
          </Form.Text>
        </Form.Group>


        <Form.Group controlId="controlTextarea" className="mt-4">
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Comments"
            onChange={(e) => dispatch({ type: "comments", payload: e.target.value })}
          />
        </Form.Group>
        <div align="right">
          {
            (loaded) ?
              <>
                <Button className="submit" type="submit" onClick={handleSubmit}>Submit Review</Button>
              </> :
              <>
                <p>connecting to server...</p>
                <Spinner animation="border" variant="secondary" />
              </>
          }
        </div>

      </Form>
    </PageContainer>
  );
};

export default WriteReview;