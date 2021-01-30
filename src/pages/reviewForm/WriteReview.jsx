import { Fragment, useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap";
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

          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          
          <Form.Control type="text" placeholder="Age" />

          <Form.Control type="text" placeholder="Date of vaccine" />

          <Form.Control type="text" placeholder="Country" />

          <Form.Control type="text" placeholder="State" />

          <Form.Control type="text" placeholder="City" />
        
          
          <Form.Group controlId="formBasicCheckbox">
          <Form.Text>
            Do you have any allergies?
          </Form.Text>
            <Form.Check type="checkbox" label="Yes" />
            <Form.Check type="checkbox" label="No" />
          </Form.Group>

          <Form.Control type="text" placeholder="Allergies" />
          <Form.Text className="text-muted">
            List each with a space in between.
          </Form.Text>

          <Form.Group controlId="formBasicCheckbox">
          <Form.Text>
            Do you have diabetes?
          </Form.Text>
            <Form.Check type="checkbox" label="Yes" />
            <Form.Check type="checkbox" label="No" />
          </Form.Group>

          <Form.Text>
            Do you have AIDS?
          </Form.Text>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Yes" />
            <Form.Check type="checkbox" label="No" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
          <Form.Text>
          Have you been to the ICU for Covid-related reasons?
          </Form.Text>
            <Form.Check type="checkbox" label="Yes" />
            <Form.Check type="checkbox" label="No" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
          <Form.Text>
          Which vaccine did you undergo?
          </Form.Text>
            <Form.Check type="checkbox" label="Pfizer" />
            <Form.Check type="checkbox" label="Moderna" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
          <Form.Text>
            Check all of the reactions you may have had since your vaccination.
          </Form.Text>
            <Form.Check type="checkbox" label="Muscle Pain" />
            <Form.Check type="checkbox" label="Headaches" />
            <Form.Check type="checkbox" label="Joint Pain" />
            <Form.Check type="checkbox" label="Nausea" />
            <Form.Check type="checkbox" label="Vomiting" />
            <Form.Check type="checkbox" label="Fever" />
            <Form.Check type="checkbox" label="Tiredness" />
            <Form.Check type="checkbox" label="Other" />

            <Form.Control type="text" placeholder="List any other reactions" />

          </Form.Group>

          <Form.Group controlId="controlTextarea">
            <Form.Control as="textarea" rows={3} placeholder="Comments"/>
          </Form.Group>

        <Button onClick={handleClick}>Submit Review</Button>
      </Form>
      
    </PageContainer>

  );
};

export default WriteReview;
