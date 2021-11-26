import React from "react";
import './orderPlaced.scss';
import { Link } from "react-router-dom";

const OrderPlaced=()=>{
  return (
      <>
         <div className="order">
             <h3>Your Order Has Been Placed</h3>
            <Link to="/"><button className="button">Continue Shopping</button></Link>
         </div>
      </>
  );
};
export default OrderPlaced;