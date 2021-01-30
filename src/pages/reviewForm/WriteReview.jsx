import { Fragment, useState, useEffect } from "react";
import { Button } from "react-bootstrap";


const WriteReview = () => 
{
  let [review, setReview] = useState(0)
  const handleClick = (e) => 
  {
      // implement logic here
  }

  return (
    <Fragment>
      <h2>Write a review</h2>
      <Button onClick={handleClick}>Submit Review</Button>
    </Fragment>
  );
};

export default WriteReview;