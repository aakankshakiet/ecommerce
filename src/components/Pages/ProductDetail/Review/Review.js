import React  from "react";
//import { Row,Col } from "react-bootstrap";
import AddReviewForm from "./AddReviewForm";

const Review=()=>{ 
    
     const onReview=( data)=>{
       console.log(data.fullName);
     }    
    return (
      <> 
      <h3>Review</h3>
      <AddReviewForm onDisplay={onReview} />
      </>
    );
};
export default Review;