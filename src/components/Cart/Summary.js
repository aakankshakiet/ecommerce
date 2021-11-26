import React,{useContext} from "react";
import './summary.scss';
import CartContext from "../../store/CartContext";
const Summary=(props)=>{
    const {totalAmount}=useContext(CartContext);

    // static  value 15 is for tax
    const totalbill=totalAmount-15;

   return(
       <>
         <h3 className="heading">Summary</h3>
         <div>
             {props.children}
         </div>
         <div className="summary">
             <div className="d-flex justify-content-between summary_text">Subtotal<span>&#8377;{totalAmount}</span></div>
             <div className="d-flex justify-content-between summary_text">Shipping<span>Free</span></div>
             <div className="d-flex justify-content-between summary_text">Taxes<span>&#8377;15</span></div>
         </div>
         <div className="total_amount">
             <div className="d-flex justify-content-between summary_text">Total<span>&#8377;{totalbill}</span></div>
         </div>
       </>
   )
};
export default Summary;