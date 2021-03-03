import { useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap";
import "./writereview.css";
import PageContainer from "../../components/layout/PageContainer";
import axios from "axios";

const WriteReview = () => 
{
  const companies = ["Pfizer", "Moderna", "Johnson & Johnson", "Covishield", "Covaxin", "Sinovac", "Sputnik V", "Altimmune", "GlaxoSmithKline",
                    "BioNTech", "Heat Biologics", "Novavax", "Inovio Pharmaceuticals", "Sanofi", "Vaxart"]
  const url = "https://covax19.herokuapp.com/";
  const [entries, setEntries] = useState([])
  useEffect(() => 
  {
    const url = "https://covax19.herokuapp.com/";
    axios.get(url).then(res =>setEntries(res.data))

  }, []);
  const [review, setReview] = useState
  (
    { 
      company: "Pfizer", 
      date :new Date().toISOString().substring(0, 10),
      icu: "no"
    }
  );
  const handleSubmit = (e) => 
  {
    e.preventDefault();
    console.log(e.target)
    if (inFuture(new Date(review.date))) alert("choose a date that is not in the future")
    else
    {
      axios.post(url, review).then((res) => 
      {
        const result = res.data;
        if (result.hasOwnProperty("err")) alert(result.err);
        else alert("Successfully added review");
      });
    }
  };

  const handleUpdate = (e) => 
  {
    e.preventDefault();
    console.log(e.target)
    if (inFuture(new Date(review.date))) alert("choose a date that is not in the future")
    else
    {
      axios.put(url, review).then((res) => 
      {
        const result = res.data;
        if (result.hasOwnProperty("err")) alert(result.err);
        else if (result.hasOwnProperty("error")) alert(result.error);
        else alert("Successfully updated review");
      }).catch(err=>alert(`${err}: Problem locating email`));
    }
  };

  const inFuture = (date) => date.setHours(0,0,0,0) > new Date().setHours(0,0,0,0)

  const changeValue = (key, value) =>
    setReview({ ...review, [`${key}`]: value });

  return (
    <PageContainer>
      <h1 className="reviewTitle">Share your post-vaccine review with us.</h1>
      <p>
        Your experience with the Covid vaccine is important to us, and important
        to others. Let us know how you feel. We will contact you with an
        analysis of your results. We have you covered!
      </p>

      <Form>
        <Form.Row className="mt-4">
          <Col>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => changeValue("_id", e.target.value)}
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
              onChange={(e) => changeValue("age", e.target.value) }
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
              onChange={(e) => changeValue("date", e.target.value)}
            />
            <Form.Text>Date vaccine taken</Form.Text>
          </Col>

          <Col>
            <Form.Control
              type="text"
              placeholder="Country"
              onChange={(e) => changeValue("country", e.target.value)}
            />
            <Form.Text className="text-white list">
              Country
            </Form.Text>
          </Col>
        </Form.Row>

        <Form.Row className="mt-4">
          <Col>
            <Form.Control
              type="text"
              placeholder="State/Region/Province"
              onChange={(e) => changeValue("region", e.target.value)}
            />
            <Form.Text className="text-white list">
              Region
            </Form.Text>
          </Col>

          <Col>
            <Form.Control
              type="text"
              placeholder="City"
              onChange={(e) => changeValue("city", e.target.value)}
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
                onChange={(e) => {
                  let words = e.target.value.split(", ");
                  changeValue("conditions", words);
                }}
              />
              <Form.Text className="text-white list">
                List your pre-existing conditions with commas as separators.
              </Form.Text>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Text>Which vaccine did you undergo?</Form.Text>
            <Col>
            <Form.Control
              as="select"
              onChange={(e) => changeValue("company", e.target.value)}
              defaultValue="Pfizer"
            >
              {companies.map(c =>(<option>{c}</option>)) }

            </Form.Control>
            </Col>
          </Form.Group>
           
        </Form.Row>

        <Form.Group controlId="formBasicCheckbox" className="mt-4">
          <Form.Control
            type="textbox"
            placeholder="List any reactions you had after taking the vaccine"
            onChange={(e) => {
              let words = e.target.value.split(", ");
              changeValue("reactions", words);
            }}
          />
          <Form.Text className="text-white list">
            List your reactions with commas as separators.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Text>
            Have you been to the ICU for Covid-related reasons?
          </Form.Text>

          <Form.Check
            type="radio"
            className="check"
            name="condition"
            label="Yes"
            onChange={() => changeValue("icu", "yes")}
          />
          <Form.Check
            type="radio"
            className="check"
            name="condition"
            label="No"
            onChange={() => changeValue("icu", "no")}
          />
        </Form.Group>

        <Form.Group controlId="controlTextarea" className="mt-4">
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Comments"
            onChange={(e) => changeValue("comments", e.target.value)}
          />
        </Form.Group>
        {
          (entries.length===0)?
          <Button className="submit" type="submit" disabled={true}>connecting to server...</Button>
          :
          <Button className="submit" type="submit" onClick={handleSubmit}>Submit Review</Button>
        }
        
        {
          (entries.length===0)?
          <Button className="update" type="update" disabled={true}>connecting to server...</Button>
          :
          <Button className="update" type="update" onClick={handleUpdate}>Update Review</Button>
        }
        
      </Form>
    </PageContainer>
  );
};

export default WriteReview;
