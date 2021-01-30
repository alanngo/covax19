import { Fragment, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
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

      <form>
          Email:
          <input type="text"></input>

          <br />

          Age:
          <input type="text"></input>

          <br />
          
          Date of Vaccine:
          <input type="text"></input>

          <br />

          Country:
          <input type="text"></input>

          <br />

          State:
          <input type="text"></input>

          <br />
          
          City:
          <input type="text"></input>

          <br />

          Do you have any allergies?
          <input type="radio" />
          <label>Yes</label>
          <input type="radio" />
          <label>No</label>

          <br />

          List your allergies:
          <input type="text"></input>
          <p>List each with a space in between</p>

          <br />

          Do you have diabetes?
          <input type="radio" />
          <label>Yes</label>
          <input type="radio" />
          <label>No</label>

          <br />

          Do you have AIDS?
          <input type="radio" />
          <label>Yes</label>
          <input type="radio" />
          <label>No</label>

          <br />

          Have you been to the ICU for Covid-related reasons?
          <input type="radio" />
          <label>Yes</label>
          <input type="radio" />
          <label>No</label>

          <br />

          Which vaccine did you undergo?
          <input type="radio" />
          <label>Pfizer</label>
          <input type="radio" />
          <label>Moderna</label>

          <br />

          Check all of the reactions you may have had since your vaccination.
          <input type="radio" />
          <label>Muscle Pain</label>
          <input type="radio" />
          <label>Headaches</label>
          <input type="radio" />
          <label>Joint Pain</label>
          <input type="radio" />
          <label>Nausea</label>
          <input type="radio" />
          <label>Vomiting</label>
          <input type="radio" />
          <label>Fever</label>
          <input type="radio" />
          <label>Tiredness</label>
          <input type="radio" />
          <label>Other</label>

          <br />

          List any other reactions:
          <input type="text"></input>

          <br />

          Comments:
          <textarea type="text"></textarea>

          <br />

      <Button onClick={handleClick}>Submit Review</Button>
      </form>

    </PageContainer>

  );
};

export default WriteReview;
