import { Fragment, useState, useEffect } from "react";
import { Button } from "react-bootstrap";


const WriteReview = () => 
{
  let [review, setReview] = useState(0)
  const handleClick = (e) => 
  {
      // implement logic here
  }

import PageContainer from "../../components/layout/PageContainer";

const WriteReview = () => {

  return (
    <PageContainer>
      <h2>Write a review</h2>

      <Button onClick={handleClick}>Submit Review</Button>
    </Fragment>
    </PageContainer>

  );
};

export default WriteReview;
