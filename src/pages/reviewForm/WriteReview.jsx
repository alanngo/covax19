import { Fragment, useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap";
import "./writereview.css";
import PageContainer from "../../components/layout/PageContainer";


const WriteReview = () => 
{
  let [review, setReview] = useState(0)
  const handleClick = (e) => 
  {
      // implement logic here
  }
  return (
    <PageContainer>
      <h1>Share your post-vaccine review with us.</h1>
      <p>Your experience with the Covid vaccine is important to us, and important to others. Let us know how you feel. We will contact you with an analysis of your results. We have you covered!</p>

      <Form>

        <Form.Row className="mt-4">

          <Col>
          <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-white list">
              We'll never share your email with anyone else.
            </Form.Text>
          </Col>

          <Col>
            <Form.Control type="text" placeholder="Age" />
          </Col>

        </Form.Row>

        <Form.Row className="mt-4"> 
          
          <Col>
            <Form.Control type="text" placeholder="Date of vaccine" />
          </Col>

          <Col>
            <Form.Control type="text" placeholder="Country" />
          </Col>

        </Form.Row>

        <Form.Row className="mt-4">
          
          <Col>
            <Form.Control type="text" placeholder="State/Region/Province" />
          </Col>

          <Col>
            <Form.Control type="text" placeholder="City" />
          </Col>

        </Form.Row >

          {/* <Form.Group controlId="formBasicCheckbox" className="mt-5">
          <Form.Text className="formText">
            Do you have any allergies?
          </Form.Text>
            <Form.Check type="checkbox" className="check" label="Yes" />
            <Form.Check type="checkbox" className="check" label="No" />
          </Form.Group> */}

          {/* <Form.Control type="text" placeholder="Allergies" />
          <Form.Text className="text-white list">
            List each with a space in between.
          </Form.Text> */}


          <Form.Row className="mt-4">
          
          <Col>

            <Form.Group controlId="controlSelect">
              <Form.Text>Do you have any pre-existing conditions?</Form.Text>

              <Form.Check type="checkbox" className="check" label="Cancer" />
              <Form.Check type="checkbox" className="check" label="Chronic Kidney Disease" />
              <Form.Check type="checkbox" className="check" label="COPD (chronic obstructive pulmonary disease)" />
              <Form.Check type="checkbox" className="check" label="Down Syndrome" />
              <Form.Check type="checkbox" className="check" label="Heart conditions, such as heart failure, coronary artery disease, or cardiomyopathies" />
              <Form.Check type="checkbox" className="check" label="Immunocompromised State (weakened immune system) from solid organ transplant" />
              <Form.Check type="checkbox" className="check" label="Obesity (body mass index [BMI] of 30 kg/m2 or higher but < 40 kg/m2)" />
              <Form.Check type="checkbox" className="check" label="Severe Obesity (BMI ≥ 40 kg/m2)" />
              <Form.Check type="checkbox" className="check" label="Pregnancy" />
              <Form.Check type="checkbox" className="check" label="Sickle Cell Disease" />
              <Form.Check type="checkbox" className="check" label="Smoking" />
              <Form.Check type="checkbox" className="check" label="Type 2 Diabetes Mellitus" />
              <Form.Check type="checkbox" className="check" label="Allergies" />

            </Form.Group>

          </Col>

        </Form.Row>

        <Form.Row className="mt-4">
          
          <Col>
            <Form.Group controlId="formBasicCheckbox">
            <Form.Text>
            Have you been to the ICU for Covid-related reasons?
            </Form.Text>

              <Form.Check type="radio" className="check" name="condition" label="Yes"/>
              <Form.Check type="radio" className="check" name="condition" label="No"/>

            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formBasicCheckbox">
            <Form.Text>
            Which vaccine did you undergo?
            </Form.Text>

            <Form.Control as="select">
              <option>Pfizer</option>
              <option>Moderna</option>
              <option>Johnson &amp; Johnson</option>
              <option>Covishield</option>
              <option>Covaxin</option>
              <option>Sinovac</option>
              <option>Sputnik V</option>
            </Form.Control>

            <br />
            </Form.Group>
          </Col>

        </Form.Row>


          <Form.Group controlId="formBasicCheckbox" className="mt-4">
          <Form.Text>
            Check all of the reactions you may have had since your vaccination.
          </Form.Text>
            <Form.Check type="checkbox" className="check" label="Muscle Pain" />
            <Form.Check type="checkbox" className="check" label="Headaches" />
            <Form.Check type="checkbox" className="check" label="Joint Pain" />
            <Form.Check type="checkbox" className="check" label="Nausea" />
            <Form.Check type="checkbox" className="check" label="Vomiting" />
            <Form.Check type="checkbox" className="check" label="Fever" />
            <Form.Check type="checkbox" className="check" label="Tiredness" />
            <Form.Check type="checkbox" className="check" label="Other" />

            <Form.Control className="mt-2" type="text" placeholder="List any other reactions" />

          </Form.Group>

          <Form.Group controlId="controlTextarea" className="mt-4">
            <Form.Control as="textarea" rows={5} placeholder="Comments"/>
          </Form.Group>

        <Button className="button" onClick={handleClick}>Submit Review</Button>
      </Form>
      

    </PageContainer>

  );
};

export default WriteReview;
