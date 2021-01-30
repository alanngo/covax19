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
      <h2>Write a review</h2>

      <Button onClick={handleClick}>Submit Review</Button>
    </PageContainer>

  );
};

export default WriteReview;
